import React from "react";
import { ArticleCard, ArticleCardProps } from "./ArticleCard";

interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  slug: string;
}

interface ArticleCardsGridProps {
  articles: ArticleCardProps[];
}

const ArticleCardsGrid: React.FC<ArticleCardsGridProps> = ({
  articles,
}) => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            date={article.date}
            articleUrl={`/articles/${article.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleCardsGrid;
