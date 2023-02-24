import React, { useState } from 'react'
import arcade from '../images/icon-arcade.svg'
import advanced from '../images/icon-advanced.svg'
import pro from '../images/icon-pro.svg'

const Plan = ({ HandleNext, HandlePrev }) => {

    const [subscription, setSubscription] = useState({
        arcade: false,
        advanced: false,
        pro: false
    })


    const selectArcade = () => {
        setSubscription({
            arcade:  true ,
            advance: false,
            pro: false
        })
    }
    const selectAdvance = () => {
        setSubscription({
            arcade:  false ,
            advance: true,
            pro: false
        })
    }
    const selectPro = () => {
        setSubscription({
            arcade:  false ,
            advance: false,
            pro: true
        })
    }


    const ArcadeStyle = {
        BorderStyle: subscription.arcade ? 'hsl(243, 100%, 62%)' : 'hsl(231, 11%, 63%)',
        background: subscription.arcade ? 'hsl(206, 94%, 87%)' : 'white',
    }
    const AdvanceStyle = {
        BorderStyle: subscription.advance ? 'hsl(243, 100%, 62%)' : 'hsl(231, 11%, 63%)',
        background: subscription.advance ? 'hsl(206, 94%, 87%)' : 'white',
    }
    const ProStyle = {
        BorderStyle: subscription.pro ? 'hsl(243, 100%, 62%)' : 'hsl(231, 11%, 63%)',
        background: subscription.pro ? 'hsl(206, 94%, 87%)' : 'white',
    }



    return (

        <>
            <div className='  bg-White  flex flex-col  items-center w-[21.438rem] h-auto pb-8 px-[1.625rem] pt-9 rounded-lg lg:w-[39.875rem] lg:h-[35.438rem] lg:pt-12 lg:px-12'>
                <div className=' flex flex-col gap-5 pb-7 lg:w-full lg:px-12'>
                    <h1 className=' font-bold text-Marineblue'>Select Your Plan</h1>
                    <p className=' text-Coolgray'>You have the option of monthly or yearly bill.</p>
                </div>

                <div className='flex flex-col gap-3 w-full lg:px-12 lg:grid lg:grid-cols-3 lg:gap-8'>
                    <div className=' flex flex-row gap-3 items-start pl-3 py-[1.125rem] rounded-md border-[0.063rem] border-Coolgray lg:flex-col lg:gap-[2.625rem] cursor-pointer' style={ArcadeStyle} onClick={selectArcade}>
                        <div className=' flex items-center'>
                            <img src={arcade} alt="" />
                        </div>
                        <div className=' flex flex-col items-center'>
                            <p className=' text-Marineblue font-medium'>Arcade</p>
                            <p className=' text-Coolgray'>$9/mo</p>
                        </div>
                    </div>

                    <div className='  flex flex-row gap-3 items-start pl-3 py-[1.125rem] rounded-md border-[0.063rem] border-Coolgray lg:flex-col lg:gap-[2.625rem] cursor-pointer' style={AdvanceStyle} onClick={selectAdvance}>
                        <div className=' h-full flex items-center'>
                            <img src={advanced} alt="" />
                        </div>
                        <div className=' flex flex-col items-center'>
                            <p className=' text-Marineblue font-medium'>Advanced</p>
                            <p className=' text-Coolgray'>$12/mo</p>
                        </div>
                    </div>
                    <div className='  flex flex-row gap-3 items-start pl-3 py-[1.125rem] rounded-md border-[0.063rem] border-Coolgray lg:flex-col lg:gap-[2.625rem] cursor-pointer' style={ProStyle} onClick={selectPro}>
                        <div className=' h-full flex items-center'>
                            <img src={pro} alt="" />
                        </div>
                        <div className=' flex flex-col items-center'>
                            <p className=' text-Marineblue font-medium'>Pro</p>
                            <p className=' text-Coolgray'>$15/mo</p>
                        </div>
                    </div>
                    <div className=' h-12 flex flex-row items-center justify-center gap-6 bg-Magnolia rounded-md lg:col-span-3'>
                        <div>
                            Monthly
                        </div>

                        <label htmlFor="check" className=' h-5 w-9 rounded-full bg-Marineblue cursor-pointer relative'>
                            <input type="checkbox" id='check' className='sr-only' />
                            <span className=' bg-White  h-3 w-3 rounded-full absolute top-1 left-1 peer-checked:bg-Purplishblue'></span>
                        </label>
                        <div>
                            Yearly
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[21.438rem] flex flex-row items-center justify-center bg-Alabaster h-[4.5rem] bottom-0 cursor-pointer lg:relative  lg:bg-none lg:w-full lg:pb-8 lg:px-24'>
                <div className=' flex items-center  w-full justify-between  '>
                    <button className=' text-Coolgray ' onClick={HandlePrev}>Go back</button>
                    <button className=' font-ubuntu  font-bold bg-Marineblue h-10 w-24 text-White flex items-center justify-center mr-4 rounded hover:bg-Purplishblue duration-300  lg:mr-0' onClick={HandleNext} >Next Step</button>
                </div>
            </div>
        </>
    )
}

export default Plan