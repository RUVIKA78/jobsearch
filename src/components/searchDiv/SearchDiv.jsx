import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineGlobal } from 'react-icons/ai';

const SearchDiv = () => {
    return (
        <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
            <form action=''>
                <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                    <div className='flex gap-2 items-center'>
                        <AiOutlineSearch className='text-[25px] icon' />
                        <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here' />
                        <AiOutlineCloseCircle className='text-[30px] text-[#b59ec1] hover:text-textColor icon' />


                    </div>
                    <div className='flex gap-2 items-center'>
                        <AiOutlineHome className='text-[25px] icon' />
                        <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search By Company' />
                        <AiOutlineCloseCircle className='text-[30px] text-[#b59ec1] hover:text-textColor icon' />




                    </div>
                    <div className='flex gap-2 items-center'>
                        <AiOutlineGlobal className='text-[25px] icon' />
                        <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search By Location' />
                        <AiOutlineCloseCircle className='text-[30px] text-[#b59ec1] hover:text-textColor icon' />


                    </div>
                    <button className='bg-blueColor h-80% p-2 px-10 rounded-[30px] text-white hover' >Search</button>
                </div>
            </form>

            <div className='secDiv flex items-center gap-10 justify-center'>
                <div className='singleDearch flex items-center gap-2'>
                    <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort By:</label>

                    <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="" >Relevance</option>
                        <option value="" >Inclusive</option>
                        <option value="" >Starts With</option>
                        <option value="" >Contains</option>
                    </select>
                </div>
                <div className='singleDearch flex items-center gap-2'>
                    <label htmlFor='type' className='text-[#808080] font-semibold'>Type:</label>

                    <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="" >Full-Time</option>
                        <option value="" >Part-Time</option>
                        <option value="" >Remote</option>
                        <option value="" >Contract</option>
                    </select>
                </div>
                <div className='singleDearch flex items-center gap-2'>
                    <label htmlFor='level' className='text-[#808080] font-semibold'>Level:</label>

                    <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="" >Fresher</option>
                        <option value="" >Intermediate</option>
                        <option value="" >Senior</option>
                        <option value="" >Expert</option>
                    </select>
                </div>

                <span className='text-[#lalala cursor-pointer'>Clear All</span>
            </div>
        </div>

    )
}

export default SearchDiv