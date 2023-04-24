import {
  FaCouch,
  BsPersonFill,
  HiOutlineDotsVertical,
  ImCheckmark,
} from "../utils/icons";
import MainNavBar from "./MainNavBar";
import CompanyInfo from "./CompanyInfo";
import Table from "./Table";
import smiley from "../images/smiley.jpeg";
import xdlogo from "../images/xd.png";
import letterlogo from "../images/a.jpeg";
import slacklogo from "../images/slack.png";
import spotifylogo from "../images/spotify.jpeg";
import bluelogo from "../images/blue.png";
import redsquare from "../images/redsquare.png";

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

  const tableData = [
    {
      logo: xdlogo,
      project: "Material XD Version",
      members: [
        {
          profile: smiley,
          name: "Jane Simmons",
          stackOrder: 0,
          left: "left-[0px]",
        },
        {
          profile: smiley,
          name: "Jon Doe",
          stackOrder: 1,
          left: "left-[15px]",
        },
        {
          profile: smiley,
          name: "Rumi Hadid",
          stackOrder: 2,
          left: "left-[30px]",
        },
        {
          profile: smiley,
          name: "Jane Doe",
          stackOrder: 3,
          left: "left-[45px]",
        },
      ],
      budget: "$14,000",
      completion: 60,
    },
    {
      logo: letterlogo,
      project: "Add Progress Track",
      members: [
        {
          profile: smiley,
          name: "Rumi Hadid",
          stackOrder: 0,
          left: "left-[0px]",
        },
        {
          profile: smiley,
          name: "Jessica Doe",
          stackOrder: 1,
          left: "left-[15px]",
        },
      ],
      budget: "$3,000",
      completion: 10,
    },
    {
      logo: slacklogo,
      project: "Fix Platform Errors",
      members: [
        {
          profile: smiley,
          name: "Marissa Ro",
          stackOrder: 0,
          left: "left-[0px]",
        },
        {
          profile: smiley,
          name: "Jane Doe",
          stackOrder: 1,
          left: "left-[15px]",
        },
      ],
      budget: "Not set",
      completion: 100,
    },
    {
      logo: spotifylogo,
      project: "Launch our Mobile App",
      members: [
        {
          profile: smiley,
          name: "Jane Dems",
          stackOrder: 0,
          left: "left-[0px]",
        },
        {
          profile: smiley,
          name: "Rick Wills",
          stackOrder: 1,
          left: "left-[15px]",
        },
        {
          profile: smiley,
          name: "Jen Akins",
          stackOrder: 2,
          left: "left-[30px]",
        },
        {
          profile: smiley,
          name: "Stuart Little",
          stackOrder: 3,
          left: "left-[45px]",
        },
      ],
      budget: "$20,500",
      completion: 100,
    },
    {
      logo: bluelogo,
      project: "Add the New Pricing Page",
      members: [
        {
          profile: smiley,
          name: "Ron Doe",
          stackOrder: 0,
          left: "left-[0px]",
        },
      ],
      budget: "$500",
      completion: 25,
    },
    {
      logo: redsquare,
      project: "Redesign New Online Shop",
      members: [
        {
          profile: smiley,
          name: "Jane Wane",
          stackOrder: 0,
          left: "left-[0px]",
        },
        {
          profile: smiley,
          name: "Tiger Woods",
          stackOrder: 1,
          left: "left-[15px]",
        },
      ],
      budget: "$2,000",
      completion: 40,
    },
  ];

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

        <div className="col-start-1 col-span-4 row-start-7 row-end-12 inline-block w-full h-fit rounded-lg bg-white">
          <div className="h-[550px] px-1">
            <div className="h-[85px] mb-3">
              <h5 className="pt-4 px-3 text-lg font-bold">Projects</h5>
              <div className="pt-2 px-3 flex justify-between">
                <div className="flex items-center">
                  <ImCheckmark style={{ color: "blue" }} />{" "}
                  <p className="pl-2 text-sm text-gray-700">
                    <span className="font-bold">30 done</span> this month
                  </p>
                </div>
                <div>
                  <HiOutlineDotsVertical size="24" style={{ color: "gray" }} />
                </div>
              </div>
            </div>
            <div className="h-[calc(100%-97px)] w-[100%]">
              <Table tableData={tableData} />
            </div>
          </div>
        </div>

        <div className="col-start-5 col-span-2 row-start-4 row-end-12 border-[1px] border-red-500 bg-green-200"></div>

        <div className="col-start-1 col-span-6 row-start-12 row-end-13"></div>
      </div>
    </div>
  );
}
