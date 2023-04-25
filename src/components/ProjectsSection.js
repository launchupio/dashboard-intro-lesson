import { ImCheckmark, HiOutlineDotsVertical } from "../utils/icons";
import Table from "./Table";
import { tableData } from "./DataFolder/TableData";

function ProjectsSection() {
  return (
    <div className="col-start-1 col-span-4 row-start-7 row-end-12 inline-block w-full h-fit rounded-lg bg-white">
      <div className="h-[550px] px-1">
        <div className="h-[85px] mb-3">
          <h5 className="pt-4 px-3 text-lg font-bold">Projects</h5>
          <div className="pt-2 px-3 flex justify-between">
            <div className="flex items-center">
              <ImCheckmark style={{ color: "blue" }} />{" "}
              <p className="pl-2 text-sm text-gray-700">
                <span className="font-bold">30 done</span> this month
              </p>
            </div>
            <div>
              <HiOutlineDotsVertical size="24" style={{ color: "gray" }} />
            </div>
          </div>
        </div>
        <div className="h-[calc(100%-97px)] w-[100%]">
          <Table tableData={tableData} />
        </div>
      </div>
    </div>
  );
}
export default ProjectsSection;
