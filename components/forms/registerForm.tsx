import Link from "next/link";
import React from "react";

export default function RegisterForm() {
  return (
    <div className="bg-white md:w-1/4 w-80 p-10 mx-auto rounded-lg">
      <h1 className="text-blue font-raleway text-2xl font-bold uppercase mb-5">
        Register
      </h1>
      <form action="" className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-10">
        <div>
          <label htmlFor="first-name" className="sr-only">
            First Name
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            required
            className="relative block w-full p-3 border border-blue placeholder-blue text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="First Name"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="sr-only">
            Last Name
          </label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            required
            className="relative block w-full p-3 border border-blue placeholder-blue text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            required
            className="relative block w-full p-3 border border-blue placeholder-blue text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Phone"
          />
        </div>
        <div>
          <label htmlFor="address" className="sr-only">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            className="relative block w-full p-3 border border-blue placeholder-blue text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Address"
          />
        </div>
        <div>
          <label htmlFor="city" className="sr-only">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            className="relative block w-full p-3 border border-blue placeholder-blue text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="City"
          />
        </div>
        <div>
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            required
            className="relative block w-full p-3 border border-blue placeholder-blue text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Country"
          />
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="relative block w-full p-3 border border-blue placeholder-blue text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="relative block w-full p-3 border border-blue placeholder-blue text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
        <div className="md:col-span-2">
          <input
            id="password"
            name="password"
            type="file"
            autoComplete="current-password"
            required
            className="relative block w-full p-3 border border-blue placeholder-blue text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
        <div>
          <button className="w-full bg-orange text-white p-3 rounded-full font-medium">
            Register
          </button>
        </div>
      </form>
      <p className="text-blue text-sm text-center font-inter">
        Already have an account?
        <Link href="/login" className="underline ml-2">
          Login here
        </Link>
      </p>
    </div>
  );
}
