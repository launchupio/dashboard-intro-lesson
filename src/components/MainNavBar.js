import "./MainNavBar.css";
import {
  BsFillPersonFill,
  FiMenu,
  FcSettings,
  IoNotificationsSharp,
} from "../utils/icons";

const MainNavBar = () => {
  return (
    <div className="col-start-1 col-end-7 row-start-1 row-end-2 flex justify-between text-sm mb-2 mt-2 p-2">
      <div className="flex flex-col">
        <div>Pages / Dashboard</div>
        <div className="font-semibold">Dashboard</div>
      </div>

      <div className="flex items-center justify-evenly w-[500px]">
        <label className="w-fit relative">
          <input
            className="input border-[1px] w-[175px] h-[35px] py-[2px] px-[8px] rounded-md border-gray-400 bg-transparent focus:outline-none  focus:border-pink-600 focus:border-t-transparent placeholder:opacity-0"
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
  );
};
export default MainNavBar;
