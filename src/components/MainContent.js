import {
  FaCouch,
  BsPersonFill,
  ImCheckmark,
  HiDotsVertical,
} from "../utils/icons";
import CompanyInfo from "./CompanyInfo";
import MainNavBar from "./MainNavBar";

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
    <div className="box w-screen h-screen grid grid-cols-2 overflow-y-auto bg-gray-200">
      <div className="w-[calc(100vw-238px)] h-full ml-[218px] grid grid-cols-6 auto-rows-min gap-5">
        <MainNavBar />
        {/* Company info section */}
        <div className="col-start-1 col-span-6 row-start-2 row-end-4 grid grid-cols-4 gap-4">
          {displayCompanyInfo}
        </div>
        {/* graphs section */}
        <div className="col-start-1 col-span-4 row-start-4 row-end-7 border-[2px] border-black">
          Graphs
        </div>
        {/* Project section */}
        <div className="col-start-1 col-span-4 row-start-7 row-end-12 inline-block border-[2px] border-black">
          <div className="h-[500px]">
            <div className="pr-2 border-[1px] border-red-400 h-[85px]">
              <h5 className="px-3 pt-4 font-semibold border-[1px] border-blue-400">
                Projects
              </h5>
              <div className="flex justify-between px-3 pt-2 border-[1px] border-green-400">
                <div className="flex items-center border-[1px] border-orange-600">
                  <ImCheckmark style={{ color: "blue" }} />{" "}
                  <p className="text-xs">
                    <span className="font-bold pl-1">30 done</span> this month
                  </p>{" "}
                </div>
                <div className="border-[1px] border-yellow-400">
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* graph and orders section */}
        <div className="col-start-5 col-span-2 row-start-4 row-end-12 border-[1px] border-red-500 bg-green-200"></div>
        {/* footer section */}
        <div className="col-start-1 col-span-6 row-start-12 row-end-13 border-[2px] border-black">
          Footer section
        </div>
      </div>
    </div>
  );
}
