import { 
  BsFillPersonFill, FiMenu, FcSettings, IoNotificationsSharp, FaCouch, BsPersonFill
} from '../utils/icons';
import CompanyInfo from './CompanyInfo';

export default function MainContent() {
  return (
    <div className="w-screen h-screen grid grid-cols-2 border-[2px] border-white overflow-y-auto">
      <div className="w-[calc(100vw-238px)] h-full ml-[218px] grid grid-cols-6 grid-rows-12 border-[2px] border-black">
        {/* Nav section */}
        <div className="col-start-1 col-end-7 row-start-1 row-end-2 flex justify-between border-[2px] border-blue-300 text-sm">
          <div className="flex flex-col">
            <div>Pages / Dashboard</div>
            <div className="font-semibold">Dashboard</div>
          </div>
          <div className="flex items-center justify-evenly w-[430px]">
            <input className="border-[1px] py-[2px] px-[2px] rounded-md border-gray-300" />
            <button className="border-[1px] rounded-md border-pink-400 text-xs py-[5px] px-[5px] w-[100px] text-pink-400">Online Builder</button>
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
        <div className="col-start-1 col-span-6 row-start-2 row-end-4 grid grid-cols-4 border-[2px] border-black">
          <CompanyInfo icon={<FaCouch className='text-white'/>} iconbg="bg-slate-700" text={`Today's Money`} number="$53k" stat="+55%" stattext="than last week" />
          <CompanyInfo icon={<BsPersonFill />} iconbg="bg-pink-400" text={`Today's Users`} number="2,300" stat="+3%" stattext="than last month" />
          <CompanyInfo icon={<BsPersonFill />} iconbg="bg-green-400" text="New Clients" number="3,462" stat="-2%" stattext="than yesterday" />
          <CompanyInfo icon={<FaCouch className='text-white' />} iconbg="bg-blue-400" text="Sales" number="$103,430" stat="+5%" stattext="than yesterday" />
        </div>
        {/* graphs section */}
        <div className="col-start-1 col-span-4 row-start-4 row-end-7 border-[2px] border-black">Graphs</div>
        {/* Project section */}
        <div className="col-start-1 col-span-4 row-start-7 row-end-12 inline-block border-[2px] border-black">Project info</div>
        {/* grpah and orders section */}
        <div className="col-start-5 col-span-2 row-start-4 row-end-12 border-[1px] border-red-500 bg-green-200">Graph and Order section</div>
        {/* footer section */}
        <div className="col-start-1 col-span-6 row-start-12 row-end-13 border-[2px] border-black">Footer section</div>
      </div>
    </div>
  )
} 