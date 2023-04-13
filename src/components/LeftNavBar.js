import { BsFillPersonFill, TbTextDirectionRtl, TbLayoutDashboard,
  IoNotificationsSharp, MdBackupTable, GiBulletBill, SiVirtualbox, RxDashboard, ImEnter, AiOutlineForm,
} from '../utils/icons';

export default function LeftNavBar() {
 let navItemCSS = 'flex items-center py-3 hover:bg-neutral-900 rounded-lg active:bg-pink-600'

  return (
    <div className="w-screen grid grid-cols-2 border-[2px] border-white ">
      <div className="w-[180px] h-[calc(100%-4px)] fixed top-[2px] left-5 border-[2px] border-black bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-lg">
        <div className="mx-4 text-white text-sm">
          <div className='flex items-center py-3 border-b-2 mb-2'><TbLayoutDashboard className="p-1" />Material Dashboard </div>
          <div className="block h-[calc(50vh)] overflow-auto overscroll-y-auto">
            <ul>
              <li className={navItemCSS}> <RxDashboard className="p-1"/> Dashboard</li>
              <li className={navItemCSS}> <MdBackupTable className="p-1"/> Tables</li>
              <li className={navItemCSS}> <GiBulletBill className="p-1"/>Billing </li>
              <li className={navItemCSS}> <SiVirtualbox className="p-1"/>Virtual Reality</li>
              <li className={navItemCSS}> <TbTextDirectionRtl className="p-1"/>RTL</li>
              <li className={navItemCSS}> <IoNotificationsSharp className="p-1"/> Notifications</li>
            </ul>
            <h5 className="py-3">Account Pages</h5>
            <ul>
              <li className={navItemCSS}> <BsFillPersonFill className="p-1"/>Profile</li>
              <li className={navItemCSS}> <ImEnter className="p-1"/>Sign In</li>
              <li className={navItemCSS}> <AiOutlineForm className="p-1"/>Sign Up</li>
            </ul>
          </div>
        </div>
        <div className='block absolute bottom-[2px]'>
          <button className="m-4 text-white bg-pink-600 rounded-lg text-center py-2 px-6 text-sm">Update To Pro</button>
        </div>
      </div>
    </div>
  )
}