import QualityComplianceHero from "./components/QualityComplianceHero";
import QualityComplianceInfo from "./components/QualityComplianceInfo";
import QualityComplianceAvoid from "./components/QualityComplianceAvoid";
import QualityComplianceCampaign from "./components/QualityComplianceCampaign";
import QualityComplianceSystems from "./components/QualityComplianceSystems";


export default function QualityCompliancePage() {
    return (
        <>
            <QualityComplianceHero />
            <QualityComplianceInfo />
            <QualityComplianceAvoid />
            <QualityComplianceCampaign />
            <QualityComplianceSystems />
        </>
    );
}