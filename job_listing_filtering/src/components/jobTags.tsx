import React from 'react';

const JobTags = ({tags} : {tags: string}) => {
    return (
        <div className={`rounded-lg p-4 text-darkCyan bg-darkGrayishCyan `}>
            <p className={"text-darkCyan"} > {tags} </p>
        </div>
    );
};

export default JobTags;