import PercentageBar from "./PercentageBar";
import TableHeader from "./TableHeader";
import Member from "./Member";

function Table({ tableData }) {
  const displayTable = tableData.map((item, idx) => {
    return (
      <tr key={idx} className="border-y">
        <div className="flex items-center h-full pl-4">
          <td className="flex justify-between w-fit">
            <img src={item.logo} width="25" height="25" alt="company logo" />
            <div className="font-bold pl-6">{item.project}</div>
          </td>
        </div>
        <td className="relative">
          <ul className="flex w-fit">
            {item.members.map((person, index) => {
              // length of array is used when the z-index of each picture changes when its hovered
              let arrLength = item.members.length;
              return (
                <>
                  <Member
                    key={index}
                    listItemStyles={`absolute ${person.left}`}
                    divStyles={`rounded-full bg-white p-[3px] -top-3 relative cursor-pointer`}
                    imgSrc={person.profile}
                    imgWidth="20"
                    imgHeight="20"
                    altText="member profile"
                    nameDivStyles={`absolute top-[30px] -left-[30px] text-sm bg-black w-max py-1 px-2 h-fit text-center text-white`}
                    name={person.name}
                    personOrder={person.stackOrder}
                    arrLength={arrLength}
                  />
                </>
              );
            })}
          </ul>
        </td>
        <td className="text-sm text-gray-700 font-semibold text-center">
          {item.budget}
        </td>
        <td>
          <div className="w-2/3 mx-auto">
            <PercentageBar completion={item.completion} />
          </div>
        </td>
      </tr>
    );
  });

  return (
    <table className="auto w-full h-full ms-auto me-auto">
      <thead>
        <tr>
          <TableHeader text="Companies" padding="3" />
          <TableHeader text="Members" />
          <TableHeader textAlign="center" text="Budget" />
          <TableHeader
            textAlign="text-center"
            text="Completion"
            padding="pl-1"
          />
        </tr>
      </thead>
      <tbody>{displayTable}</tbody>
    </table>
  );
}
export default Table;
