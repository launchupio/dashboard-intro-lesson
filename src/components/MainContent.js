import MainNavBar from "./MainNavBar";
import { companyInfoList } from "./DataFolder/CompanyInfoList";
import CompanyInfo from "./CompanyInfo";
import ProjectsSection from "./ProjectsSection";

export default function MainContent() {
  const displayCompanyInfo = companyInfoList.map((company, idx) => {
    return (
      <CompanyInfo
        key={idx}
        icon={company.icon}
        iconBg={company.iconBg}
        text={company.text}
        number={company.number}
        stat={company.stat}
        statColor={company.statColor}
        statText={company.statText}
      />
    );
  });

  return (
    <div className="w-screen h-screen grid grid-cols-2 bg-gray-100 overflow-y-auto">
      <div className="w-[calc(100vw-238px)] h-full ml-[218px] grid grid-cols-6 auto-rows-min gap-5">
        <MainNavBar />

        <div className="col-start-1 col-span-6 row-start-2 row-end-4 grid grid-cols-4 gap-4">
          {displayCompanyInfo}
        </div>

        <div className="col-start-1 col-span-4 row-start-4 row-end-7">
          Graphs
        </div>

        <ProjectsSection />

        <div className="col-start-5 col-span-2 row-start-4 row-end-12 border-[1px] border-red-500 bg-green-200"></div>

        <div className="col-start-1 col-span-6 row-start-12 row-end-13"></div>
      </div>
    </div>
  );
}
