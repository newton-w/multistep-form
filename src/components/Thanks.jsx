import React from 'react'
import tick from '../images/icon-thank-you.svg'
import { motion } from 'framer-motion'
const Thanks = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='  bg-White  flex flex-col items-center justify-center w-[21.438rem] h-full pb-8 px-[1.625rem] pt-9 rounded-lg font-ubuntu lg:w-[39.875rem] lg:h-[35.438rem] lg:pt-12 lg:px-12'>

        <img src={tick} alt="check mark" className=' pb-5' />
        <h1 className=' pb-4 text-Marineblue font-bold text-2xl'>Thank You</h1>
        <p className=' text-center lg:w-[27rem] text-Coolgray'>Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com</p>

      </motion.div>
    </>
  )
}

export default Thanks