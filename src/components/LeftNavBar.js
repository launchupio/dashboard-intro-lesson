import { BsFillPersonFill, TbTextDirectionRtl, TbLayoutDashboard,
  IoNotificationsSharp, MdBackupTable, GiBulletBill, SiVirtualbox, RxDashboard, ImEnter, AiOutlineForm,
} from '../utils/icons';

export default function LeftNavBar() {
 let navItemCSS = 'flex items-center py-3 hover:bg-neutral-900 rounded-lg active:bg-pink-600 mx-4'
 let iconCSS = "p-1 text-3xl"
 
  return (
    <div className="w-screen grid grid-cols-2 border-[2px] border-white">
      <div className="w-[250px] h-[calc(100%-40px)] fixed top-[2px] left-5 border-[2px] border-black bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-lg align-tems">
        <div className=' text-white border-yellow-400 border-b py-10 flex justify-center items-center mb-2'>
           <div className='flex items-center mb-2 mx-4 absolute z-40'><TbLayoutDashboard className={iconCSS} />Material Dashboard 2</div>
        </div>
        <div className=" text-white text-sm">
          <div className="h-[calc(50vh)] block overflow-auto overflowBehaviorY scrollbarGutter">
            <ul>
              <li className={navItemCSS}> <RxDashboard className={iconCSS}/> Dashboard</li>
              <li className={navItemCSS}> <MdBackupTable className={iconCSS}/> Tables</li>
              <li className={navItemCSS}> <GiBulletBill className={iconCSS}/>Billing </li>
              <li className={navItemCSS}> <SiVirtualbox className={iconCSS}/>Virtual Reality</li>
              <li className={navItemCSS}> <TbTextDirectionRtl className={iconCSS}/>RTL</li>
              <li className={navItemCSS}> <IoNotificationsSharp className={iconCSS}/> Notifications</li>
            </ul>
            <h5 className="py-3 mx-4">Account Pages</h5>
            <ul>
              <li className={navItemCSS}> <BsFillPersonFill className={iconCSS}/>Profile</li>
              <li className={navItemCSS}> <ImEnter className={iconCSS}/>Sign In</li>
              <li className={navItemCSS}> <AiOutlineForm className={iconCSS}/>Sign Up</li>
            </ul>
          </div>
          <div className='absolute bottom-[-2px] left-[-2.5px] pt-[10px] rounded-lg bg-neutral-950 z-30'>
            <button className="mx-4 mb-4 w-[calc(250px-32px)] text-white bg-pink-600 rounded-lg text-center py-2 px-6 text-xs font-bold">UPGRADE TO PRO</button>
          </div>
        </div>
      </div>
    </div>
  )
}