"use client";
import { useStore } from "@/zustand/store";
import React from "react";

export const ZustandCounter = () => {
  const { count, increamentCount, decreamentCount } = useStore();
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl">Counter Using Zustand Library</h2>
      <p className="text-2xl font-semibold mb-4">Count: {count}</p>
      <div className="space-x-4">
        <button
          onClick={increamentCount}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Add By 1
        </button>
        <button
          onClick={decreamentCount}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Subtract By 1
        </button>
      </div>
    </div>
  );
};
