import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import { FormContext } from '../context/FormContext'
import { motion } from 'framer-motion'


const Finish = () => {
  const { HandleNext, HandlePrev, selected, period, HandlePlan, plan, planPeriod, isChecked1, isChecked2, isChecked3, addons, total } = useContext(FormContext)





  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='  bg-White  flex flex-col  items-center w-[21.438rem] h-auto pb-8 px-[1.625rem] pt-9 rounded-lg lg:w-[39.875rem] lg:h-[35.438rem] lg:pt-12 lg:px-12'>
        <div className=' flex flex-col gap-5 pb-7 lg:w-full lg:px-12'>
          <h1 className=' font-bold text-Marineblue'>Finishing up</h1>
          <p className=' text-Coolgray'>Double check everything looks OK before confirming</p>
        </div>

        <div className=' flex flex-row  items-start justify-center w-[18.25rem] p-[0.938rem] rounded-md bg-Magnolia lg:w-[28rem] lg:px-6'>
          <div className=' flex flex-row items-center justify-start gap-4 w-full'>
            <div className=' flex flex-col items-start '>
              <p className=' text-Marineblue font-bold'>{plan}({planPeriod})</p>
              <a href="/" className=' underline text-Coolgray hover:text-Purplishblue duration-300' onClick={HandlePlan}>change</a>
            </div>
          </div>
          <div className=' flex h-full items-center text-Marineblue font-bold'>
            +${selected}/{period}
          </div>
        </div>
        <div className=' flex flex-row  items-start justify-center w-[18.25rem] p-[0.938rem] rounded-md bg-Magnolia lg:w-[28rem]'>
          <div className=' flex flex-col gap-5 lg:w-[28rem] '>
            <div className={classNames(' flex w-[16.375rem] lg:w-[28rem] lg:px-6',
              { 'hidden': !isChecked1 }
            )}>
              <div className=' flex flex-row items-center justify-start gap-4 w-full text-Coolgray'>
                Online service
              </div>
              <div className=' flex h-full items-center text-Marineblue'>
                +${addons.online}/{period}
              </div>
            </div>
            <div className={classNames(' flex w-[16.375rem] lg:w-[28rem] lg:px-6',
              { 'hidden': !isChecked2 }
            )}>
              <div className=' flex flex-row items-center justify-start gap-4 w-full text-Coolgray'>
                Larger storage
              </div>
              <div className=' flex h-full items-center text-Marineblue'>
                +${addons.storage}/{period}
              </div>
            </div>
            <div className={classNames(' flex w-[16.375rem] lg:w-[28rem] lg:px-6',
              { 'hidden': !isChecked3 }
            )}>
              <div className=' flex flex-row items-center justify-start gap-4 w-full text-Coolgray'>
                Customizable Profile
              </div>
              <div className=' flex h-full items-center text-Marineblue'>
                +${addons.customize}/{period}
              </div>
            </div>
          </div>
        </div>
        <div className='py-7 flex w-[16.375rem] lg:py-8 lg:w-[28rem] lg:px-6'>
          <div className=' flex flex-row items-center justify-start gap-4 w-full text-Coolgray'>
            Total({planPeriod})
          </div>
          <div className=' flex h-full items-center text-Marineblue'>
            +${total}/{period}
          </div>
        </div>
      </motion.div>
      <div className='bottom-0 translate-y-[8rem]  w-full px-4 flex flex-row items-center justify-center bg-White h-[4.5rem] cursor-pointer lg:translate-y-0 lg:relative  lg:bg-none lg:w-full lg:pb-8 lg:px-24'>
        <div className=' my-6 flex items-center  w-full justify-between'>
          <button className=' text-Coolgray ' onClick={HandlePrev}>Go back</button>
          <button className=' font-ubuntu  font-bold bg-Marineblue h-10 w-24 text-White flex items-center justify-center rounded hover:bg-Purplishblue duration-300  lg:mr-0' onClick={HandleNext}>Next Step</button>
        </div>
      </div>
    </>
  )
}

export default Finish