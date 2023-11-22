import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Our Institution</h1>

        <p className="text-white mb-4">
          Welcome to our institution! We are dedicated to providing high-quality education and fostering an environment of
          learning and growth. Our institution has a rich history and a commitment to excellence in all aspects of
          academic and extracurricular activities.
        </p>

        <p className="text-white mb-4">
          At our institution, we believe in the holistic development of our students. We provide a range of programs and
          opportunities that enable students to explore their interests, develop critical thinking skills, and prepare
          for a successful future.
        </p>

        <p className="text-white mb-4">
          Our experienced faculty members are passionate about education and are dedicated to guiding students on their
          educational journey. We strive to create a supportive and inclusive community where every student feels valued
          and empowered.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>

        <p className="text-white mb-4">
          The mission of our institution is to inspire and empower students to achieve their full potential. We are
          committed to providing a nurturing and challenging educational environment that prepares students for
          lifelong learning and success in a dynamic world.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Vision Statement</h2>

        <p className="text-white mb-4">
          Our vision is to be a leading institution known for academic excellence, innovation, and the holistic
          development of individuals. We aim to cultivate a community of learners who are equipped to make positive
          contributions to society.
        </p>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default AboutPage;
