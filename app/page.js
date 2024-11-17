import Contact from "./Components/ContactUs";
import FaqAccordian from "./Components/FaqAccordian";
import Header from "./Components/Header";
import HeroSection from "./Components/Hero-section";
import Metrics from "./Components/Metrics";
import Reports from "./Components/Reports";
import Strategy from "./Components/Strategy";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <div>
       <Header/>
       <HeroSection/>
       <Metrics/>
       <Strategy/>
       <Reports/>
       <Testimonials/>
       <FaqAccordian/>
       <Contact/>
  </div>
  );
}
