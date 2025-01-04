import Image from "next/image";
import headerBg from "@/images/bg-header-desktop.svg";
import jobListingData from "@/app/data.json"
import JobCard from "@/components/jobCard";

export default function Home() {
  return (
    <>
      <div className={'w-full bg-darkCyan flex relative'}>
        <Image src={headerBg} className={"cover w-full"} alt={"headerBG"} />
        <div className={"flex w-full absolute -bottom-9 py-3"}>
            <div className={"bg-white w-full mx-14 p-4 "}>
                <input className={"w-full"} />
            </div>
        </div>
      </div>
      <div className={"flex flex-col px-14 my-16 justify-center"}>
          {
              jobListingData.map( (job) => (
                  <div key={job.id}>
                      <JobCard jobLogo={job.logo} jobCompany={job.company} titleTagNew={job.new} titleTagFeature={job.featured} jobPosition={job.position} postedAt={job.postedAt} contract={job.contract} jobLocation={job.location} jobLevel={job.level} languages={job.languages}  tools={job.tools} jobRole={job.role}  />

                  </div>

              ))
          }
      </div>





    </>
  );
}
