<div align="center">

![logo](https://via.placeholder.com/150?text=AI+News+Agent) <!-- Replace with your project logo -->

<h1 align="center"><strong>📰 AI News Agent</strong><h6 align="center">AI-powered news aggregation and summarization system</h6></h1>

![Python - 3.12.7](https://img.shields.io/badge/PYTHON-3.11+-blue?style=for-the-badge&logo=python&logoColor=white)
![LangGraph - 0.3.34](https://img.shields.io/badge/LangGraph-0.3+-teal?style=for-the-badge&logo=langgraph)
![FastAPI - Version](https://img.shields.io/badge/FastAPI-0.115+-teal?style=for-the-badge&logo=fastapi)
![React - Version](https://img.shields.io/badge/React-18.2+-blue?style=for-the-badge&logo=react)
![Ollama - Version](https://img.shields.io/badge/Ollama-0.4+-orange?style=for-the-badge&logo=ollama)
![Camel AI - Version](https://img.shields.io/badge/CamelAI-0.2+-orange?style=for-the-badge&logo=camelai)
![MCP - Version](https://img.shields.io/badge/MCP-1.9+-red?style=for-the-badge&logo=mcp)
[![Generic badge](https://img.shields.io/badge/License-MIT-<COLOR>.svg?style=for-the-badge)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/TyrelM10/ai-news-agent.svg?style=for-the-badge)](https://github.com/TyrelM10/ai-news-agent/issues)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg?style=for-the-badge)

</div>

---

> [!IMPORTANT]  
> 📋 Version Updates from v1.0:  
> 1. **Interactive Frontend Design**: Replaced timeline with a masonry grid layout, featuring 3D hover effects, a source filter bar, and fade-in animations.  
> 2. **Enhanced Loading Animation**: Custom SVG spinner with concentric rotating paths and a blurred background, displaying "Updating Latest AI News...".  
> 3. **Resolved Double API Calls**: Fixed redundant API requests using a `useRef` hook in React Strict Mode.  
> 4. **CORS Middleware**: Added FastAPI CORS support for seamless communication between frontend (`http://localhost:5173`) and backend (`http://127.0.0.1:8000`).  
> 5. **Reduced Backend Logging**: Set logging to `WARNING` level with a `--verbose` flag to optionally enable detailed logs, minimizing terminal output.

---

## 📚 Table of Contents
- [Overview](#overview)
<!-- - [Demo](#demo) -->
- [Technical Flow Chart](#technical-flowchart)
- [Key Features](#key-features)
- [Tech Stack](#technology-stack)
- [Installation and Setup](#installation-setup)
  - [Using Docker](#docker-setup)
  - [Manual Installation](#manual-setup)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
<!-- - [Citing](#citing) -->
- [Contact](#contact)

---

## 📌 Overview <a name="overview"></a>

The **AI News Agent** is an advanced **AI-powered web application** designed to **fetch, summarize, and display the latest AI-related news articles** in a visually engaging and user-friendly interface.  

🚀 **Powered by Multi-Agent Intelligence**, this system integrates:  
- **🤖 Large Language Models (LLMs)** via **Ollama** and **Camel AI** for intelligent summarization of news articles.  
- **📚 News API Integration** for real-time retrieval of AI-related articles.  
- **🌐 Interactive Frontend** with a masonry grid layout, 3D hover effects, and a futuristic design using React, Radix UI, and Tailwind CSS.  
- **⚡ Multi-Agent Orchestration** with LangGraph for structured workflows managing news fetching and summarization.

### **What You’ll Learn from This Project** 📖  
🔹 **👨‍💻 Multi-Agent Orchestration** with LangGraph for efficient workflow management.  
🔹 **🔍 AI-Driven Summarization** using LLMs to generate concise, accurate article summaries.  
🔹 **⚡ Modern Frontend Design** with React, Framer Motion animations, and responsive layouts.  
🔹 **🔒 Scalable Backend** with FastAPI, MCP, and robust exception handling for production readiness.

📂 **For learners**: Refer to `backend/main.py` and `frontend/src/App.jsx` for detailed code comments explaining the agentic workflow and frontend design! 🎯  

<!-- --- -->

<!-- ## 💫 Demo <a name="demo"></a> -->

<!-- Replace with your demo video or screenshot -->
<!-- ![Demo](https://via.placeholder.com/600x300?text=AI+News+Agent+Demo) -->

<!-- If you like what you see and want to support the project, consider contributing or reaching out! 😊 -->

<!-- 📂 **For a detailed demo video**: Check out `assets/ai-news-agent-demo.mp4`. 📽️ -->

<!-- --- -->

## 🛡️ Technical Flow Chart <a name="technical-flowchart"></a>

![Technical Flow Chart](https://via.placeholder.com/600x400?text=Technical+Flow+Chart) <!-- Replace with your flowchart -->

*Flowchart*: The system retrieves AI news via the News API, processes articles through a LangGraph workflow (fetch → summarize), and displays summarized content in a dynamic React frontend with a masonry grid layout.

---

## ✨ Key Features <a name="key-features"></a>

- 🤖 **Multi-Agent Architecture**: Specialized agents for fetching news and summarizing articles, orchestrated by LangGraph.  
- 📚 **Real-Time News Retrieval**: Integrates with News API to fetch the top 10 AI-related articles.  
- 🧠 **AI-Powered Summarization**: Uses **Ollama Llama 3.2 3B** with a **Camel AI** fallback to generate 2-3 sentence summaries.  
- 💻 **Interactive Masonry Grid**: Displays articles in a responsive masonry grid with 3D hover effects, source filtering, and fade-in animations, enhanced by a particle background.  
- ⏳ **Engaging Loading Animation**: Custom SVG spinner with concentric rotating paths, centered on a blurred background with "Updating Latest AI News...".  
- 🔄 **Manual Refresh**: Refresh button to re-fetch news, disabled during loading to prevent redundant calls.  
- ⚔️ **Robust Error Handling**: Manages API failures, empty content, and summarization errors with graceful fallbacks.  
- 🌐 **CORS Support**: FastAPI middleware ensures seamless frontend-backend communication.  
- 📜 **Minimal Logging**: Backend logs only warnings by default, with a `--verbose` flag for detailed debugging.

> [!NOTE]  
> Upcoming features:  
> 1. Real-time web search integration for broader news sources.  
> 2. User-customizable news categories and summary lengths.  
> 3. Voice-based interaction for news queries.  
> 4. Open to suggestions and contributions.

---

## 🛠️ Technology Stack <a name="technology-stack"></a>

| Component | Technologies |
|-----------|-------------|
| 🔹 **Backend Framework** | FastAPI, MCP |
| 🔹 **Agent Orchestration** | LangGraph, LangChain |
| 🔹 **Summarization** | Ollama (Llama 3.2 3B), Camel AI |
| 🔹 **News Retrieval** | News API (via `requests`) |
| 🔹 **Frontend** | React, Radix UI, Tailwind CSS, Framer Motion, react-masonry-css |
| 🔹 **Typography** | Google Fonts (Orbitron) |
| 🔹 **Deployment** | Vite (frontend), Uvicorn (backend), Docker |

**Backend Dependencies** (from `requirements.txt`):  
- `fastapi==0.115.12`, `mcp==1.9.0`, `fastmcp==2.3.4`  
- `langgraph==0.3.34`, `langchain-core==0.3.56`  
- `ollama==0.4.8`, `camel-ai==0.2.59`  
- `requests==2.32.3`, `python-dotenv==1.1.0`  
- Full list in `backend/requirements.txt`.

**Frontend Dependencies** (from `package.json`):  
- `react==18.2.0`, `react-dom==18.2.0`  
- `@radix-ui/themes==3.1.3`, `framer-motion==12.12.1`  
- `axios==1.7.7`, `tailwindcss==3.4.10`, `react-masonry-css`  
- Full list in `frontend/package.json`.

---

## 🚀 Installation & Setup <a name="installation-setup"></a>

## 📌 Option 1: Using Docker <a name="docker-setup"></a>

### Prerequisites:
- [Docker](https://docs.docker.com/get-docker/) installed
- News API key from [newsapi.org](https://newsapi.org)
- [Ollama](https://ollama.ai) running separately for LLM support

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/TyrelM10/ai-news-agent.git
cd ai-news-agent
```

### 2️⃣ Create Environment File
Create a `.env` file in `backend/`:
```bash
NEWS_API_KEY=your_news_api_key_here
```
> [!WARNING]  
> Ensure the API key is valid and has no trailing whitespace.

### 3️⃣ Set Up Ollama
Run Ollama in a separate terminal or as a service:
```bash
ollama serve
ollama pull llama3.2:3b
```
Verify:
```bash
ollama list
```
Ensure `llama3.2:3b` is listed.

### 4️⃣ Build the Docker Image
```bash
docker build -t ai-news-agent .
```

### 5️⃣ Run the Docker Container
```bash
docker run -d --name ai-news-agent -p 8000:8000 -p 5173:5173 --env-file backend/.env ai-news-agent
```
- Backend: [http://127.0.0.1:8000](http://127.0.0.1:8000)
- Frontend: [http://localhost:5173](http://localhost:5173)

### Managing the Container:
#### Stop the Container
```bash
docker stop ai-news-agent
```

#### Start the Container
```bash
docker start ai-news-agent
```

#### View Logs
```bash
docker logs ai-news-agent
```

#### Remove the Container
```bash
docker rm ai-news-agent
```

### Troubleshooting:
#### Container Health Check
```bash
docker inspect --format='{{.State.Health.Status}}' ai-news-agent
```

#### Container Not Starting
Check logs for errors:
```bash
docker logs ai-news-agent
```
Ensure Ollama is running and the News API key is valid.

## 📌 Option 2: Manual Installation <a name="manual-setup"></a>

### Prerequisites:
- Python 3.11+
- Node.js 18+, npm 9+
- [Ollama](https://ollama.ai) for local LLM support
- News API key from [newsapi.org](https://newsapi.org)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/TyrelM10/ai-news-agent.git
cd ai-news-agent
```

### 2️⃣ Backend Setup
#### Create & Activate Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows
```

#### Install Dependencies
```bash
cd backend
pip install -r requirements.txt
```

#### Set Up Environment Variables
Create `backend/.env`:
```bash
NEWS_API_KEY=your_news_api_key_here
```

#### Run the Backend
```bash
python main.py
```
Backend available at: [http://127.0.0.1:8000](http://127.0.0.1:8000)
> [!NOTE]  
> Use `python main.py --verbose` for detailed logging during debugging.

### 3️⃣ Frontend Setup
#### Navigate to Frontend
```bash
cd ../frontend
```

#### Install Dependencies
```bash
npm install
```

#### Run the Frontend
```bash
npm run dev
```
Frontend available at: [http://localhost:5173](http://localhost:5173)

### 4️⃣ Ollama Setup
#### Install Ollama
Follow instructions at [ollama.ai](https://ollama.ai).

#### Run Ollama Server
```bash
ollama serve
```

#### Pull Llama 3.2 3B Model
```bash
ollama pull llama3.2:3b
```

#### Verify
```bash
ollama list
```
Ensure `llama3.2:3b` is listed.

---

## 🧠 Usage <a name="usage"></a>

> [!NOTE]  
> 1. The first run may take time as Ollama downloads the Llama 3.2 3B model.  
> 2. Ensure Ollama and the backend are running before starting the frontend.  
> 3. Check browser console (F12) for frontend errors and backend terminal for warnings.

- Open [http://localhost:5173](http://localhost:5173) to view AI news.  
- Observe the SVG spinner with a blurred background during loading.  
- Browse articles in a responsive masonry grid with 3D hover effects and fade-in animations.  
- Filter articles by source using the filter bar at the top.  
- Click **Refresh News** to fetch updated articles (disabled during loading).  
- Click **Read More** to visit original article sources.

---

## 🤝 Contributions <a name="contributions"></a>
Contributions are welcome! Check the [issues](https://github.com/TyrelM10/ai-news-agent/issues) tab for feature requests and improvements.  

To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

---

## ⚖️ License <a name="license"></a>
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<!-- ## 📝 Citing <a name="citing"></a>
```bibtex
@misc{AINewsAgent2025,
  author = {Tyrel Menezes},
  title = {AI News Agent},
  year = {2025},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://github.com/TyrelM10/ai-news-agent}}
}
``` -->

---

## 📬 Contact <a name="contact"></a>
For questions or collaboration inquiries, reach out to **Tyrel Menezes** on:  

🔗 **LinkedIn**: [https://www.linkedin.com/in/tyrel-menezes](https://www.linkedin.com/in/tyrel-menezes)  
🔗 **GitHub**: [https://github.com/TyrelM10](https://github.com/TyrelM10)  

<p align="right">
 <a href="#top"><b>🔝 Return </b></a>
</p>

---