import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Theme } from '@radix-ui/themes';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import Header from './components/Header';
import Particles from './components/Particles';
import '@radix-ui/themes/styles.css';
import './styles/index.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const hasFetched = useRef(false);

  const fetchNews = () => {
    if (hasFetched.current && !loading) {
      console.log('API call skipped, already fetched');
      return;
    }
    console.log('Fetching news via API call');
    setLoading(true);
    axios.get('http://127.0.0.1:8000/mcp/call/get_top_ai_news')
      .then(response => {
        console.log('API call successful:', response.data);
        setArticles(response.data);
        setFilteredArticles(response.data);
        setLoading(false);
        hasFetched.current = true;
      })
      .catch(err => {
        console.error('Error fetching news:', err);
        setError('Failed to load news. Ensure the MCP server is running.');
        setLoading(false);
        hasFetched.current = true;
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Filter articles by source
  const handleFilter = (source) => {
    setFilter(source);
    if (source === 'all') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(article => article.source.toLowerCase().includes(source.toLowerCase())));
    }
  };

  // Unique sources for filter buttons
  const sources = ['all', ...new Set(articles.map(article => article.source))];

  // Masonry breakpoints for responsive columns
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Theme appearance="dark">
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
        <Particles />
        {/* Header with Refresh Button */}
        <Header>
          <button
            onClick={fetchNews}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 flex items-center gap-2"
            disabled={loading}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9H9m11 11v-5h-.581m-15.357-2A8.001 8.001 0 0119.418 15H15" />
            </svg>
            Refresh News
          </button>
        </Header>

        {/* Main Content */}
        <main className="container mx-auto p-4 relative">
          <AnimatePresence>
            {loading && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900/80 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto animate-spin"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="45" stroke="#3B82F6" strokeWidth="5" />
                    <path
                      d="M50 5A45 45 0 0 1 95 50"
                      stroke="#60A5FA"
                      strokeWidth="5"
                      strokeLinecap="round"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 50 50"
                        to="360 50 50"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <path
                      d="M50 10A40 40 0 0 1 90 50"
                      stroke="#93C5FD"
                      strokeWidth="5"
                      strokeLinecap="round"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="360 50 50"
                        to="0 50 50"
                        dur="1.2s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                  <p className="mt-4 text-lg font-semibold">Updating Latest AI News...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {error ? (
            <div className="text-red-500 text-center text-lg">{error}</div>
          ) : filteredArticles.length === 0 && !loading ? (
            <div className="text-center text-lg">No articles available.</div>
          ) : (
            <div>
              {/* Filter Bar */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {sources.map(source => (
                  <button
                    key={source}
                    onClick={() => handleFilter(source)}
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                      filter === source ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    {source.charAt(0).toUpperCase() + source.slice(1)}
                  </button>
                ))}
              </div>

              {/* Masonry Grid */}
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-auto -ml-4"
                columnClassName="pl-4 bg-clip-padding"
              >
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    className="mb-4 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
                  >
                    <h2 className="text-xl font-bold text-blue-300">{article.title}</h2>
                    <p className="text-gray-400 text-sm mt-1">{article.source}</p>
                    <p className="mt-2 text-gray-200">{article.summary}</p>
                    <a
                      href={article.url}
                      className="mt-3 inline-block text-blue-500 hover:text-blue-400 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More →
                    </a>
                  </motion.div>
                ))}
              </Masonry>
            </div>
          )}
        </main>
      </div>
    </Theme>
  );
}

export default App;