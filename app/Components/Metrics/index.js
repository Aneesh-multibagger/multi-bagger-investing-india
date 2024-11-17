import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/Container";
import Text from "@/components/Text";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import NumberTicker from "@/components/ui/number-ticker";
const Metrics = () => {
  const stats = [
    {
      label: "CAGR since 1997",
      value: 50,
      suffix: "%",
      comparison: "Nifty Next 50: 16% CAGR",
    },
    {
      label: "Maximum drawdown",
      value: 19,
      suffix: "%",
      comparison: "Nifty Next 50: 70%+",
    },
    {
      label: "Years of consistent outperformance",
      value: 25,
      suffix: "+",
      comparison: "",
    },
    {
      label: "Better risk-adjusted returns",
      value: 3,
      suffix: "x",
      comparison: "",
    },
  ];

  return (
    <div className="relative py-8 sm:py-12 md:py-16">
    <Container>
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8">
          <Text 
            variant="h2" 
            className="text-[20px] md:text-[30px] text-center px-4 sm:px-0"
          >
            Numbers That Speak Louder Than Words
          </Text>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="group transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 break-words">
                    {stat.label}
                  </h3>
                  <div className="flex items-end mb-2">
                    <span className="text-3xl sm:text-4xl font-bold text-blue-500">
                      <NumberTicker className="text-blue-500" value={stat.value} />
                    </span>
                    <span className="text-xl sm:text-2xl ml-1 text-blue-500">
                      {stat.suffix}
                    </span>
                  </div>
                  {stat.comparison && (
                    <>
                      <div className="h-2 bg-blue-600 rounded-full mt-2 transition-all duration-700 group-hover:opacity-80" />
                      <p className="text-xs sm:text-sm mt-2 text-gray-500">
                        {stat.comparison}
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 sm:mt-8 w-full sm:max-w-md bg-blue-600 text-white transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-4 sm:p-6 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                100% Rule Based
              </h3>
              <p className="text-lg sm:text-xl font-semibold">
                Emotion-free trading
              </p>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/80 rounded-full mx-auto mt-4 flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold flex">
                  <NumberTicker className="text-white" value={100} /> %
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
    
    <DotPattern
      className={cn(
        "[mask-image:linear-gradient(white,transparent)] w-full h-auto z-0 opacity-60 sm:opacity-100"
      )}
    />
  </div>
  );
};

export default Metrics;