import logo from "../../assets/logo.svg";
import piechart from "../../assets/piechart.svg";
import FeatureItem from "./FeatureItem";
import RenderIcon from "../../components/RenderIcon";

export default function HomeLeft() {
  const featureItems = [
    {
      id: 1,
      heading: "30+",
      description: "Language Support",
    },
    {
      id: 2,
      heading: "10K+",
      description: "Developers",
    },
    {
      id: 3,
      heading: "100k+",
      description: "Hours Saved",
    },
  ];
  return (
    <div className="left relative hidden md:flex flex-col items-center justify-center">
      <img
        src={logo}
        alt={"logo"}
        className={`absolute -left-4 bottom-0 w-[300px] aspect-square opacity-30 cursor-pointer`}
      />

      <div className="main-card w-[400px] shadow-custom rounded-3xl relative">
        <div>
          <div className="flex items-center gap-4 border-b border-borderGray py-4 px-6">
            {" "}
            <img src={logo} alt={"logo"} className={`w-6`} />
            <div className="font-bold">AI to Detect & Autofix Bad Code</div>
          </div>
          <div className="flex items-center justify-around py-4 px-6 gap-4">
            {featureItems.map((featureItem) => {
              return <FeatureItem featureItem={featureItem} />;
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 absolute -bottom-[8.75rem] left-1/2 w-[220px] bg-white shadow-custom rounded-3xl px-6 py-4">
          <div className="flex justify-between items-center">
            <img src={piechart} className="w-12" />
            <div className="flex flex-col">
              <div className="text-secondaryBlue text-xs font-semibold flex items-center gap-1">
                <RenderIcon icon="arrow-up" />
                <div>14%</div>
              </div>
              <div className="text-[0.6rem]">This week</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-xs">Issues Fixed</div>
            <div className="text-2xl font-semibold">500k+</div>
          </div>
        </div>
      </div>
    </div>
  );
}