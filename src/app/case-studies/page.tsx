import CaseStudiesHero from "./components/CaseStudiesHero";
import CaseStudiesInfo from "./components/CaseStudiesInfo";
import CaseStudiesChallenges from "./components/CaseStudiesChallenges";
import CaseStudiesCommon from "./components/CaseStudiesCommon";
import CaseStudiesPerformance from "@/app/case-studies/components/CaseStudiesPerformance";
import CaseStudiesStory from "@/app/case-studies/components/CaseStudiesStory";

export default function CaseStudiesPage() {
    return (
        <>
            <CaseStudiesHero />
            <CaseStudiesInfo />
            <CaseStudiesChallenges />
            <CaseStudiesCommon />
            <CaseStudiesPerformance />
            <CaseStudiesStory />
        </>
    );
}