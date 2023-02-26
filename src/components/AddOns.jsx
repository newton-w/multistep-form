import React, { useContext, useState, useEffect} from 'react'
import { FormContext } from '../context/FormContext'
import classNames from 'classnames'
import {motion} from 'framer-motion'


const AddOns = () => {
  const { HandleNext, HandlePrev, period, addons, HandleCheckBox1, HandleCheckBox2, HandleCheckBox3,CheckBoxRef1, CheckBoxRef2,CheckBoxRef3, isChecked1, isChecked2, isChecked3, HandleCheck1, HandleCheck2,HandleCheck3} = useContext(FormContext)

 



  return (
    <>
      <motion.div
      initial = {{opacity : 0}}
      animate ={{ opacity : 1}}
      transition ={{ duration : 0.5}}
      className='  bg-White  flex flex-col  items-center w-[21.438rem] h-auto pb-8 px-[1.625rem] pt-9 rounded-lg lg:w-[39.875rem] lg:h-[35.438rem] lg:pt-12 lg:px-12'>
        <div className=' flex flex-col gap-5 pb-7 lg:w-full lg:px-12'>
          <h1 className=' font-bold text-Marineblue'>Pick add-ons</h1>
          <p className=' text-Coolgray'>Addons help enhance gaming experience</p>
        </div>
        <div className='flex flex-col gap-3'>
          <div className={classNames(' flex flex-row  items-start justify-center p-[0.938rem] rounded-md border-[0.063rem] border-Coolgray lg:w-[28rem] cursor-pointer',
          {'bg-Lightblue border-Purplishblue' : isChecked1}
          )} onClick={HandleCheckBox1}>
            <div className=' flex flex-row items-center justify-start gap-4 w-full '>
              <label htmlFor="check">
                <input ref={CheckBoxRef1} checked={isChecked1} onChange={HandleCheck1} type="checkbox" name="check" id="check" className=' h-5 w-5 rounded-sm' />
              </label>
              <div className=' flex flex-col items-start '>
                <p className=' text-Marineblue font-bold'>Online Services</p>
                <p className=' text-Coolgray w-[9.688rem] text-xs'>Access to multiplayer games</p>
              </div>
            </div>
            <div className=' flex h-full items-center text-Purplishblue'>
              +${addons.online}/{period}
            </div>
          </div>
          <div className={classNames(' flex flex-row  items-start justify-center p-[0.938rem] rounded-md border-[0.063rem] border-Coolgray lg:w-[28rem] cursor-pointer',
          {'bg-Lightblue border-Purplishblue' : isChecked2}
          )} onClick={HandleCheckBox2} >
            <div className=' flex flex-row items-center justify-start gap-4 w-full'>
              <label htmlFor="check">
                <input ref={CheckBoxRef2} checked={isChecked2} onChange={HandleCheck2} type="checkbox" name="check" id="check" className=' h-5 w-5 rounded-sm' />
              </label>
              <div className='flex flex-col items-start'>
                <p className='text-Marineblue font-bold'>Larger storage</p>
                <p className='text-Coolgray w-[9.688rem] text-xs'>Extra 1tb of cloud space</p>
              </div>
            </div>
            <div className=' flex h-full items-center text-Purplishblue'>
              +${addons.storage}/{period}
            </div>
          </div>
          <div className={classNames(' flex flex-row  items-start justify-center p-[0.938rem] rounded-md border-[0.063rem] border-Coolgray lg:w-[28rem] cursor-pointer',
          {'bg-Lightblue border-Purplishblue' : isChecked3}
          )} onClick={HandleCheckBox3}>
            <div className=' flex flex-row items-center justify-start gap-4 w-full'>
              <label htmlFor="check">
                <input ref={CheckBoxRef3} checked={isChecked3} onChange={HandleCheck3} type="checkbox" name="check" id="check" className=' h-5 w-5 rounded-sm' />
              </label>
              <div className=' flex flex-col items-start '>
                <p className=' text-Marineblue font-bold'>Customizable profile</p>
                <p className=' text-Coolgray w-[10.688rem] text-xs'>Custom theme in your profile</p>
              </div>
            </div>
            <div className=' flex h-full items-center text-Purplishblue'>
              +${addons.customize}/{period}
            </div>
          </div>
        </div>
      </motion.div>
      <div className='w-[21.438rem] flex flex-row items-center justify-center bg-Alabaster h-[4.5rem] bottom-0 cursor-pointer lg:relative  lg:bg-none lg:w-full lg:pb-8 lg:px-24'>
        <div className=' flex items-center  w-full justify-between  '>
          <button className='text-Coolgray ' onClick={HandlePrev}>Go back</button>
          <button className='font-ubuntu  font-bold bg-Marineblue h-10 w-24 text-White flex items-center justify-center mr-4 rounded hover:bg-Purplishblue duration-300  lg:mr-0' onClick={HandleNext}>Next Step</button>
        </div>
      </div>
    </>
  )
}

export default AddOns