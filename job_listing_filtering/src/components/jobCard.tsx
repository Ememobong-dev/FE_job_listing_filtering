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
        <div className={`bg-white ${titleTagFeature && "border-l-8 border-l-darkCyan "} cursor-pointer py-5 lg:px-14 w-full rounded-br-xl rounded-tr-xl my-3 shadow-xl flex items-center justify-between`} >
            <div className={"flex gap-5 items-center"}>
                <span>
                    <Image className={"w-28 h-28 rounded-full"} width={112} height={112} src={jobLogo} alt={"job logo"} />
                </span>
                <div className={"flex flex-col gap-y-2"}>
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
                    <ul className={"flex gap-5 items-center  text-ashDarkGrayishCyan text-sm"}>
                        <li>{postedAt}</li>
                        <span >•</span>
                        <li>{contract}</li>
                        <span >•</span>
                        <li>{jobLocation}</li>
                    </ul>
                </div>
            </div>
            <div className={"flex gap-5 items-center  "}>
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