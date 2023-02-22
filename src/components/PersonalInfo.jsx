import React from 'react'

const PersonalInfo = () => {
    return (
        <div className='  bg-White  flex flex-col  items-center w-[21.438rem] h-auto pb-8 px-[1.625rem] pt-9 rounded-lg lg:w-[39.875rem] lg:h-[35.438rem] lg:pt-12 lg:px-12'>
            <div className=' flex flex-col gap-5 pb-7'>
                <h1 className=' font-bold text-Marineblue'>Personal Info</h1>
                <p className=' text-Coolgray'>Please provide your name, email, address and phone number.</p>
            </div>
            <form className='flex flex-col gap-[1.125rem] w-full lg:px-12 '>
                <div className=' flex flex-col gap-1'>
                    <label>Name</label>
                    <input type="text" placeholder='eg. Stephen King' id='name' required className=' border-[0.063rem] border-Coolgray py-3 px-4 font-bold focus:outline-Strawberryred focus:bg-White text-Marineblue' />
                </div>
                <div className=' flex flex-col gap-1'>
                    <label>Email Address</label>
                    <input type="email" placeholder='eg. stephenking@gmail.com' id='email' required className='  border-[0.063rem] border-Coolgray py-3 px-4 font-bold focus:outline-Strawberryred focus:bg-White text-Marineblue' />
                </div>
                <div className=' flex flex-col gap-1'>
                    <label>Phone no.</label>
                    <input type="text" placeholder='eg. +254 723 456 789' id='phone' required className='border-[0.063rem] border-Coolgray py-3 px-4 font-bold focus:outline-Strawberryred focus:bg-White text-Marineblue' />
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo