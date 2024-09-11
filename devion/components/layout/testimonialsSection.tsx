"use client";
import { Carousel } from "@utils/mui-tailwind";
import React from "react";
import testimonialVector from "@public/testimonial-vector.png";
import TestimonialSlide from "@components/slides/testimonialSlide";
import SliderButton from "@components/buttons/sliderButton";
import Image from "next/image";
import { imageSourceWithBaseURL } from "@utils/index";

function TestimonialsSection({ data }: { data: any }) {
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
          {data.map((item: any) => {
            return (
              <TestimonialSlide
                key={item.id}
                image={imageSourceWithBaseURL(item.image.data.attributes.url)}
                name={item.name}
                description={item.testimonial}
                company={item.designation}
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialsSection;
