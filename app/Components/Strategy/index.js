import Container from "@/components/Container";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Shield, TrendingUp, Zap, History } from "lucide-react";
import Text from "@/components/Text";

const Strategy = () => {
  return (
    <div className="bg-[#000000]">
      <Container className="">
        <Text
          variant="h2"
          className="font-bold text-center text-[30px] mb-8 text-gray-300"
        >
          What Makes Our Strategy a Cut Above the Rest
        </Text>

        <Tabs defaultValue="trend-surfing" className="w-full ">
          <TabsList className="grid w-full grid-cols-2 gap-5 md:grid-cols-5 bg-[#1a1a1a] h-auto text-gray-300">
            <TabsTrigger value="trend-surfing">Trend-Surfing</TabsTrigger>
            <TabsTrigger value="cash-management">Cash Management</TabsTrigger>
            <TabsTrigger value="low-drawdown">Low Drawdown</TabsTrigger>
            <TabsTrigger value="leverage-ready">Leverage-Ready</TabsTrigger>
            <TabsTrigger value="time-tested">Time-Tested</TabsTrigger>
          </TabsList>
          <TabsContent value="trend-surfing" className="mt-14 md:mt-5">
            <Card className="bg-[#1a1a1a] border-0">
              <CardHeader>
                <CardTitle className="text-gray-300 text-[25px] font-semibold">
                  Trend-Surfing Mastery
                </CardTitle>
                <CardDescription className="text-gray-300 font-medium text-[20px]">
                  Catch the big waves of market momentum
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300 text-[18px] leading-8 tracking-widest">
                Our unique combination of Supertrend and RSI indicators on
                weekly charts catches the big waves of market momentum, letting
                you ride the trends to their full potential.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cash-management" className="mt-14 md:mt-5">
            <Card className="bg-[#1a1a1a] border-0">
              <CardHeader>
                <CardTitle className="text-gray-300 text-[25px] font-semibold">
                  Smart Cash Management
                </CardTitle>
                <CardDescription className="text-gray-300 font-medium text-[20px]">
                  Stay cool when the market loses its mojo
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300 text-[18px] leading-8 tracking-widest">
                When the market loses its mojo, we don't lose our cool. Our
                system swiftly moves to cash, protecting your capital when
                others are taking a nosedive.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="low-drawdown" className="mt-14 md:mt-5">
            <Card className="bg-[#1a1a1a] border-0">
              <CardHeader>
                <CardTitle className="text-gray-300 text-[25px] font-semibold">
                  Low Drawdown, High Peace of Mind
                </CardTitle>
                <CardDescription className="text-gray-300 font-medium text-[20px]">
                  Sleep soundly knowing your investments are protected
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300 text-[18px] leading-8 tracking-widest">
                With a maximum drawdown of just 19% compared to the index's
                70%+, you can sleep soundly knowing your investments are
                well-protected.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="leverage-ready" className="mt-14 md:mt-5">
            <Card className="bg-[#1a1a1a] border-0">
              <CardHeader>
                <CardTitle className="text-gray-300 text-[25px] font-semibold">
                  Leverage-Ready
                </CardTitle>
                <CardDescription className="text-gray-300 font-medium text-[20px]">
                  Amplify both risks and returns
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300 text-[18px] leading-8 tracking-widest">
                Feeling adventurous? Our strategy is compatible with Margin
                Trading Facility (MTF), allowing you to amplify both risks and
                returns.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="time-tested" className="mt-14 md:mt-5">
            <Card className="bg-[#1a1a1a] border-0">
              <CardHeader>
                <CardTitle className="text-gray-300 text-[25px] font-semibold">
                  Time-Tested Reliability
                </CardTitle>
                <CardDescription className="text-gray-300 font-medium text-[20px]">
                  Weathering market storms since 1997
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300 text-[18px] leading-8 tracking-widest">
                Since 1997, we've weathered multiple market storms, including
                the 2008 crash, emerging stronger each time.
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* <div className="container px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 mb-8">
            <Card className="group rounded-none h-auto pb-20 bg-black cursor-pointer border-[#1a1a1a] relative transition-colors duration-300 mb-auto">
              <span className="absolute left-0 top-0 w-0 h-0.5 bg-[#ff9800] transition-all duration-1000 group-hover:w-full"></span>
              <CardHeader>
                <CardTitle className="flex items-center text-[20px] text-gray-300 group-hover:text-[#ff9800] ">
                  <TrendingUp className="mr-2 group-hover:fill-[#ff9800] group-hover:stroke-[#ff9800]" />
                  Smart Trend Riding
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 text-[18px] text-wrap p-6 leading-7 text-gray-400 opacity-50 hover:opacity-100 fade-in-25 duration-300 w-full">
                We catch big market moves using advanced indicators.
              </CardContent>
            </Card>

            <Card className="group rounded-none h-auto pb-[52px] border-[#1a1a1a] bg-black cursor-pointer relative transition-colors duration-300 mb-auto">
              <span className="absolute left-0 top-0 w-0 h-0.5 bg-[#ff9800] transition-all duration-1000 group-hover:w-full"></span>
              <CardHeader>
                <CardTitle className="flex items-center text-[20px] text-gray-300 group-hover:text-[#ff9800]">
                  <Shield className="mr-2 group-hover:fill-[#ff9800] group-hover:stroke-[#ff9800]" />
                  Effective Risk Control
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 text-[18px] leading-7 text-gray-400 opacity-50 hover:opacity-100 fade-in-25 duration-300">
                We move to cash when markets weaken, protecting your money.
              </CardContent>
            </Card>

            <Card className="group rounded-none h-auto pb-[52px] border-[#1a1a1a] bg-black border-r-0  cursor-pointer relative transition-colors duration-300 mb-auto">
              <span className="absolute left-0 top-0 w-0 h-0.5 bg-[#ff9800] transition-all duration-1000 group-hover:w-full"></span>
              <CardHeader>
                <CardTitle className="flex items-center text-[20px] text-gray-300 group-hover:text-[#ff9800]">
                  <ArrowUpRight className="mr-2 group-hover:fill-[#ff9800] group-hover:stroke-[#ff9800]" />
                  Proven Results
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 text-[18px] leading-7 text-gray-400 opacity-50 hover:opacity-100 fade-in-25 duration-300">
                50% yearly returns since 1997, beating the index by a wide
                margin.
              </CardContent>
            </Card>

            <Card className="group rounded-none h-auto pb-[52px] border-[#1a1a1a] bg-black cursor-pointer relative transition-colors duration-300 mb-auto">
              <span className="absolute left-0 top-0 w-0 h-0.5 bg-[#ff9800] transition-all duration-1000 group-hover:w-full"></span>
              <CardHeader>
                <CardTitle className="flex items-center text-[20px] text-gray-300 group-hover:text-[#ff9800]">
                  <Zap className="mr-2 group-hover:fill-[#ff9800] group-hover:stroke-[#ff9800]" />
                  Adaptable Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 text-[18px] leading-7 text-gray-400 opacity-50 hover:opacity-100 fade-in-25 duration-300">
                Works for different investment amounts and can use leverage if
                desired.
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Badge
              variant="secondary"
              className="text-lg p-2 border-[#1a1a1a] bg-[#1a1a1a] text-gray-200 hover:bg-[#000000]"
            >
              <History className="inline mr-2" />
              25+ years of consistent outperformance
            </Badge>
          </div>
        </div> */}
        <div className="w-full px-4 py-4 sm:py-8">
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-4 sm:mb-8">
        <Card className="group rounded-none h-full bg-black cursor-pointer border-[#1a1a1a] relative transition-colors duration-300">
          <span className="absolute left-0 top-0 w-0 h-0.5 bg-[#ff9800] transition-all duration-1000 group-hover:w-full"></span>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center text-[16px] sm:text-[20px] text-gray-300 group-hover:text-[#ff9800] whitespace-nowrap">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:fill-[#ff9800] group-hover:stroke-[#ff9800]" />
              Smart Trend Riding
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
             <Text className="text-[16px] sm:text-[18px]  leading-6 sm:leading-7 text-gray-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300">We catch big market moves using advanced indicators.</Text> 
          </CardContent>
        </Card>

        <Card className="group rounded-none h-full bg-black cursor-pointer border-[#1a1a1a] relative transition-colors duration-300">
          <span className="absolute left-0 top-0 w-0 h-0.5 bg-[#ff9800] transition-all duration-1000 group-hover:w-full"></span>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center text-[16px] sm:text-[20px] text-gray-300 group-hover:text-[#ff9800]">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:fill-[#ff9800] group-hover:stroke-[#ff9800]" />
              Effective Risk Control
            </CardTitle>
          </CardHeader>
          <CardContent className="text-[16px] sm:text-[18px] p-4 sm:p-6 leading-6 sm:leading-7 text-gray-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            We move to cash when markets weaken, protecting your money.
          </CardContent>
        </Card>

        <Card className="group rounded-none h-full bg-black cursor-pointer border-[#1a1a1a] relative transition-colors duration-300">
          <span className="absolute left-0 top-0 w-0 h-0.5 bg-[#ff9800] transition-all duration-1000 group-hover:w-full"></span>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center text-[16px] sm:text-[20px] text-gray-300 group-hover:text-[#ff9800]">
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:fill-[#ff9800] group-hover:stroke-[#ff9800]" />
              Proven Results
            </CardTitle>
          </CardHeader>
          <CardContent className="text-[16px] sm:text-[18px] p-4 sm:p-6 leading-6 sm:leading-7 text-gray-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            50% yearly returns since 1997, beating the index by a wide margin.
          </CardContent>
        </Card>

        <Card className="group rounded-none h-full bg-black cursor-pointer border-[#1a1a1a] relative transition-colors duration-300">
          <span className="absolute left-0 top-0 w-0 h-0.5 bg-[#ff9800] transition-all duration-1000 group-hover:w-full"></span>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center text-[16px] sm:text-[20px] text-gray-300 group-hover:text-[#ff9800]">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:fill-[#ff9800] group-hover:stroke-[#ff9800]" />
              Adaptable Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="text-[16px] sm:text-[18px] p-4 sm:p-6 leading-6 sm:leading-7 text-gray-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            Works for different investment amounts and can use leverage if desired.
          </CardContent>
        </Card>
      </div>

      <div className="mt-4 sm:mt-8 text-center px-2">
        <Badge
          variant="secondary"
          className="text-base sm:text-lg p-1.5 sm:p-2 border-[#1a1a1a] bg-[#1a1a1a] text-gray-200 hover:bg-[#000000] whitespace-normal sm:whitespace-nowrap"
        >
          <History className="inline w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
          25+ years of consistent outperformance
        </Badge>
      </div>
    </div>
      </Container>
    </div>
  );
};

export default Strategy;
