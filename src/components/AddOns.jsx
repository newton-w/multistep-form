import React from 'react'


const AddOns = ({page , setPage, HandleNext, HandlePrev}) => {
  return (
    <>
      <div className='  bg-White  flex flex-col  items-center w-[21.438rem] h-auto pb-8 px-[1.625rem] pt-9 rounded-lg lg:w-[39.875rem] lg:h-[35.438rem] lg:pt-12 lg:px-12'>
        <div className=' flex flex-col gap-5 pb-7 lg:w-full lg:px-12'>
          <h1 className=' font-bold text-Marineblue'>Pick add-ons</h1>
          <p className=' text-Coolgray'>Addons help enhance gaming experience</p>
        </div>
        <div className='flex flex-col gap-3'>
          <div className=' flex flex-row  items-start justify-center p-[0.938rem] rounded-md border-[0.063rem] border-Coolgray lg:w-[28rem]'>
            <div className=' flex flex-row items-center justify-start gap-4 w-full'>
              <label htmlFor="check">
                <input type="checkbox" name="check" id="check" className=' h-5 w-5 rounded-sm' />
              </label>
              <div className=' flex flex-col items-start '>
                <p className=' text-Marineblue font-bold'>Online Services</p>
                <p className=' text-Coolgray w-[9.688rem] text-xs'>Access to multiplayer games</p>
              </div>
            </div>
            <div className=' flex h-full items-center text-Purplishblue'>
              +$10/yr
            </div>
          </div>
          <div className=' flex flex-row  items-start justify-center p-[0.938rem] rounded-md border-[0.063rem] border-Coolgray lg:w-[28rem]'>
            <div className=' flex flex-row items-center justify-start gap-4 w-full'>
              <label htmlFor="check">
                <input type="checkbox" name="check" id="check" className=' h-5 w-5 rounded-sm' />
              </label>
              <div className=' flex flex-col items-start '>
                <p className=' text-Marineblue font-bold'>Larger storage</p>
                <p className=' text-Coolgray w-[9.688rem] text-xs'>Extra 1tb of cloud space</p>
              </div>
            </div>
            <div className=' flex h-full items-center text-Purplishblue'>
              +$20/yr
            </div>
          </div>
          <div className=' flex flex-row  items-start justify-center p-[0.938rem] rounded-md border-[0.063rem] border-Coolgray lg:w-[28rem]'>
            <div className=' flex flex-row items-center justify-start gap-4 w-full'>
              <label htmlFor="check">
                <input type="checkbox" name="check" id="check" className=' h-5 w-5 rounded-sm' />
              </label>
              <div className=' flex flex-col items-start '>
                <p className=' text-Marineblue font-bold'>Customizable profile</p>
                <p className=' text-Coolgray w-[10.688rem] text-xs'>Custom theme in your profile</p>
              </div>
            </div>
            <div className=' flex h-full items-center text-Purplishblue'>
              +$20/yr
            </div>
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

export default AddOns