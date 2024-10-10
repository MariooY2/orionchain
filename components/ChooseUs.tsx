import React from "react";
import Image from "next/image";

const ReasonsToChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-around items-center">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center mb-8 md:mb-0">
        <div className="text-center mb-6">
          <h4 className="text-4xl font-bold">
            <mark className="text-blue-600 text-8xl">3</mark> Reasons to Choose
            Us
          </h4>
        </div>
        <div className="sm:flex justify-center items-center  hidden">
          <Image
            src="https://d25c7wiv62hyjr.cloudfront.net/wp-content/uploads/2022/06/why-choose-us.png"
            alt="Why Choose Us"
            width={600} // You should set an appropriate width
            height={400} // And an appropriate height
            className="max-w-full h-96"
          />
        </div>
      </div>

      <div className="w-4/5 md:w-1/2 flex flex-col gap-12">
        {/* Custodian of Your Project(s) */}
        <div className="flex items-start ">
          <Image
            src="https://d25c7wiv62hyjr.cloudfront.net/wp-content/uploads/2022/06/Custodian.svg"
            alt="Custodian"
            width={48} // Set the width
            height={48} // Set the height
            className="w-12 h-12 mr-4"
          />
          <div className="space-y-2">
            <h4 className="text-xl font-bold">Custodian of Your Project(s)</h4>
            <p className="text-black">
              We become the custodian of your project(s) or idea(s) and take
              them to fruition considering them as our own.
            </p>
          </div>
        </div>

        {/* Time and Quality */}
        <div className="flex items-start">
          <Image
            src="https://d25c7wiv62hyjr.cloudfront.net/wp-content/uploads/2022/06/Time-and-quality.svg"
            alt="Time and Quality"
            width={48} // Set the width
            height={48} // Set the height
            className="w-12 h-12 mr-4"
          />
          <div className="space-y-2">
            <h4 className="text-xl font-bold">Time and Quality</h4>
            <p className="text-black">
              Time is irreversible and quality is uncompromisable. And that's
              why we make sure you get your product delivered on time with
              quality.
            </p>
          </div>
        </div>

        {/* End to End Service */}
        <div className="flex items-start">
          <Image
            src="https://d25c7wiv62hyjr.cloudfront.net/wp-content/uploads/2022/06/End-to-end.svg"
            alt="End to End Service"
            width={48} // Set the width
            height={48} // Set the height
            className="w-12 h-12 mr-4"
          />
          <div className="space-y-2">
            <h4 className="text-xl font-bold">End to End Service</h4>
            <p className="text-black">
              We are an end-to-end service provider. Our services range from
              design to development, testing, deployment, and marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonsToChooseUs;
