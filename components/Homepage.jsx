import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HeroSection from "./Hero";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <section className="communities">
        <h2>Explore Our Communities</h2>
        {/* List some communities here */}
      </section>
      <section className="popular-discussions">
        <h2>Popular Discussions</h2>
        {/* List some discussions here */}
      </section>
      <section className="cta">
        <h2>Ready to dive in?</h2>
        <p>
          Join our community and start engaging in meaningful conversations today.
        </p>
        <button>Sign Up</button>
      </section>
    </div>
  );
};

export default HomePage;
