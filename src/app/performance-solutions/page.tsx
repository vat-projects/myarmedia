import PerformanceSolutionsHero from "./components/PerformanceSolutionsHero";
import PerformanceSolutionsMoves from "./components/PerformanceSolutionsMoves";
import PerformanceSolutionsTraffic from "./components/PerformanceSolutionsTraffic";
import PerformanceSolutionsOperate from "./components/PerformanceSolutionsOperate";
import PerformanceSolutionsFlexibility from "./components/PerformanceSolutionsFlexibility";
import PerformanceSolutionsSystems from "./components/PerformanceSolutionsSystems";

export default function PerformanceSolutionsPage() {
    return (
        <>
            <PerformanceSolutionsHero />
            <PerformanceSolutionsMoves />
            <PerformanceSolutionsTraffic />
            <PerformanceSolutionsOperate />
            <PerformanceSolutionsFlexibility />
            <PerformanceSolutionsSystems />
        </>
    );
}