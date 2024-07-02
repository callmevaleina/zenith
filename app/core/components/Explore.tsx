"use client";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ActivityCard, { IActivityCardProps } from "./ActivityCard";
import { DestinationType } from "../enums/detination-type.enum";

const mockFetchActivities = () => {
  return new Promise<IActivityCardProps[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          imageUrl: "/assets/explore/e1.jpg",
          name: "Tommy Helfinger Bar",
          rating: 5.0,
          reviews: 10,
          priceRange: "$5 - $300",
          type: DestinationType.Restaurant,
          profileImageUrl: "/assets/explore/person.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
          status: "Close Now",
          category: "Best Rated",
        },
        {
          imageUrl: "/assets/explore/e2.jpg",
          name: "Swim And Dine Resort",
          rating: 4.5,
          reviews: 8,
          priceRange: "$50 - $500",
          type: DestinationType.Hotel,
          profileImageUrl: "/assets/explore/person.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
          status: "Open Now",
          category: "Featured",
        },
        {
          imageUrl: "/assets/explore/e3.jpg",
          name: "Europe Tour",
          rating: 5.0,
          reviews: 15,
          priceRange: "$5k - $10k",
          type: DestinationType.Destination,
          profileImageUrl: "/assets/explore/person.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
          status: "Close Now",
          category: "Best Rated",
        },
        {
          imageUrl: "/assets/explore/e4.jpg",
          name: "Banglow With Swiming Pool",
          rating: 5.0,
          reviews: 10,
          priceRange: "$10k - $15k",
          type: DestinationType.RealState,
          profileImageUrl: "/assets/explore/person.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
          status: "Close Now",
          category: "Most Viewed",
        },
        {
          imageUrl: "/assets/explore/e5.jpg",
          name: "Vintage Car Expo",
          rating: 4.2,
          reviews: 8,
          priceRange: "$500 - $1200",
          type: DestinationType.Automotive,
          profileImageUrl: "/assets/explore/person.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
          status: "Open Now",
          category: "Featured",
        },
        {
          imageUrl: "/assets/explore/e6.jpg",
          name: "Thailand Tour",
          rating: 5.0,
          reviews: 15,
          priceRange: "$500 - $1200",
          type: DestinationType.Destination,
          profileImageUrl: "/assets/explore/person.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....",
          status: "Close Now",
          category: "Best Rated",
        },
      ]);
    }, 2000);
  });
};

const Explore = () => {
  const [activitiesCardsData, setActivitiesCardsData] = useState<
    IActivityCardProps[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await mockFetchActivities();
      setActivitiesCardsData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="text-grayTitle relative w-full py-32 flex items-center flex-col gap-16 bg-extraExtraLightGray">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-medium">EXPLORE</h2>
        <p className="text-grayText text-[16px] ml-6 md:ml-0">
          Explore new place, food, culture around the world and many more.
        </p>
      </div>
      <div className="w-5/6 flex justify-center items-center gap-6 flex-wrap">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-[380px] p-4">
                <Skeleton height={400} />
                <Skeleton count={3} />
              </div>
            ))
          : activitiesCardsData.map((activity, index) => (
              <ActivityCard
                key={index}
                imageUrl={activity.imageUrl}
                name={activity.name}
                rating={activity.rating}
                reviews={activity.reviews}
                priceRange={activity.priceRange}
                type={activity.type}
                profileImageUrl={activity.profileImageUrl}
                description={activity.description}
                status={activity.status}
                category={activity.category}
              />
            ))}
      </div>
    </div>
  );
};

export default Explore;
