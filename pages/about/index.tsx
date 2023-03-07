import PageHead from "@/components/header/pageHead";
import PageLayout from "@/components/layouts/pageLayout";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <PageHead pageTitle="About Us | JumpStart" />
      <PageLayout>
        <div className="bg-white flex justify-center items-center h-5/6 py-10">
          <div className="mx-auto container">
            <h1 className="font-poppins font-bold text-blue text-3xl text-center">
              We believe in businesses like yours
            </h1>
            <div className="flex">
              <Image
                src="images/group-presentation.svg"
                alt="image"
                width={500}
                height={500}
                className="mx-auto my-10"
              />
            </div>
          </div>
        </div>

        <div className="bg-cyan flex justify-center items-center h-5/6 py-10">
          <div className="mx-auto container">
            <div className="flex">
              <div className="w-1/2 mx-auto">
                <h1 className="font-poppins font-bold text-blue text-3xl text-center">
                  We believe there’s more than just one way to work
                </h1>
                <p className="font-inter text-base text-blue text-center">
                  We offer software with a clear focus on inventory tracking,
                  but with options to accommodate your unique workflow. Whether
                  you dropship herbal teas, manufacture hi-tech counting
                  machines, or make your own jewelry, we’ve got options to
                  accommodate the way you work.
                </p>

                <Image
                  src="images/teamwork.svg"
                  alt="image"
                  width={500}
                  height={500}
                  className="mx-auto my-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex justify-center items-center h-5/6 py-10">
          <div className="mx-auto container">
            <div className="flex">
              <div className="w-1/2 mx-auto">
                <h1 className="font-poppins font-bold text-blue text-3xl text-center">
                  We’re fully stocked with great talent
                </h1>
                <p className="font-inter text-base text-blue text-center">
                  We’re proud to introduce you to our team! Each one of us is
                  committed to helping you and your business succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
