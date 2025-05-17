import { Button, Card, Text } from '@radix-ui/themes';
import { downloadSummary } from '../utils/download';

function NewsCard({ article }) {
  const handleDownload = () => {
    downloadSummary(article.summary, article.title);
  };

  return (
    <Card className="bg-gray-800 p-4">
      <h2 className="text-lg font-semibold text-white mb-2">{article.title}</h2>
      <Text size="2" className="text-gray-400 mb-2">Source: {article.source}</Text>
      <Text size="3" className="text-gray-300 mb-4">{article.summary}</Text>
      <div className="flex justify-between items-center">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Read Full Article
        </a>
        <Button onClick={handleDownload} variant="soft" size="2">
          Download Summary
        </Button>
      </div>
    </Card>
  );
}

export default NewsCard;