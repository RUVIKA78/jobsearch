import React from 'react'
import { BiTimeFive } from 'react-icons/bi'

const Data = [
    {
        id: 1,
        // image: logo1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Canada',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum, asperiores, sapiente amet et quod libero nostrum vitae nihil modi expedita dolorum at eius ',
        company: 'Novac Linus Co.'
    },
    {
        id: 2,
        // image: logo2,
        title: 'Software Engi.',
        time: 'Now',
        location: 'Mexico',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum, asperiores, sapiente amet et quod libero nostrum vitae nihil modi expedita dolorum at eius ',
        company: 'Google'
    },
    {
        id: 3,
        // image: logo3,
        title: 'Analytical Engi.',
        time: 'Now',
        location: 'Los Angeles',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum, asperiores, sapiente amet et quod libero nostrum vitae nihil modi expedita dolorum at eius ',
        company: 'Novac Linus Co.'
    },
    {
        id: 4,
        // image: logo4,
        title: 'Python Developer',
        time: 'Now',
        location: 'America',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum, asperiores, sapiente amet et quod libero nostrum vitae nihil modi expedita dolorum at eius ',
        company: 'Novac Linus Co.'
    },
    {
        id: 5,
        // image: logo5,
        title: 'UI/UX Designer',
        time: 'Now',
        location: 'Las Vegas',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum, asperiores, sapiente amet et quod libero nostrum vitae nihil modi expedita dolorum at eius ',
        company: 'Novac Linus Co.'
    },
    {
        id: 6,
        // image: logo6,
        title: 'Data Analyst',
        time: 'Now',
        location: 'New York',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum, asperiores, sapiente amet et quod libero nostrum vitae nihil modi expedita dolorum at eius ',
        company: 'Novac Linus Co.'
    }
]
const Job = () => {
    return (
        <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
           {
            Data.map(({id,image,title,time,location,desc,company}) => {
                return(
                    <div key={id} className='group/item singleJob w-[250px] p-[20px] bg-white rounded[30px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                        <span className='flex items-center text-[#ccc] gap-1'>
                            <BiTimeFive />{time}
                        </span>
                    </span>
                    <h6 className='text-[#ccc]'>{location}</h6>
                    <p className='text-[13px] text-[#dadada] pt-[20px] llborder-t-[2px] mt-[20px] group hover:text-white'>
                       {desc}
                    </p>
                    <div className='company flex item-center gap-2'>
                        {/* <img src={image} alt='company logo' className='w-[10%]'></img> */}
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
    
                        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover:/item: text-textColor '>Apply Now</button>
                    </div>
                </div>
                )
            }
            )
        }
        </div>
    )
}

export default Job