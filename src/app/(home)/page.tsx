import HomeHero  from "./components/HomeHero";
import HomePerformance from "./components/HomePerformance";
import HomeSnapshot from "./components/HomeSnapshot";
import HomeBuiltFor from "./components/HomeBuiltFor";
import HomeWhyChoose from "./components/HomeWhyChoose";
import HomeIndustriesSupport from "./components/HomeIndustriesSupport";
import HomePerformanceResults from "./components/HomePerformanceResults";
import HomePartnershipProcess from "./components/HomePartnershipProcess";
import HomePartnership from "./components/HomePartnership";

export default function HomePage() {
  return (
    <>
        <HomeHero />
        <HomePerformance />
        <HomeSnapshot />
        <HomeBuiltFor />
        <HomeWhyChoose />
        <HomeIndustriesSupport />
        <HomePerformanceResults />
        <HomePartnershipProcess />
        <HomePartnership />
    </>
  );
}
