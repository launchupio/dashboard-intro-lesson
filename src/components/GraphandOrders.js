import {AiFillBell, BsCode, HiShoppingCart,TfiCreditCard, MdKey, GiTakeMyMoney,AiOutlineArrowUp,AiOutlineClockCircle} from "../utils/icons"

export default function GraphandOrders() {
    let primaryBold = "font-bold"
    let timestampCSS = "uppercase font-medium"
    return(
        <div>
            <div>
                <img src="" alt="" />
                <h1>Completed Tasks</h1>
                <p>Last Campaign Performance</p>
                <p><AiOutlineClockCircle/>just updated</p>
            </div>
            <div>
                <div>
                    <h1>Orders Overview</h1>
                    <p><AiOutlineArrowUp/> <span>24%</span> this month</p>
                </div>
                <div>
                    <dl>
                        <dt><AiFillBell/>$2400, Design Changes</dt>
                            <dl>22 Dec 7:20PM</dl>
                        <dt><BsCode/>New order #1832412</dt>
                            <dl>21 DEC 11:00 PM</dl>
                        <dt><HiShoppingCart/>Server payments for April</dt>
                            <dl>21 DEC 9:34 PM</dl>
                        <dt> <TfiCreditCard/> New card added for order #4395133</dt>
                            <dl>20 DEC 2:20 AM</dl>
                        <dt> <MdKey/>Unlock packages for development</dt>
                            <dl>18 DEC 4:54 AM</dl>
                        <dt><GiTakeMyMoney/> New order #9583120</dt>
                            <dl>17 DEC </dl>
                    </dl>
                </div>
            </div>
        </div>
    )
}