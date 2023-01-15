import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

function Home() {
  return (
    <div className="flex flex-col space-y-10">
      <Suspense fallback={<p className="text-red-500">Loading todos</p>}>
        <h1>Loading todos</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p className="text-blue-500">Loading shopping</p>}>
        <h1>Loading shopping</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
