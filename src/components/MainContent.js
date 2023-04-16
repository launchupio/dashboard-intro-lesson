import {
  BsFillPersonFill,
  FiMenu,
  FcSettings,
  IoNotificationsSharp,
  FaCouch,
  BsPersonFill,
} from "../utils/icons";
import CompanyInfo from "./CompanyInfo";
import "./MainContent.css";

export default function MainContent() {
  return (
    <div className="box w-screen h-screen grid grid-cols-2 overflow-y-auto bg-gray-200">
      <div className="w-[calc(100vw-238px)] h-full ml-[218px] grid grid-cols-6 auto-rows-min gap-5">
        {/* Nav section */}
        <div className="col-start-1 col-end-7 row-start-1 row-end-2 flex justify-between text-sm mb-2 mt-2 p-2">
          <div className="flex flex-col">
            <div>Pages / Dashboard</div>
            <div className="font-semibold">Dashboard</div>
          </div>
          <div className="flex items-center justify-evenly w-[500px]">
            <label className="w-fit relative">
              <input
                className="input border-[1px] w-[175px] h-[35px] py-[2px] px-[8px] rounded-md border-gray-400 bg-transparent focus:outline-none focus:border-pink-600 placeholder:opacity-0"
                placeholder="&nbsp;"
              />
              <span className="label absolute text-ellipsis overflow-hidden whitespace-nowrap text-sm top-2 left-2 w-[calc(100%-18px)] text-gray-500">
                Type here...
              </span>
            </label>
            <button className="border-[1px] h-[30px] rounded-md border-pink-600 text-xs p-1 w-[125px] text-pink-600 font-semibold uppercase transition ease-in-out hover:duration-500  hover:border-pink-400 hover:text-pink-400">
              Online Builder
            </button>
            <div className="flex items-center justify-evenly w-[160px]">
              <BsFillPersonFill />
              <div>Sign In</div>
              <FiMenu />
              <FcSettings />
              <IoNotificationsSharp />
            </div>
          </div>
        </div>
        {/* Company info section */}
        <div className="col-start-1 col-span-6 row-start-2 row-end-4 grid grid-cols-4 gap-4">
          <CompanyInfo
            icon={<FaCouch />}
            iconbg="bg-slate-700"
            text={`Today's Money`}
            number="$53k"
            stat="+55%"
            statcolor="text-green-500"
            stattext="than last week"
          />
          <CompanyInfo
            icon={<BsPersonFill />}
            iconbg="bg-pink-400"
            text={`Today's Users`}
            number="2,300"
            stat="+3%"
            statcolor="text-green-500"
            stattext="than last month"
          />
          <CompanyInfo
            icon={<BsPersonFill />}
            iconbg="bg-green-400"
            text="New Clients"
            number="3,462"
            stat="-2%"
            statcolor="text-red-500"
            stattext="than yesterday"
          />
          <CompanyInfo
            icon={<FaCouch />}
            iconbg="bg-blue-400"
            text="Sales"
            number="$103,430"
            stat="+5%"
            statcolor="text-green-500"
            stattext="than yesterday"
          />
        </div>
        {/* graphs section */}
        <div className="col-start-1 col-span-4 row-start-4 row-end-7 border-[2px] border-black">
          Graphs
        </div>
        {/* Project section */}
        <div className="col-start-1 col-span-4 row-start-7 row-end-12 inline-block border-[2px] border-black">
          Project info
        </div>
        {/* grpah and orders section */}
        <div className="col-start-5 col-span-2 row-start-4 row-end-12 border-[1px] border-red-500 bg-green-200">
          Graph and Order section
        </div>
        {/* footer section */}
        <div className="col-start-1 col-span-6 row-start-12 row-end-13 border-[2px] border-black">
          Footer section
        </div>
      </div>
    </div>
  );
}
