"use client";
import ClientsReviews from "./core/components/ClientsReviews";
import CreateAccount from "./core/components/CreateAccount";
import Explore from "./core/components/Explore";
import Footer from "./core/components/Footer";
import Header from "./core/components/Header";
import Hero from "./core/components/Hero";
import HowItWorks from "./core/components/HowItWorks";
import Navbar from "./core/components/Navbar";
import NewsAndArticles from "./core/components/NewsAndArticles";
import ParallaxCounter from "./core/components/ParallaxCounter";
import ScrollButton from "./core/components/ScrollButton";
import "./globals.css";

export default function Home() {
  return (
    <main className="w-screen flex min-h-screen flex-col items-center overflow-x-hidden">
      <Header />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Explore />
      <ClientsReviews />
      <ParallaxCounter />
      <NewsAndArticles />
      <CreateAccount />
      <Navbar isFooter />
      <Footer />
      <ScrollButton />
    </main>
  );
}
