import React, { useEffect, useContext } from 'react'
import arcade from '../images/icon-arcade.svg'
import advanced from '../images/icon-advanced.svg'
import pro from '../images/icon-pro.svg'
import { FormContext } from '../context/FormContext'
import classNames from 'classnames'

const Plan = () => {

    const { HandleNext, HandlePrev, selectArcade, selectAdvance, selectPro, ArcadeStyle, ProStyle, AdvanceStyle, period, monthly, Toggle, istoggled, selected } = useContext(FormContext)

    // useEffect(() => {
    //     console.log(selected)
    // }, [Toggle])



    return (

        <>
            <div className='  bg-White  flex flex-col  items-center w-[21.438rem] h-auto pb-8 px-[1.625rem] pt-9 rounded-lg lg:w-[39.875rem] lg:h-[35.438rem] lg:pt-12 lg:px-12'>
                <div className=' flex flex-col gap-5 pb-7 lg:w-full lg:px-12'>
                    <h1 className=' font-bold text-Marineblue'>Select Your Plan</h1>
                    <p className=' text-Coolgray'>You have the option of monthly or yearly bill.</p>
                </div>

                <div className='flex flex-col gap-3 w-full lg:px-12 lg:grid lg:grid-cols-3 lg:gap-8'>
                    <div className=' flex flex-row gap-3 items-start pl-3 py-[1.125rem] rounded-md border-[0.063rem] border-opacity-50  border-Coolgray lg:flex-col lg:gap-[2.625rem] cursor-pointer' style={ArcadeStyle} onClick={selectArcade}>
                        <div className=' flex items-center'>
                            <img src={arcade} alt="" />
                        </div>
                        <div className=' flex flex-col items-center'>
                            <p className=' text-Marineblue font-medium'>Arcade</p>
                            <p className=' text-Coolgray'>${monthly.arcade}/{period}</p>
                        </div>
                    </div>

                    <div className='  flex flex-row gap-3 items-start pl-3 py-[1.125rem] rounded-md border-[0.063rem] border-opacity-50  border-Coolgray lg:flex-col lg:gap-[2.625rem] cursor-pointer' style={AdvanceStyle} onClick={selectAdvance}>
                        <div className=' h-full flex items-center'>
                            <img src={advanced} alt="" />
                        </div>
                        <div className=' flex flex-col items-center'>
                            <p className=' text-Marineblue font-medium'>Advanced</p>
                            <p className=' text-Coolgray'>${monthly.advance}/{period}</p>
                        </div>
                    </div>
                    <div className='  flex flex-row gap-3 items-start pl-3 py-[1.125rem] rounded-md border-[0.063rem] border-opacity-50  border-Coolgray lg:flex-col lg:gap-[2.625rem] cursor-pointer' style={ProStyle} onClick={selectPro}>
                        <div className=' h-full flex items-center'>
                            <img src={pro} alt="" />
                        </div>
                        <div className=' flex flex-col items-center'>
                            <p className=' text-Marineblue font-medium'>Pro</p>
                            <p className=' text-Coolgray'>${monthly.pro}/{period}</p>
                        </div>
                    </div>
                    <div className=' h-12 flex flex-row items-center justify-center gap-6 bg-Magnolia rounded-md lg:col-span-3'>
                        <div className={classNames('font-bold text-Coolgray', { ' text-Marineblue': period === "mo" })}>
                            Monthly
                        </div>

                        <label htmlFor="check" className=' h-5 w-9 rounded-full bg-Marineblue cursor-pointer relative' >
                            <input type="checkbox" id='check' className='sr-only' onClick={Toggle} />
                            <span className={classNames(' bg-White  h-3 w-3 rounded-full absolute top-1 left-1 peer-checked:bg-Purplishblue duration-300', {
                                'translate-x-4': istoggled
                            }
                            )}></span>
                        </label>
                        <div className={classNames('font-bold text-Coolgray', { 'text-Marineblue': period === "yr" })}>
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