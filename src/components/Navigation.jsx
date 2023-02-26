import React, { useState, useEffect, useContext } from 'react'
import classNames from 'classnames'
import { FormContext } from '../context/FormContext'



const Navigation = ({ PageDisplays }) => {

  const { page } = useContext(FormContext)



  return (
    <div className='lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-screen'>
      <div className=' lg:white lg:w-[58.563rem] lg:h-[37.5rem] lg:flex lg:flex-col lg:items-center lg:justify-center'>
        <div className='bg-White w-full h-screen lg:flex lg:flex-row lg:justify-center lg:items-center lg:w-[56.75rem] lg:h-[35.563rem] lg:shadow-2xl'>
          <div className='text-White flex flex-row justify-center pt-8 gap-4 relative bg-mobileBg bg-cover bg-no-repeat h-[10.688rem] w-full  font-medium font-ubuntu lg:bg-desktopBg lg:min-h-[35.438rem] lg:min-w-[17.063rem] lg:flex-col lg:justify-start lg:pt-10 lg:pl-8'>
            <div className='lg:flex lg:items-center lg:gap-4'>
              <p className={classNames(' duration-300 w-8 h-8 flex items-center justify-center rounded-full border-solid border-White border-2',
                { ' bg-Lightblue border-none text-Marineblue': page === 0 }
              )}>1</p>
              <div className='hidden lg:flex flex-col items-start justify-start'>
                <p className=' text-Lightblue  font-normal '>STEP 1</p>
                <p >YOUR INFO</p>
              </div>
            </div>
            <div className=' lg:flex lg:items-center lg:gap-4 active:bg-Pastelblue'>
              <p className={classNames(' duration-300 w-8 h-8 flex items-center justify-center rounded-full border-solid border-White border-2',
                { ' bg-Lightblue border-none text-Marineblue': page === 1 }
              )}>2</p>
              <div className='hidden lg:flex flex-col items-start justify-start'>
                <p className=' text-Lightblue  font-normal'>STEP 2</p>
                <p>SELECT PLAN</p>
              </div>
            </div>
            <div className=' lg:flex lg:items-center lg:gap-4'>
              <p className={classNames(' duration-300 w-8 h-8 flex items-center justify-center rounded-full border-solid border-White border-2',
                { ' bg-Lightblue border-none text-Marineblue': page === 2 }
              )}>3</p>
              <div className='hidden lg:flex flex-col items-start justify-start'>
                <p className=' text-Lightblue  font-normal'>STEP 3</p>
                <p>ADD-ONS</p>
              </div>
            </div>
            <div className=' lg:flex lg:items-center lg:gap-4'>
              <p className={classNames(' duration-300 w-8 h-8 flex items-center justify-center rounded-full border-solid border-White border-2',
                { ' bg-Lightblue border-none text-Marineblue': page === 3 || page === 4 }
              )}>4</p>
              <div className='hidden lg:flex flex-col items-start justify-start'>
                <p className=' text-Lightblue  font-normal'>STEP 4</p>
                <p>SUMMARY</p>
              </div>
            </div>
          </div>
          <div className=' text-base absolute font-ubuntu  translate-y-[-5rem] w-full h-[23.438rem] flex flex-col items-center lg:relative lg:translate-y-0 lg:h-full'>

            {PageDisplays()}

          </div>
        </div>
      </div>
    </div >
  )
}

export default Navigation