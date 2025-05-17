from camel.agents import ChatAgent
from camel.messages import BaseMessage
from camel.models import ModelFactory
from camel.types import ModelPlatformType


class SummarizerAgent:
    def __init__(self):
        # client = ollama.Client()
        self.ollama_model = ModelFactory.create(model_platform=ModelPlatformType.OLLAMA, model_type="llama3.2:3b", url='http://localhost:11434/v1', model_config_dict={"temperature": 0.0},)
        # self.ollama_model = lambda prompt: client.generate(model="llama3.2:3b", prompt=prompt)["response"]
        self.agent = ChatAgent(
            system_message=BaseMessage(
                role_name="Summarizer",
                role_type="assistant",
                meta_dict={},
                content="You are a helpful assistant that summarizes news articles in 2-3 sentences."
            ),
            model=self.ollama_model
        )

    def summarize(self, content: str) -> str:
        if not content:
            return "No content available to summarize."
        prompt = f"Summarize the following article in 2-3 sentences:\n\n{content}"
        try:
            response = self.agent.step(prompt)
            return response.msg.content
        except Exception as e:
            return f"Error summarizing content: {str(e)}"

def create_summarizer() -> SummarizerAgent:
    return SummarizerAgent()