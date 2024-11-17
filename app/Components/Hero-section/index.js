import Container from "@/components/Container";
import Text from "@/components/Text";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Meteors from "@/components/ui/meteors";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden h-[100vh] bg-[#000000] ">
      <Meteors number={30} />
      <Container className="pt-0">
        <div className="w-[100%] md:w-[70%]">
          <div>
            <Text className="text-[30px] md:text-[50px] font-normal tracking-wider text-white">
              <b className="text-[30px] md:text-[50px] font-bold tracking-wider text-[#ff9800]">
                {" "}
                Supercharge
              </b>{" "}
              Your Investments:{" "}
            </Text>{" "}
            <Text
              variant="div"
              className="text-[30px] md:text-[50px] font-normal tracking-wider text-[#ff9800] flex"
            >
              <b className="text-[30px] md:text-[50px] font-bold tracking-wider">50%</b>
              <GradualSpacing
                className="font-display text-[30px] md:text-[50px] font-bold -tracking-wider ml-2"
                text="CAGR Since 1997"
              />
            </Text>
          </div>
          <Text className="text-[16px] md:text-[20px] leading-9 mt-10 tracking-widest text-gray-400 w-[100%] md:w-[70%]">
            Tired of average returns?
            <span className="block mt-3">
             Our Multibagger Index Investing strategy
            has consistently outperformed the Nifty Next 50 index, turning
            market waves into tsunamis of profit.
             With our proven approach, you
            are not just investing – you are unleashing the full potential of
            your portfolio.</span>
          </Text>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
