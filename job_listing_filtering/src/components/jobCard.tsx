import React from 'react';
import Image from "next/image";
import TitleTags from "@/components/titleTags";

interface JobCardProps {
    jobLogo: string,
    jobCompany: string,
    titleTagNew: boolean,
    titleTagFeature: boolean,
    jobRole: string,
    postedAt: string,
    contract: string,
    jobLocation: string,
    jobLevel: string,
    jobPosition: string,
    languages: string[],
    tools:  string[],
}


const JobCard: React.FC<JobCardProps> = ({
     jobLogo,
     jobCompany,
     titleTagNew,
     titleTagFeature,
     jobRole,
     postedAt,
     contract,
     jobLocation,
     jobLevel,
     jobPosition,
     languages,
     tools,
 }) => {
    return (
        <div className={`bg-white ${titleTagFeature && "border-l-8 border-l-darkCyan "} cursor-pointer py-5 lg:px-14 px-5 w-full rounded-br-xl rounded-tr-xl my-3 shadow-xl  md:flex items-center justify-between flex-flex-col  relative `} >

            {/* MOBILE IMAGE RESPONSIVENESS */}
            <span className=' md:hidden block'>
                <Image className={"md:w-28 md:h-28 w-10 h-10 absolute -top-4  rounded-full"} width={112} height={112} src={jobLogo} alt={"job logo"} />
            </span>

            <div className={" md:flex gap-5 items-center relative  "}>
                {/* DESKTOP IMAGE  */}
                <span className='hidden md:block'>
                    <Image className={"md:w-28 md:h-28 w-10 h-10 rounded-full"} width={112} height={112} src={jobLogo} alt={"job logo"} />
                </span>
                
                <div className={"flex flex-col mt-5 gap-y-2 relative "}>
                    <div className={"flex gap-5 items-center"}>
                        <p className={"text-darkCyan font-bold"} >{jobCompany}</p>
                        {
                            titleTagNew ? <TitleTags title={"New!"}  /> : ""
                        }
                        {
                            titleTagFeature ? <TitleTags title={"Featured"} /> : ""
                        }
                    </div>
                    <div>
                        <p className={'font-bold hover:text-darkCyan text-lg'}> {jobPosition} </p>
                    </div>
                    <ul className={"flex gap-5 items-center font-bold  text-ashDarkGrayishCyan text-sm"}>
                        <li>{postedAt}</li>
                        <span >•</span>
                        <li>{contract}</li>
                        <span >•</span>
                        <li>{jobLocation}</li>
                    </ul>
                </div>
            </div>
            <hr className='my-5 border border-ashDarkGrayishCyan'  />

            <div className={"flex flex-wrap gap-5 items-center relative  "}>
                <p className={'px-3 py-2 text-[13px] font-bold hover:text-white hover:bg-darkCyan rounded-lg text-darkCyan  bg-lightGrayishCyan'}> {jobRole} </p>
                <p className={'px-3 py-2 text-[13px] font-bold hover:text-white hover:bg-darkCyan rounded-lg text-darkCyan  bg-lightGrayishCyan'}> {jobLevel} </p>
                {
                    languages.length > 0 ? (
                        languages.map((language, index) => <p className={'px-3 py-2 text-[13px] font-bold hover:text-white hover:bg-darkCyan rounded-lg text-darkCyan  bg-lightGrayishCyan'} key={index}> {language} </p>)
                    )
                    :
                    ""
                }
                {
                    tools.length > 0 ? (
                            tools.map((tool, index) => <p className={'px-3 py-2 text-[13px] font-bold hover:text-white hover:bg-darkCyan rounded-lg text-darkCyan  bg-lightGrayishCyan'} key={index}> {tool} </p>)
                    )
                    :
                    ""
                }
            </div>
        </div>
    );
};

export default JobCard;