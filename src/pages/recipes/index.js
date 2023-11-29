import React from 'react';
import Link from 'next/link';

const RecipeList = () => {
  return (
    <div>
      {/* Recipe List Page Content */}
      <Link href="/recipes/1">
        <a>View Recipe 1</a>
      </Link>
    </div>
  );
};

export default RecipeList;