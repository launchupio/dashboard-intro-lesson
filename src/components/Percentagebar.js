// completion is just a number value as completion="25"
function PercentageBar({ completion }) {
  let barColor = completion === 100 ? "bg-green-500" : "bg-blue-500";
  let barWidth = (completion / 100) * 140;

  return (
    <div className="w-[150px] h-[30px] flex flex-wrap items-center">
      <p className="w-[80%] h-4 text-xs font-bold text-gray-500">
        {completion}%
      </p>
      <div className="w-[140px] h-fit rounded-full bg-gray-200">
        <div
          className={`h-[5px] rounded-full ${barColor}`}
          style={{
            width: `${barWidth}px`,
          }}
        ></div>
      </div>
    </div>
  );
}
export default PercentageBar;
