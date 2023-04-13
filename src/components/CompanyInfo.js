
function CompanyInfo({ icon, iconbg, text, number, stat, stattext }) {
    return (
        <div className="h-[120px] border-[2px] border-black">
            <div className="flex justify-between px-1 h-[60%] border-b-[1px] border-gray-700">
                <div className={`${iconbg} w-fit rounded`}>{icon}</div>
                <div className="text-right">
                    <p className="text-xs text-gray-700">{text}</p>
                    <p className="font-bold">{number}</p>
                </div>
            </div>
            <div className="">
                <p className="border-[1px] border-black">{`${stat} ${stattext}`}</p>
            </div>
        </div>
    );
}
export default CompanyInfo;