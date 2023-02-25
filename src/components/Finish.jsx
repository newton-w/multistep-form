import React,{useContext} from 'react'
import { FormContext } from '../context/FormContext'


const Finish = () => {
  const { HandleNext, HandlePrev} = useContext(FormContext)

  return (
    <>
      <div className='  bg-White  flex flex-col  items-center w-[21.438rem] h-auto pb-8 px-[1.625rem] pt-9 rounded-lg lg:w-[39.875rem] lg:h-[35.438rem] lg:pt-12 lg:px-12'>
        <div className=' flex flex-col gap-5 pb-7 lg:w-full lg:px-12'>
          <h1 className=' font-bold text-Marineblue'>Finishing up</h1>
          <p className=' text-Coolgray'>Double check everything looks OK before confirming</p>
        </div>

        <div className=' flex flex-row  items-start justify-center w-[18.25rem] p-[0.938rem] rounded-md bg-Magnolia lg:w-[28rem] lg:px-6'>
          <div className=' flex flex-row items-center justify-start gap-4 w-full'>
            <div className=' flex flex-col items-start '>
              <p className=' text-Marineblue font-bold'>Arcade(Monthly)</p>
              <a href="/" className=' underline text-Coolgray hover:text-Purplishblue duration-300'>change</a>
            </div>
          </div>
          <div className=' flex h-full items-center text-Marineblue font-bold'>
            +$10/yr
          </div>
        </div>
        <div className=' flex flex-row  items-start justify-center w-[18.25rem] p-[0.938rem] rounded-md bg-Magnolia lg:w-[28rem]'>
          <div className=' flex flex-col gap-5 lg:w-[28rem] '>
            <div className=' flex w-[16.375rem] lg:w-[28rem] lg:px-6'>
              <div className=' flex flex-row items-center justify-start gap-4 w-full text-Coolgray'>
                Online service
              </div>
              <div className=' flex h-full items-center text-Marineblue'>
                +$1/mo
              </div>
            </div>
            <div className=' flex w-[16.375rem] lg:w-[28rem] lg:px-6'>
              <div className=' flex flex-row items-center justify-start gap-4 w-full text-Coolgray'>
                Larger storage
              </div>
              <div className=' flex h-full items-center text-Marineblue'>
                +$2/mo
              </div>
            </div>
          </div>
        </div>
        <div className='py-7 flex w-[16.375rem] lg:py-8 lg:w-[28rem] lg:px-6'>
          <div className=' flex flex-row items-center justify-start gap-4 w-full text-Coolgray'>
            Total(per month)
          </div>
          <div className=' flex h-full items-center text-Marineblue'>
            +$12/mo
          </div>
        </div>
      </div>
      <div className='w-[21.438rem] flex flex-row items-center justify-center bg-Alabaster h-[4.5rem] bottom-0 cursor-pointer lg:relative  lg:bg-none lg:w-full lg:pb-8 lg:px-24'>
        <div className=' flex items-center  w-full justify-between  '>
          <button className=' text-Coolgray ' onClick={HandlePrev}>Go back</button>
          <button className=' font-ubuntu  font-bold bg-Marineblue h-10 w-24 text-White flex items-center justify-center mr-4 rounded hover:bg-Purplishblue duration-300  lg:mr-0' onClick={HandleNext}>Next Step</button>
        </div>
      </div>
    </>
  )
}

export default Finish