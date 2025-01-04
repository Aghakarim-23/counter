import React, { useState } from 'react'

const Counter = () => {
    const [currentValue, setcurrentValue] = useState(0)
    const increment = () => {
        if(currentValue >= 0) setcurrentValue(currentValue + 1)
    }
    const decrement = () => {
        if(currentValue > 0) setcurrentValue(currentValue - 1)
    }
  return (
    <>
        <div className='max-w-[1440px] m-auto h-screen flex flex-col justify-center items-center'>
            <h1 className='text-[2rem] lg:text-[3rem] text-semibold mb-4'>Counter</h1>
            <div className='w-[80%] h-[40%] flex justify-center items-center gap-4 border border-black rounded-xl'> 
              <button onClick={() => decrement()} className='flex justify-center items-center text-[2rem] lg:text-[3rem] border w-[3rem] lg:w-[4.3rem] rounded-[50%] border-red-600'>-</button>
              <span className='text-[2rem] lg:text-[4.3rem]'>{currentValue}</span>
              <button onClick={() => increment()} className='flex justify-center items-center text-[2rem] lg:text-[3rem] border w-[3rem] lg:w-[4.3rem] rounded-[50%] border-green-600'>+</button>
            </div>
        </div> 
    </>
  )
}

export default Counter