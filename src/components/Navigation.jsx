import React from 'react'
import PersonalInfo from './PersonalInfo'
import Plan from './Plan'
import AddOns from './AddOns'
import Finish from './Finish'
const Navigation = () => {
  return (
    <div className='lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-screen'>
      <div className=' lg:white lg:w-[58.563rem] lg:h-[37.5rem] lg:flex lg:flex-col lg:items-center lg:justify-center'>
        <div className='bg-White w-full h-screen lg:flex lg:flex-row lg:justify-center lg:items-center lg:w-[56.75rem] lg:h-[35.563rem] lg:shadow-2xl'>
          <div className='flex flex-row justify-center pt-8 gap-4 relative bg-mobileBg bg-cover bg-no-repeat h-[10.688rem] w-full text-White font-medium font-ubuntu lg:bg-desktopBg lg:min-h-[35.438rem] lg:min-w-[17.063rem] lg:flex-col lg:justify-start lg:pt-10 lg:pl-8'>
            <div className='lg:flex lg:items-center lg:gap-4'>
              <p className=' w-8 h-8 flex items-center justify-center rounded-full border-solid border-White border-2'>1</p>
              <div className='hidden lg:flex flex-col items-start justify-start'>
                <p className=' text-Lightblue  font-normal'>STEP 1</p>
                <p>YOUR INFO</p>
              </div>
            </div>
            <div className=' lg:flex lg:items-center lg:gap-4'>
              <p className=' w-8 h-8 flex items-center justify-center rounded-full border-solid border-White border-2'>2</p>
              <div className='hidden lg:flex flex-col items-start justify-start'>
                <p className=' text-Lightblue  font-normal'>STEP 2</p>
                <p>SELECT PLAN</p>
              </div>
            </div>
            <div className=' lg:flex lg:items-center lg:gap-4'>
              <p className=' w-8 h-8 flex items-center justify-center rounded-full border-solid border-White border-2'>3</p>
              <div className='hidden lg:flex flex-col items-start justify-start'>
                <p className=' text-Lightblue  font-normal'>STEP 3</p>
                <p>ADD-ONS</p>
              </div>
            </div>
            <div className=' lg:flex lg:items-center lg:gap-4'>
              <p className=' w-8 h-8 flex items-center justify-center rounded-full border-solid border-White border-2'>4</p>
              <div className='hidden lg:flex flex-col items-start justify-start'>
                <p className=' text-Lightblue  font-normal'>STEP 4</p>
                <p>SUMMARY</p>
              </div>
            </div>
          </div>
          <div className=' text-base absolute font-ubuntu  translate-y-[-5rem] w-full h-[23.438rem] flex flex-col items-center lg:relative lg:translate-y-0 lg:h-full'>
            {/* <PersonalInfo /> */}
            {/* < Plan /> */}
            {/* <AddOns /> */}
            <Finish />
            <div className='w-full flex items-center justify-end bg-Alabaster h-[4.5rem] bottom-0 cursor-pointer lg:relative  lg:bg-White'>
              <div className=' font-ubuntu  font-bold bg-Marineblue h-10 w-24 text-White flex items-center justify-center mr-4 rounded hover:bg-Purplishblue duration-300 lg:mr-24 '>Next Step</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navigation