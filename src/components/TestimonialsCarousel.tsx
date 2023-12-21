"use client";

import cn from "@/utils/cn";
import { LibreBaskerville } from "@/utils/fonts";
import Image from "next/image";
import Flickity from "react-flickity-component";

import "flickity/css/flickity.css";

export default function TestimonialsCarousel() {
  const FLICKITY_OPTIONS = {
    autoPlay: 5000,
    draggable: true,
    pauseAutoPlayOnHover: true,
    wrapAround: true,
    pageDots: true,
  };

  return (
    <div className="w-full bg-[#f8f8fa]">
      <div className="container mx-auto flex justify-center px-4 py-20 md:py-24">
        <Flickity
          className="w-[90%]"
          options={FLICKITY_OPTIONS}
          // static
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </Flickity>
      </div>
    </div>
  );
}

function Testimonial({
  imgUrl,
  heading,
  description,
  name,
  designation,
  bgColor,
}: {
  imgUrl: string;
  heading: string;
  description: string;
  name: string;
  designation: string;
  bgColor: string;
}) {
  return (
    <div className="grid w-full grid-cols-1 gap-10 pb-10 md:grid-cols-7 md:px-16">
      <div
        className="col-span-4 flex flex-col rounded-md p-6 md:rounded-none md:!bg-transparent md:p-0"
        style={{ backgroundColor: bgColor }}
      >
        <h5
          className={cn(
            LibreBaskerville.className,
            "mb-5 text-xl font-bold text-brand-dark",
          )}
        >
          {heading}
        </h5>
        <p className="mb-24 text-lg italic text-brand-dark">{description}</p>
        <p
          className={cn(
            LibreBaskerville.className,
            "mb-2 text-xl font-bold text-brand-dark",
          )}
        >
          {name}
        </p>
        <p className="mb-4 text-sm text-[#8b8596]">{designation}</p>
      </div>

      <Image
        src={imgUrl}
        alt={heading}
        width={550}
        height={450}
        className="hidden md:col-span-3 md:block"
      />
    </div>
  );
}

const TESTIMONIALS = [
  {
    imgUrl: "/testimonials/testimonial1.webp",
    heading:
      "Best Document AI solution that comes with pre-trained APIs a CRE lender needs",
    description: `"Amongst others, the biggest advantage of partnering with Docsumo is the data capture accuracy they’re able to deliver. We’re witnessing a 95%+ STP rate, that means we don’t even have to look at risk assessment documents 95 out of 100 times, and the extracted data is directly pushed into the database."`,
    name: "Howard Leiner",
    designation: "CTO, Arbor",
    bgColor: "#e0edcd",
  },
  {
    imgUrl: "/testimonials/testimonial2.webp",
    heading:
      "Docsumo is your go-to solution if you need a flexible solution to capture data from unstructured documents",
    description: `“Docsumo does a very good job when it comes to our specific use-case. Debt settlement letters vary a lot from each other, but Docsumo manages to capture data accurately almost every single time at the processing speed which is unprecedented. We’re witnessing the STP rate of over 95% with Docsumo.”`,
    name: "Daniel Tilipman",
    designation: "President & Co-Founder, National Debt Relief",
    bgColor: "#cfe8e5",
  },
  {
    imgUrl: "/testimonials/testimonial3.webp",
    heading:
      "With Docsumo we are now able to process thousands of ACORD Forms in a day",
    description: `"We were looking for a tech partner to automate analysis of certificates of insurance for our real estate liability management software. We are really happy with Docsumo’s APIs and their team’s dedication to solving our problem. We are now able to process thousands of ACORD forms a day automatically while being able to get accurate analytics from over 100 data points”`,
    name: "Michael Rudman",
    designation: "Co-founder & CTO, Jones",
    bgColor: "#e3cdd6",
  },
  {
    imgUrl: "/testimonials/testimonial4.webp",
    heading:
      "With Docsumo, we are now able to save more than 500 hours per month.",
    description: `“With Docsumo, we are now able to assign barcodes in less than 2 mins. The same process used to take us 20 mins previously. We are now saving hundreds of hours a month generating Advanced Shipment Notifications. It has reduced manual errors drastically.”`,
    name: "Neil Lawrence",
    designation: "Business Process Manager, BiagiBros, California",
    bgColor: "#e0cfa8",
  },
  {
    imgUrl: "/testimonials/testimonial5.webp",
    heading: "One solution for different utility bill formats",
    description: `“We’re processing utility bills from 6 different service providers for portfolio management. The challenge was to have just one solution to process all different versions of bills to save us the hassle of retraining & switching amongst multiple solutions. Docsumo has been able to deliver just that - one solution for all different variations.“`,
    name: "Shani Nowlin",
    designation: "Chief Technology Officer Westland Real Estate Group",
    bgColor: "#b0d2d8",
  },
  {
    imgUrl: "/testimonials/testimonial6.webp",
    heading: "Best in class for capturing data from financial documents",
    description: `“We are using Docsumo’s APIs for automating data capture from bank statements and identity cards while on-boarding customers. It has reduced the time our operations team spends on data entry by manifolds while providing a much better customer experience.”`,
    name: "Prashanth Ranganathan",
    designation: "CEO, PayU Credit",
    bgColor: "#f8ca98",
  },
];
