import GetInTouchHero from "./components/GetInTouchHero";
import GetInTouchInformation from "./components/GetInTouchInformation";
import GetInTouchConnect from "./components/GetInTouchConnect";
import GetInTouchRequest from "./components/GetInTouchRequest";
import GetInTouchPerformance from "./components/GetInTouchPerformance";

export default function GetInTouchPage() {
    return (
        <>
            <GetInTouchHero />
            <GetInTouchInformation />
            <GetInTouchConnect />
            <GetInTouchRequest />
            <GetInTouchPerformance />
        </>
    );
}