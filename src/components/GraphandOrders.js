import {AiFillBell, BsCode, HiShoppingCart,TfiCreditCard, MdKey, GiTakeMyMoney,AiOutlineArrowUp,AiOutlineClockCircle} from "../utils/icons"

export default function GraphandOrders() {
    let headerCSS = "font-bold flex flex-wrap items-center"
    let timestampCSS = "uppercase font-medium"

    return(
        <div >
            <div className="border-4 rounded-lg border-yellow-400 bg-teal-200">
                <div>Graph part </div>
                <h1 className="font-bold">Completed Tasks</h1>
                <p>Last Campaign Performance</p>
                <p className="flex flex-wrap items-center"><AiOutlineClockCircle className="text-gray-500"/> just updated</p>
            </div>
            <div className="border-4 border-red-400 rounded-lg bg-green-200">
                <div>
                    <h1 className="font-bold">Orders Overview</h1>
                    <p className="flex flex-wrap items-center"><AiOutlineArrowUp className="text-green-600"/> <span className="font-bold">24%</span> this month</p>
                </div>
                <div>
                    <dl className="border-4 border-black">
                        <dt className={headerCSS}><AiFillBell className="text-green-600"/>$2400, Design Changes</dt>
                            <dl className={timestampCSS}>22 Dec 7:20PM</dl>
                        <dt className={headerCSS}><BsCode className="text-red-500"/>New order #1832412</dt>
                            <dl className={timestampCSS}>21 DEC 11:00 PM</dl>
                        <dt className={headerCSS}><HiShoppingCart className="text-blue-500"/>Server payments for April</dt>
                            <dl className={timestampCSS}>21 DEC 9:34 PM</dl>
                        <dt className={headerCSS}> <TfiCreditCard className="text-orange-500"/> New card added for order #4395133</dt>
                            <dl className={timestampCSS}>20 DEC 2:20 AM</dl>
                        <dt className={headerCSS}> <MdKey className="text-rose-500"/>Unlock packages for development</dt>
                            <dl className={timestampCSS}>18 DEC 4:54 AM</dl>
                        <dt className={headerCSS}><GiTakeMyMoney className="text-gray-500"/> New order #9583120</dt>
                            <dl className={timestampCSS}>17 DEC </dl>
                    </dl>
                </div>
            </div>
        </div>
    )
}