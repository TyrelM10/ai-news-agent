from mcp.server.fastmcp import FastMCP
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langgraph.graph import StateGraph, END
from typing import List, Dict, TypedDict
from news_client import fetch_top_ai_news
from summariser import create_summarizer
import logging
import sys
import argparse

# Parse command-line arguments
parser = argparse.ArgumentParser(description="AI News Agent Backend")
parser.add_argument('--verbose', action='store_true', help="Enable verbose logging")
args = parser.parse_args()

# Configure logging
logging.basicConfig(
    level=logging.INFO if args.verbose else logging.WARNING,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[logging.StreamHandler(sys.stdout)],
    force=True
)
logger = logging.getLogger(__name__)
if args.verbose:
    logger.info("Starting backend initialization")

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

server = FastMCP(app=app)

try:
    summarizer = create_summarizer()
    if args.verbose:
        logger.info("Summarizer initialized")
except Exception as e:
    logger.error(f"Failed to initialize summarizer: {e}")
    raise

# Define Langgraph state
class NewsState(TypedDict):
    articles: List[Dict]
    summarized_articles: List[Dict]

# Langgraph nodes
def fetch_news_node(state: NewsState) -> NewsState:
    if args.verbose:
        logger.info("Fetching news articles")
    try:
        state["articles"] = fetch_top_ai_news()
        if args.verbose:
            logger.info(f"Fetched {len(state['articles'])} articles")
    except Exception as e:
        logger.error(f"Failed to fetch news: {e}")
        state["articles"] = []
    return state

def summarize_news_node(state: NewsState) -> NewsState:
    if args.verbose:
        logger.info("Summarizing news articles")
    try:
        state["summarized_articles"] = [
            {
                "title": article["title"],
                "source": article["source"],
                "summary": summarizer.summarize(article["content"]),
                "url": article["url"]
            }
            for article in state["articles"]
        ]
        if args.verbose:
            logger.info(f"Summarized {len(state['summarized_articles'])} articles")
    except Exception as e:
        logger.error(f"Failed to summarize news: {e}")
        state["summarized_articles"] = []
    return state

# Define Langgraph workflow
try:
    workflow = StateGraph(NewsState)
    workflow.add_node("fetch_news", fetch_news_node)
    workflow.add_node("summarize_news", summarize_news_node)
    workflow.add_edge("fetch_news", "summarize_news")
    workflow.add_edge("summarize_news", END)
    workflow.set_entry_point("fetch_news")
    graph = workflow.compile()
    if args.verbose:
        logger.info("Langgraph workflow compiled")
except Exception as e:
    logger.error(f"Failed to compile Langgraph workflow: {e}")
    raise

# MCP tool
@server.tool(name="get_top_ai_news", description="Fetch and summarize the top 10 news articles related to Artificial Intelligence.")
def get_top_ai_news() -> List[Dict]:
    if args.verbose:
        logger.info("Executing get_top_ai_news tool")
    try:
        initial_state = {"articles": [], "summarized_articles": []}
        final_state = graph.invoke(initial_state)
        if args.verbose:
            logger.info(f"Tool returned {len(final_state['summarized_articles'])} articles")
        return final_state["summarized_articles"]
    except Exception as e:
        logger.error(f"Tool execution failed: {e}")
        return []

# Explicit FastAPI route
@app.get("/mcp/call/get_top_ai_news", response_model=List[Dict])
async def get_top_ai_news_endpoint():
    if args.verbose:
        logger.info("Handling GET /mcp/call/get_top_ai_news")
    try:
        result = get_top_ai_news()
        if args.verbose:
            logger.info(f"Endpoint returned {len(result)} articles")
        return result
    except Exception as e:
        logger.error(f"Endpoint failed: {e}")
        raise

# Debug route
@app.get("/routes")
async def list_routes():
    if args.verbose:
        logger.info("Listing all routes")
    return [{"path": route.path, "name": route.name, "methods": route.methods} for route in app.routes]

if __name__ == "__main__":
    import uvicorn
    if args.verbose:
        logger.info("Starting FastAPI server")
    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="warning")