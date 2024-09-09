"use client";
import { Carousel } from "@utils/mui-tailwind";
import React from "react";
import testimonial from "@public/testimonial.png";
import testimonialVector from "@public/testimonial-vector.png";
import TestimonialSlide from "@components/slides/testimonialSlide";
import SliderButton from "@components/buttons/sliderButton";
import Image from "next/image";

function TestimonialsSection() {
  return (
    <section className=" py-8 pb-[100px] relative">
      <Image
        src={testimonialVector}
        alt=""
        className="absolute right-0 bottom-[-200px] max-w-[250px] z-index[-1]"
      />
      <div className="container m-auto">
        <Carousel
          placeholder={""}
          transition={{ duration: 2, type: "tween" }}
          prevArrow={({ handlePrev }) => (
            <SliderButton handleClick={handlePrev} />
          )}
          nextArrow={({ handleNext }) => (
            <SliderButton handleClick={handleNext} />
          )}
        >
          <TestimonialSlide
            image={testimonial}
            name={" Errinne H"}
            description="I would highly recommend Dental Jobs. I just moved to a new state, and
          after I transferred my license, I wanted to temp to find my perfect
          fit. Dental Jobs is easy to use and offers me the ability to pick and
          choose my schedule, set my own hourly rate, and communicate directly
          with the offices through their mobile app."
            company="Dental Hygienist in Denver, CO"
          />
          <TestimonialSlide
            image={testimonial}
            name={" Errinne H"}
            description="I would highly recommend Dental Jobs. I just moved to a new state, and
          after I transferred my license, I wanted to temp to find my perfect
          fit. Dental Jobs is easy to use and offers me the ability to pick and
          choose my schedule, set my own hourly rate, and communicate directly
          with the offices through their mobile app."
            company="Dental Hygienist in Denver, CO"
          />
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialsSection;
