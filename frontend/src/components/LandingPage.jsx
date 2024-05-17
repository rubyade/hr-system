import React from "react";
import Image from "next/image";
import landingImg from "../../public/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import Button from "./Button";
import List from "./List";
import Link from "next/link";

function LandingPage() {
  return (
    <div className="bg-gradient-to-r from-red-300 to-purple-500">
      <div className="p-8 lg:p-14 flex flex-col md:flex-row justify-between pt-24 md:pt-36 lg:pt-48  xl:pt-52 xl:gap-16">
        <div className="flex flex-col md:pr-2 lg:w-7/12 lg:pl-14 lg:mt-7">
          <h4 className="font-bold font-quicksand text-xs text-white uppercase xl:text-sm ">
            automate and hire
          </h4>
          <h1 className="text-2xl md:w-80 xl:w-full font-bold   font-teachers xl:text-5xl">
            HR, Payroll, & Benefits.
          </h1>
          <h1 className="text-4xl font-extrabold font-teachers xl:text-6xl">
            The Complete HR Software
          </h1>
          <p className="text-sm text-white text-left xl:text-lg xl:w-11/12">
            Streamlining your business operations is crucial for efficiency, and
            one way to achieve this is by managing your HR and payroll in a
            single system and by integrating these functions.
          </p>
          <div className="pt-2 pb-9 flex flex-row mt-4 md:pt-4">
            <Link href={"/login"} className="md:pr-10 pr-9 md:static" passHref>
              <Button label="Get Started" />
            </Link>
            <div className="xl:ml-36"></div>
          </div>
        </div>
        <div>
          <Image
            src={landingImg}
            alt="/"
            className="rounded border md:max-w-96 lg:max-w-lg  xl:max-w-2xl lg:pl-8 lg:border-none dark:border-neutral-700 dark:bg-neutral-800"
          />
        </div>
      </div>

      <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

      <div className="shadow-md">
        <List />
      </div>
    </div>
  );
}

export default LandingPage;
