import React from 'react'
import Header from './Header'

const JobCard = ({ job }) => {
    return (
        <div className="border border-red-100 rounded-xl justify-between p-6 flex flex-col gap-4 cursor-pointer transform hover:border-red-50 shadow-sm hover:shadow-xl hover:scale-105 duration-150 ">


            <p className="text-xl text-red-400" style={{ fontWeight: "600" }}>
                {job.title_job}
            </p>
            <p className="text-gray-500 md:w-2/3" style={{ fontWeight: "400" }}>
                {job.description_job}
            </p>
            <div className="flex gap-4 rounded-md     " style={{ fontSize: "14px" }}>
                {job.tags.map(tag =>
                    <div className="p-1 bg-red-50 text-red-400">
                        #{tag}
                    </div>
                )}
            </div>



        </div>
    )
}

export default JobCard
