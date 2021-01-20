import React, { useState, useEffect } from 'react'
import Header from '../components/user/Header'
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import useSWR from "swr"
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

import Select from '@material-ui/core/Select';
import JobCard from '../components/user/JobCard';
import { v4 as uuidv4 } from "uuid"
import { Link } from '@reach/router';

const fetcher = url => fetch(url).then(res => res.json());

const Jobs = () => {





    const [list, setList] = useState([])
    const [listInitial, setListInitial] = useState([])

    const [tag, setTag] = useState("")
    const [search, setSearch] = useState("")





    useEffect(() => {

        setList(listInitial.filter(job => job.id_job.includes(search)))
        return () => {

        }
    }, [search])


    const { data, error } = useSWR('https://webrtc-back1.herokuapp.com/job/jobs', fetcher, { refreshInterval: 2000 })


    if (!data) return (
        <div className={` grid place-items-center h-screen w-screen `}>
            <TrackChangesIcon style={{ fontSize: "60px" }} className=" text-gray-200  animate-spin" />
        </div>)



    if (data) {




        return (
            <div className="flex flex-col gap-10 " style={{ fontFamily: "Montserrat" }}>
                <Header tab="Jobs" />
                <div className="p-10 flex   justify-between  ">
                    <div className="flex flex-col gap-6" >
                        <p className=" text-4xl text-gray-600" style={{ fontWeight: "600" }}>Jobs Forum   <span className="text-red-500 text-4xl"> EMI</span> Entreprise</p>
                        <p className="w-80 text-gray-400 " style={{ fontWeight: "600" }}>Decouvrez les Offres de stage, PFE et emploie presentees Startups, Sociétés Corps invitee au Forum</p>
                    </div>
                    <div className="flex items-center gap-4 p-4">
                        <span className="flex gap-2 text-gray-500 text-lg " style={{ fontWeight: "600" }}><svg width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" space="preserve">
                            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                            <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M927.8,4975.8c-218.7-46-455.8-168-587-299.2c-156.5-154.2-227.9-320-239.4-541c-16.1-320,108.2-603.1,402.8-911.6c85.2-92.1,798.8-764.2,1583.7-1494L3515.2,401.9l11.5-2453.9c13.8-2741.6,0-2529.8,175-2665.6c119.7-89.8,347.6-103.6,485.7-25.3c138.1,76,2216.7,2060.2,2255.9,2152.3c23,59.8,29.9,366,29.9,1530.8l2.3,1457.1L7997,1813c835.6,778,1563,1473.2,1615.9,1542.3c223.3,287.7,299.3,497.2,285.4,780.4c-18.4,416.7-336.1,736.6-835.6,842.5C8828,5026.5,1155.7,5026.5,927.8,4975.8z M8855.6,4018.2c9.2-9.2-6.9-46-36.8-82.9c-30-36.8-759.6-736.6-1620.6-1553.8C6178.5,1414.8,5616.8,866.9,5591.5,814c-36.8-78.3-39.2-207.2-39.2-1507.8v-1422.6l-234.8-230.2c-131.2-126.6-377.5-361.4-547.9-524.8l-310.8-292.3l-11.5,1963.5c-9.2,1648.2-16.1,1977.4-43.7,2030.3c-18.4,36.8-718.2,713.6-1553.8,1507.8c-1604.5,1523.9-1717.2,1632.1-1717.2,1662c0,11.5,34.5,25.3,76,29.9C1337.5,4045.9,8839.5,4034.4,8855.6,4018.2z" /></g></g>
                        </svg> filter </span>

                        <div className="border rounded-3xl mr-10   px-4 p-1 text-gray-400  items-center gap-4 flex justify-evenly ">
                            <ArrowDropDownCircleOutlinedIcon className="" />
                            <Select
                                className="w-full text-gray-400 "
                                disableUnderline="true"
                                value={tag}

                                IconComponent="false"
                                onChange={evt => setTag(evt.target.value)}
                            >
                                <MenuItem value={10} className="text-gray-400">#Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>

                        </div>

                        <div className="border rounded-3xl border-gray-200 text-gray-300 p-2 flex justify-between items-center">
                            <input onChange={(evt) => setSearch(evt.target.value)} placeholder="rechercher..." className="text-gray-500 focus:outline-none" />
                            <SearchIcon />

                        </div>


                    </div>


                </div>
                <div className="flex flex-wrap gap-4 p-7">

                    {data.map(job =>
                        <Link to="/JobDetails">
                            <JobCard key={uuidv4()} job={job} />
                        </Link>
                    )}


                </div>

            </div >
        )
    }
}

export default Jobs
