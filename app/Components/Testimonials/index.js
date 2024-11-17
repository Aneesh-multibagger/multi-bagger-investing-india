import Container from "@/components/Container";
import Text from "@/components/Text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Quote from "../quote";
import Particles from "@/components/ui/particles";

const Testimonials = () => {
  const Testimonials = [
    {
      testimonialcontent: `"I was skeptical at first, but after a year with this strategy,
                my portfolio has grown more than in the previous five years
                combined!"`,
      testimonialauthor: "Rahul S",
      testimoniallocation: "Mumbai",
    },
    {
      testimonialcontent: `"The low drawdown is a game-changer. I no longer lose sleep during market corrections."`,
      testimonialauthor: "Priya M",
      testimoniallocation: "Bangalore",
    },
    {
      testimonialcontent: `"As a busy professional, I love the algorithmic approach. It's like having a expert trader working for me 24/7."`,
      testimonialauthor: "Amit K",
      testimoniallocation: "Delhi",
    },
    {
      testimonialcontent: `"I've tried many strategies over the years, but none have delivered consistent results like this one."`,
      testimonialauthor: "Sanjay P",
      testimoniallocation: "Chennai",
    },
    {
      testimonialcontent: `"The ability to use leverage responsibly has supercharged my returns. This strategy is truly in a league of its own."`,
      testimonialauthor: "Neha R",
      testimoniallocation: "Pune",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full">
      <Container>
        <Text
          variant="h2"
          className="text-[25px] font-semibold mb-8 text-center"
        >
          Hear From Our Happy Investors
        </Text>

        <Carousel className="w-full max-w-2xl mx-auto">
          <CarouselContent className="w-full">
            {Testimonials.map((Testmap, index) => (
              <CarouselItem className="w-full" key={index}>
                {/* <div className="flex justify-center mb-3"> <Quote fill="#ff9800" stroke="#ff9800" className="text-center" /></div> */}
                {/* <Image src={} alt="quote"/> */}
                <Quote />
                <Text className="text-[20px] font-semibold text-center">
                  {Testmap.testimonialauthor}
                </Text>
                <Text className="text-[16px] mb-5 text-center text-black/80">
                  {Testmap.testimoniallocation}
                </Text>
                <Text className="text-[20px] leading-7 tracking-widest text-center text-black/80">
                  {Testmap.testimonialcontent}
                </Text>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-[10%] left-[1rem] md:top-[50%] md:-left-44 bg-gray-200" />
          <CarouselNext className="top-[10%] right-[1rem] md:top-[50%] md:-right-44 bg-gray-200" />
        </Carousel>
      </Container>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#000"
        refresh
      />
    </div>
  );
};

export default Testimonials;
