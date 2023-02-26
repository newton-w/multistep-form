import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext'

const PersonalInfo = () => {

    const { formData, setFormData, HandleNext } = useContext(FormContext)

    return (
        <form onSubmit={HandleNext}>
            <div className='bg-White  flex flex-col  items-center w-[21.438rem] h-auto pb-8 px-[1.625rem] pt-9 rounded-lg lg:w-[39.875rem]  lg:pt-12 lg:px-12'>
                <div className=' flex flex-col gap-5 pb-7'>
                    <h1 className=' font-bold text-Marineblue'>Personal Info</h1>
                    <p className=' text-Coolgray'>Please provide your name, email, address and phone number.</p>
                </div>
                <div className='flex flex-col gap-[1.125rem] w-full lg:px-12 '>
                    <div className=' flex flex-col gap-1'>
                        <label className="after:content-['*'] after:ml-1 after:text-Strawberryred">Name</label>
                        <input type="text" placeholder='Newton W' value={formData.name} id='name' required onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} className=' border-[0.063rem] border-Coolgray py-3 px-4 font-bold focus:outline-Strawberryred focus:bg-White text-Marineblue' />
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <label className="after:content-['*'] after:ml-1 after:text-Strawberryred">Email Address</label>
                        <input type="email" placeholder='eg. stephenking@gmail.com' value={formData.email} id='email' required onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} className='  border-[0.063rem] border-Coolgray py-3 px-4 font-bold focus:outline-Strawberryred focus:bg-White text-Marineblue' />
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <label className="after:content-['*'] after:ml-1 after:text-Strawberryred">Phone no.</label>
                        <input type="text" placeholder='https://github.com/newton-w' id='phone' value={formData.phone} required onChange={(e) => { setFormData({ ...formData, phone: e.target.value }) }} className='border-[0.063rem] border-Coolgray py-3 px-4 font-bold focus:outline-Strawberryred focus:bg-White text-Marineblue' />
                    </div>
                </div>
            </div>
            <div className='bottom-0 translate-y-[8rem] bg-White w-full px-4 flex items-center justify-end h-[4.5rem] cursor-pointer lg:translate-y-0 lg:relative lg:px-0 lg:w-full lg:pt-[4.4rem]'>
                <button className=' font-ubuntu  font-bold bg-Marineblue h-10 w-24 text-White flex items-center justify-center  rounded hover:bg-Purplishblue duration-300 lg:mr-24 ' type='submit'>Next Step</button>
            </div>
        </form>
    )
}

export default PersonalInfo