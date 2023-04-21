import {AiFillBell, BsCode, HiShoppingCart,TfiCreditCard, MdKey, GiTakeMyMoney,AiOutlineArrowUp,AiOutlineClockCircle} from "../utils/icons"

export default function GraphandOrders() {
    let headerCSS = "font-bold flex flex-wrap items-center"
    let timestampCSS = "uppercase font-medium text-gray-500"

    return(
        <div>
            <div className="border-4 rounded-lg border-transparent bg-white shadow-md m-4 mt-8">
                <div className="h-[300px] border-4 mx-auto shadow-md rounded-lg -mt-6 w-[95vw]">
                    Graph part 📈
                </div>
                <div className="p-6">
                    <h1 className="font-bold">Completed Tasks</h1>
                    <p className="mb-4">Last Campaign Performance</p>
                    <hr className="mb-4"></hr>
                    <p className="flex flex-wrap items-center">
                        <AiOutlineClockCircle className="text-gray-500 mr-1"/>
                        just updated
                    </p>
                </div>
            </div>
            <div className="border-4 bg-white border-transparent rounded-lg p-6 w-1/4 shadow-md m-4">
                <div className="mb-4">
                    <h1 className="font-bold">Orders Overview</h1>
                    <p className="flex flex-wrap items-center"><AiOutlineArrowUp className="text-green-600"/> <span className="font-bold">24%</span> this month</p>
                </div>
                <div className="relative">
                    <dl className="before:empty-content before:border-2 before:border-grey-300 before:absolute before:h-full before:left-3 before:top-4">
                        <div className="flex mb-4 relative">
                            <div className="pt-1 absolute z-10 top-1">
                                <AiFillBell className="text-green-600 bg-white w-[26px] h-[26px] py-1"/>
                            </div>
                            <div className="pl-8 ml-[6px] z-0">
                                <dt className={headerCSS}>$2400, Design Changes</dt>
                                <dl className={timestampCSS}>22 Dec 7:20PM</dl>
                            </div>
                        </div>
                        <div className="flex mb-4 relative">
                            <div className="pt-1 absolute z-10 top-1">
                                <BsCode className="text-red-500 bg-white w-[26px] h-[26px] py-1"/>  
                            </div>
                            <div className="pl-8 ml-[6px] z-0">
                                <dt className={headerCSS}>New order #1832412</dt>
                                <dl className={timestampCSS}>21 DEC 11:00 PM</dl>
                            </div>
                        </div>
                        <div className="flex mb-4 relative">
                            <div className="pt-1 absolute z-10 top-1">
                                <HiShoppingCart className="text-blue-500 bg-white w-[26px] h-[26px] py-1"/>
                            </div>
                            <div className="pl-8 ml-[6px] z-0">
                                <dt className={headerCSS}>Server payments for April</dt>
                                <dl className={timestampCSS}>21 DEC 9:34 PM</dl>
                            </div>
                        </div>
                        <div className="flex mb-4 relative">
                            <div className="pt-1 absolute z-10 top-1">
                                <TfiCreditCard className="text-orange-500 bg-white w-[26px] h-[26px] py-1"/>
                            </div>
                            <div className="pl-8 ml-[6px] z-0">
                                <dt className={headerCSS}>New card added for order #4395133</dt>
                                <dl className={timestampCSS}>20 DEC 2:20 AM</dl>
                            </div>
                        </div>
                        <div className="flex mb-4 relative">
                            <div className="pt-1 absolute z-10 top-1">
                                <MdKey className="text-rose-500 bg-white w-[26px] h-[26px] py-1"/>
                            </div>
                            <div className="pl-8 ml-[6px] z-0">
                                <dt className={headerCSS}>Unlock packages for development</dt>
                                <dl className={timestampCSS}>18 DEC 4:54 AM </dl>
                            </div>
                        </div>
                        <div className="flex mb-4 relative">
                            <div className="pt-1 absolute z-10 top-1">
                                <GiTakeMyMoney className="text-gray-500 bg-white w-[26px] h-[26px] py-1"/> 
                            </div>
                            <div className="pl-8 ml-[6px] z-0">
                                <dt className={headerCSS}>New order #9583120</dt>
                                <dl className={timestampCSS}>17 DEC </dl>
                            </div>
                        </div>

                    
                        {/* <dt className={headerCSS}></dt>
                            <dl className={timestampCSS}></dl>
                        <dt className={headerCSS}>  </dt>
                            <dl className={timestampCSS}></dl>
                        <dt className={headerCSS}> </dt>
                            <dl className={timestampCSS}></dl>
                        <dt className={headerCSS}</dt>
                            <dl className={timestampCSS}> </dl> */}
                    </dl>
                </div>
            </div>
        </div>
    )
}