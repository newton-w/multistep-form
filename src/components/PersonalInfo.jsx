import React, { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import {motion} from 'framer-motion'


const PersonalInfo = () => {
    
const {formData , setFormData, HandleNext} = useContext(FormContext)

    return (
        <motion.form onSubmit={HandleNext}
        // initial = {{opacity : 0}}
        // animate ={{ opacity : 1}}
        // transition ={{ duration : 1}}
        >
            <div className='bg-White  flex flex-col  items-center w-[21.438rem] h-auto pb-8 px-[1.625rem] pt-9 rounded-lg lg:w-[39.875rem]  lg:pt-12 lg:px-12'>
                <div className=' flex flex-col gap-5 pb-7'>
                    <h1 className=' font-bold text-Marineblue'>Personal Info</h1>
                    <p className=' text-Coolgray'>Please provide your name, email, address and phone number.</p>
                </div>
                <div className='flex flex-col gap-[1.125rem] w-full lg:px-12 '>
                    <div className=' flex flex-col gap-1'>
                        <label className="after:content-['*'] after:ml-1 after:text-Strawberryred">Name</label>
                        <input type="text" placeholder='eg. Stephen King' value={formData.name} id='name' required onChange={(e) => { setFormData({...formData, name : e.target.value}) }} className=' border-[0.063rem] border-Coolgray py-3 px-4 font-bold focus:outline-Strawberryred focus:bg-White text-Marineblue' />
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <label className="after:content-['*'] after:ml-1 after:text-Strawberryred">Email Address</label>
                        <input type="email" placeholder='eg. stephenking@gmail.com' value={formData.email} id='email' required onChange={(e) => { setFormData({...formData, email : e.target.value}) }} className='  border-[0.063rem] border-Coolgray py-3 px-4 font-bold focus:outline-Strawberryred focus:bg-White text-Marineblue' />
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <label className="after:content-['*'] after:ml-1 after:text-Strawberryred">Phone no.</label>
                        <input type="text" placeholder='eg. +254 723 456 789' id='phone' value={formData.phone} required onChange={(e) => { setFormData({...formData, phone : e.target.value}) }} className='border-[0.063rem] border-Coolgray py-3 px-4 font-bold focus:outline-Strawberryred focus:bg-White text-Marineblue' />
                    </div>
                </div>
            </div>
            <div className='w-[21.438rem] flex items-center justify-end bg-Alabaster h-[4.5rem] bottom-0 cursor-pointer lg:relative  lg:bg-White lg:w-full lg:pb-8'>
                <button className=' font-ubuntu  font-bold bg-Marineblue h-10 w-24 text-White flex items-center justify-center mr-4 rounded hover:bg-Purplishblue duration-300 lg:mr-24 ' type='submit'>Next Step</button>
            </div>

        </motion.form>
    )
}

export default PersonalInfo