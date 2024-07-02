"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IReview {
  name: string;
  location: string;
  rating: number;
  review: string;
  imageUrl: string;
}

const mockFetchReviews = async (): Promise<IReview[]> => {
  return new Promise<IReview[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Tom Leaknar",
          location: "London, UK",
          rating: 5,
          review:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
          imageUrl: "/assets/clients/c1.png",
        },
        {
          name: "Monirul Islam",
          location: "London, UK",
          rating: 5,
          review:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
          imageUrl: "/assets/clients/c2.png",
        },
        {
          name: "Shorab Hossain",
          location: "London, UK",
          rating: 5,
          review:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
          imageUrl: "/assets/clients/c3.png",
        },
        {
          name: "John Doe",
          location: "London, UK",
          rating: 5,
          review:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
          imageUrl: "/assets/clients/c4.png",
        },
      ]);
    }, 2000);
  });
};

const ClientsReviews = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await mockFetchReviews();
      setReviews(data);
      setLoading(false);
    };

    fetchReviews();
  }, []);

  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        },
      },
    ],
  };

  return (
    <div className="text-grayTitle relative w-full py-32 flex items-center flex-col gap-16">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-medium">CLIENTS REVIEWS</h2>
        <p className="text-grayText text-[16px]">
          What our clients say about us
        </p>
      </div>
      <div className="w-full">
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="!flex !flex-col !justify-center bg-white rounded custom-shadow my-5 px-6 py-4 !mx-4 !w-[350px] !h-[250px]"
                >
                  <div className="flex items-center gap-4">
                    <Skeleton circle width={50} height={50} />
                    <div>
                      <Skeleton width={100} height={20} />
                      <Skeleton width={80} height={15} />
                      <Skeleton width={60} height={20} />
                    </div>
                  </div>
                  <Skeleton count={3} className="mt-2" />
                </div>
              ))
            : reviews.map((review, index) => (
                <div
                  key={index}
                  className="!flex !flex-col !justify-center bg-white rounded custom-shadow my-5 px-6 py-4 !mx-8 md:!mx-4 !w-[320px] !h-[250px] review-slide"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.imageUrl}
                      alt={review.name}
                      className="rounded-full"
                      width={50}
                      height={50}
                    />
                    <div>
                      <h3 className="text-[18px] font-medium text-grayTitle">
                        {review.name}
                      </h3>
                      <p className="text-xs text-grayText">{review.location}</p>
                      <div className="flex">
                        {Array(review.rating)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.383 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.383-2.46a1 1 0 00-1.176 0l-3.383 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.244 9.4c-.783-.57-.381-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.974z" />
                            </svg>
                          ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-grayText text-xs mt-2">{review.review}</p>
                </div>
              ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientsReviews;
