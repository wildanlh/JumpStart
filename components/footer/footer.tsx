import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue">
      <div className="container mx-auto py-10 md:text-base text-sm">
        <div className="flex">
          <Image
            src="images/logo.svg"
            alt="logo"
            width={500}
            height={500}
            className="mx-auto w-20 mb-10"
          />
        </div>
        <div className="flex justify-center">
          <ul className="flex space-x-20">
            <li>
              <Link
                href="/"
                className='className="font-poppins text-white hover:border-b-2 hover:border-white hover:transition hover:ease-in-out hover:delay-150 hover:duration-700 font-semibold uppercase"'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className='className="font-poppins text-white hover:border-b-2 hover:border-white hover:transition hover:ease-in-out hover:delay-150 hover:duration-700 font-semibold uppercase"'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className='className="font-poppins text-white hover:border-b-2 hover:border-white hover:transition hover:ease-in-out hover:delay-150 hover:duration-700 font-semibold uppercase"'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-white text-center font-opensans pt-10">
          © 2023 JumpStart Inventory Software. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
