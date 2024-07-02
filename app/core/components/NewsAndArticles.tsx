"use client";

import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ArticlesCard from "./ArticlesCard";

interface IArticlesCardProps {
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
}
const mockFetchArticles = async (): Promise<IArticlesCardProps[]> => {
  return new Promise<IArticlesCardProps[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          image: "/assets/blog/b1.jpg",
          title: "How to find your Desired Place more quickly",
          author: "ADMIN",
          date: "March 2018",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        },
        {
          image: "/assets/blog/b2.jpg",
          title: "How to find your Desired Place more quickly",
          author: "ADMIN",
          date: "March 2018",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        },
        {
          image: "/assets/blog/b3.jpg",
          title: "How to find your Desired Place more quickly",
          author: "ADMIN",
          date: "March 2018",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        },
      ]);
    }, 2000);
  });
};

const NewsAndArticles = () => {
  const [articles, setArticles] = useState<IArticlesCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await mockFetchArticles();
      setArticles(data);
      setLoading(false);
    };

    fetchArticles();
  }, []);

  return (
    <div className="text-grayTitle relative w-full py-32 flex items-center flex-col gap-16">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-medium">NEWS AND ARTICLES</h2>
        <p className="text-grayText text-[16px] ml-6 md:ml-0">
          Always upto date with our latest News and Articles
        </p>
      </div>
      <div className="w-5/6 flex justify-center items-center gap-6 flex-wrap">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-4 rounded-[3px] w-[360px] h-[450px] bg-white border-[0.5px] border-extraLightGray shadow-sm p-4"
              >
                <Skeleton height={200} width={360} />
                <div className="px-6 pt-4 pb-8 flex flex-col gap-4">
                  <Skeleton height={20} width={200} />
                  <Skeleton height={15} width={100} />
                  <Skeleton count={3} />
                </div>
              </div>
            ))
          : articles.map((article, index) => (
              <ArticlesCard
                key={index}
                image={article.image}
                title={article.title}
                author={article.author}
                date={article.date}
                description={article.description}
              />
            ))}
      </div>
    </div>
  );
};

export default NewsAndArticles;
