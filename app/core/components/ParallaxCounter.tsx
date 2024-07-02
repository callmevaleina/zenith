"use client";
import React from 'react';
import CountUp from 'react-countup';


interface ICounterProps {
  value: number;
  label: string;
}

const Counter = ({ value, label }:ICounterProps) => (
  <div className="text-[60px] flex flex-col gap-2 justify-center items-center">
    <CountUp end={value} duration={3} suffix="k+" />
    <p className='text-[24px] font-medium -mt-4'>{label}</p>
  </div>
);

const ParallaxCounter = () => {
  return (
    <div className="parallaxContainer">
      <div className="overlay flex flex-col gap-16 justify-center items-center md:flex-row">
        <Counter value={90} label="Listings" />
        <Counter value={40} label="Listing Categories" />
        <Counter value={65} label="Visitors" />
        <Counter value={50} label="Happy Clients" />
      </div>
    </div>
  );
};

export default ParallaxCounter;
