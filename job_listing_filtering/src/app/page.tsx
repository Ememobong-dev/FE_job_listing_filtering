"use client"

import {useState} from "react";
import Image from "next/image";
import headerBg from "@/images/bg-header-desktop.svg";
import cancel from "@/images/icon-remove.svg";
import jobListingData from "@/app/data.json"
import JobCard from "@/components/jobCard";

export default function Home() {
    const [displaySearchedTags, setDisplaySearchedTags] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchedTags, setSearchedTags] = useState<string[]>([]);


    const handleSearch = () => {
      if(!searchQuery) return;

      setSearchedTags( (prev) => {
        if (prev.includes(searchQuery)) return prev;

        return [
          ...prev,
          searchQuery
        ];
      });

      setDisplaySearchedTags(true)
    
      setSearchQuery("");
    
    }

    const removeTag = (tag: string) => {
      setSearchedTags( (prev) => prev.filter( (t) => t !== tag ))
    }

    const clearAllTags = () => {
      setSearchedTags([]);
      setDisplaySearchedTags(false)
    }

      // Filter job listings based on searchedTags
    const filteredListings = jobListingData.filter((job) => {
      if (searchedTags.length === 0) return true; // If no tags, show all jobs
      return searchedTags.every(
        (tag) =>
          job.languages.includes(tag) || job.tools.includes(tag) || job.role === tag
      );
    });



  return (
    <>
        <div className={'w-full bg-darkCyan flex flex-col relative'}>

          <Image src={headerBg} className={"cover w-full md:h-auto h-[100px] "} alt={"headerBG"} />


          <div className={"flex gap-2 absolute justify-end top-3 left-5    md:top-16 md:left-3/4 "}>
            <div className={"bg-transparent py-2 rounded-full w-full border border-black"}>
              <input
                  className={"bg-transparent border-0 outline-none text-white w-full px-3 placeholder:text-white "}
                  placeholder={"Search jobs here"}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className={"rounded-full py-2 px-3 bg-darkGrayishCyan text-white "} onClick={handleSearch} >Search</button>
          </div>

          {
            (displaySearchedTags ) && (
              <div className={"flex w-full absolute -bottom-9 py-3"}>
                <div className={"bg-white flex justify-between w-full mx-14 p-4 "}>
                  <div className="flex">
                    {searchedTags.map((searchQuery, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-lightGrayishCyan text-darkCyan mr-5"
                      >
                        <div className="flex flex-wrap items-center bg-lightGrayishCyan text-darkCyan px-3 py-1 rounded-lg mr-2"><span className="font-bold" >{searchQuery} </span></div>
                        <button
                          className="ml-2 px-3 py-1 h-full text-white bg-darkCyan hover:text-darkCyan cursor-pointer"
                          onClick={() => removeTag(searchQuery)}
                        >
                          <span>
                            <Image src={cancel} alt="cancel btn" />
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                 
                <button className="bg-transparent cursor-pointer text-ashDarkGrayishCyan font-bold " onClick={clearAllTags}>Clear</button>
                  
                </div>

              </div>
            )
          }

        </div>
        <div className={"flex flex-col px-5 md:px-14 my-16 justify-center"}>
            {
              filteredListings.map((job) => (
                <div key={job.id}>
                  <JobCard jobLogo={job.logo} jobCompany={job.company} titleTagNew={job.new} titleTagFeature={job.featured} jobPosition={job.position} postedAt={job.postedAt} contract={job.contract} jobLocation={job.location} jobLevel={job.level} languages={job.languages}  tools={job.tools} jobRole={job.role}  />
                </div>
              ))
          }
      </div>





    </>
  );
}
