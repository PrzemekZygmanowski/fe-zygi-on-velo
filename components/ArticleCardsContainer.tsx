import React from "react";
import { ArticleCard, ArticleCardProps } from "./ArticleCard";

interface ArticleCardsContainerProps {
  articles: ArticleCardProps[];
  direction?: "vertical" | "horizontal";
}

export const ArticleCardsContainer: React.FC<ArticleCardsContainerProps> = ({
  articles,
  direction = "vertical",
}) => {
  const changeCardOrder = (
    direction: "vertical" | "horizontal",
    index: number
  ) => {
    if (direction === "horizontal") {
      if (index % 2 === 0) {
        return true;
      }
      return false;
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div
        className={`grid grid-cols-1 md:grid-cols-1 gap-12 ${
          direction === "horizontal" ? "" : "md:grid-cols-3"
        }`}>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            date={article.date}
            articleUrl={`/articles/${article.title}`}
            direction={direction}
            reverse={changeCardOrder(direction, index)}
          />
        ))}
      </div>
    </div>
  );
};
