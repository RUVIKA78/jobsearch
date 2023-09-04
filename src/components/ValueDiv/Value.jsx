import React from 'react'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block '>
        The value that holds us true and to account
      </h1>
      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[40px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              {/* <img src= alt='' className='w-[70%]' /> */}
            </div>
            <span className='font-semibold text-textColor text-[18x]'>
              Simplicity
            </span>
          </div>
          <p className='text-[25px] text-textColor opacity-[.7]'>
            Things being made beautiful, simple are at the heart of everything we do.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Value