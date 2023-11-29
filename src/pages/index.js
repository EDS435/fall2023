import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      {/* Home Page Content */}
      <Link href="/recipes">
        <a>Go to Recipes</a>
      </Link>
    </div>
  );
};

export default Home;