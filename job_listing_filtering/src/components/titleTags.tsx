import React from 'react';

const TitleTags = ({title} : {title: string}) => {
    return (
        <div className={`rounded-full flex items-center justify-center py-2 px-4 ${title === "New!" ? "bg-darkCyan" : "bg-darkGrayishCyan" } `}>
            <p className={"uppercase font-bold text-white text-[12px] text-center "}> {title} </p>
        </div>
    );
};

export default TitleTags;