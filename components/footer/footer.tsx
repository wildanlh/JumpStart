import Image from "next/image";
import Link from "next/link";
import React from "react";
interface FooterProps {
  links: { href: string; label: string }[];
}

const Footer: React.FC<FooterProps> = ({ links }) => {
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
        <div className="flex justify-center items-center">
          <div className="flex space-x-16">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-poppins text-white font-bold uppercase"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-white text-center font-opensans pt-10">
          © 2023 JumpStart Inventory Software. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
