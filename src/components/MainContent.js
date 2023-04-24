import { FaCouch, BsPersonFill } from "../utils/icons";
import MainNavBar from "./MainNavBar";
import CompanyInfo from "./CompanyInfo";
import ProjectsSection from "./ProjectsSection";

export default function MainContent() {
  const companyInfoList = [
    {
      icon: <FaCouch />,
      iconbg: "bg-slate-700",
      text: "Today's Money",
      number: "$53k",
      stat: "+55%",
      statcolor: "text-green-500",
      stattext: "than last week",
    },
    {
      icon: <BsPersonFill />,
      iconbg: "bg-pink-400",
      text: "Today's Users",
      number: "2,300",
      stat: "+3%",
      statcolor: "text-green-500",
      stattext: "than last month",
    },
    {
      icon: <BsPersonFill />,
      iconbg: "bg-green-400",
      text: "New Clients",
      number: "3,462",
      stat: "-2%",
      statcolor: "text-red-500",
      stattext: "than yesterday",
    },
    {
      icon: <FaCouch />,
      iconbg: "bg-blue-400",
      text: "Sales",
      number: "$103,430",
      stat: "+5%",
      statcolor: "text-green-500",
      stattext: "than yesterday",
    },
  ];

  const displayCompanyInfo = companyInfoList.map((company, idx) => {
    return (
      <CompanyInfo
        key={idx}
        icon={company.icon}
        iconbg={company.iconbg}
        text={company.text}
        number={company.number}
        stat={company.stat}
        statcolor={company.statcolor}
        stattext={company.stattext}
      />
    );
  });

  return (
    <div className="w-screen h-screen grid grid-cols-2 bg-gray-100 overflow-y-auto">
      <div className="w-[calc(100vw-238px)] h-full ml-[218px] grid grid-cols-6 auto-rows-min gap-5">
        <MainNavBar />

        <div className="col-start-1 col-span-6 row-start-2 row-end-4 grid grid-cols-4 gap-4">
          {displayCompanyInfo}
        </div>

        <div className="col-start-1 col-span-4 row-start-4 row-end-7">
          Graphs
        </div>

        <ProjectsSection />

        <div className="col-start-5 col-span-2 row-start-4 row-end-12 border-[1px] border-red-500 bg-green-200"></div>

        <div className="col-start-1 col-span-6 row-start-12 row-end-13"></div>
      </div>
    </div>
  );
}
