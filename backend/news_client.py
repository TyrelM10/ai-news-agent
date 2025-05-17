import requests
from typing import List, Dict
from config import NEWS_API_KEY

NEWS_API_URL = "https://newsapi.org/v2/everything"

def fetch_top_ai_news() -> List[Dict]:
    params = {
        "q": "Artificial Intelligence",
        "apiKey": NEWS_API_KEY,
        "sortBy": "publishedAt",
        "language": "en",
        "pageSize": 10
    }
    try:
        response = requests.get(NEWS_API_URL, params=params)
        response.raise_for_status()
        data = response.json()
        if data["status"] == "ok":
            return [
                {
                    "title": article["title"],
                    "source": article["source"]["name"],
                    "content": article["content"] or article["description"] or "",
                    "url": article["url"]
                }
                for article in data["articles"]
            ]
        return []
    except requests.RequestException as e:
        print(f"Error fetching news: {e}")
        return []