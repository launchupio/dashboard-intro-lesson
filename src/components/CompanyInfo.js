function CompanyInfo({
  icon,
  iconBg,
  text,
  number,
  stat,
  statColor,
  statText,
}) {
  return (
    <div className="h-[150px] px-1 rounded-lg bg-white font-sans">
      <div className="relative px-1 pt-2 h-[60%] border-b-[0.5px] border-gray-500">
        <div
          className={`${iconBg} absolute -top-2 w-[3rem] h-[3.1rem] flex justify-center items-center text-[1.2rem] rounded-lg drop-shadow-lg`}
        >
          <span className="text-white text-xl">{icon}</span>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">{text}</p>
          <p className="font-bold text-xl">{number}</p>
        </div>
      </div>
      <div className="px-1 h-[40%] flex items-center text-sm">
        <p className={`pr-1 ${statColor}`}>{stat}</p>
        <p className="text-gray-500">{statText}</p>
      </div>
    </div>
  );
}
export default CompanyInfo;
