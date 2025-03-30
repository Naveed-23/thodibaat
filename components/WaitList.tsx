"use client";
import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex justify-center mt-24 items-center min-h-screen bg-gradient-to-b from-purple-300 to-white p-6">
      <div className="bg-white shadow-lg rounded-xl px-8 py-8 max-w-6xl w-full text-center">
        <h2 className="text-2xl font-bold pt-6 pb-4 text-gray-900">Join the Waitlist</h2>
        <p className="text-gray-600 mt-2">
          Be the first to know when we launch! Enter your email below to join our waitlist.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex pb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="ml-3 px-6 py-3 cursor-pointer bg-purple-600 text-white font-semibold rounded-md shadow hover:bg-purple-700 transition-all"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
}
