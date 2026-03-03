import React from 'react'
import  {Bus} from 'lucide-react'
const Nav = () => {
  return (
    <div className='w-full flex items-center justify-between'>
      <div className='flex items-center gap-2.5'>
        <Bus className='text-[#2B5FD2] size-7.5' />
        <h1 className='text-[20px] font-semibold'>SmartBus</h1>
      </div>
       <div className='flex items-center gap-3.5'>
      <button className='active:text-[#2B5FD2] font-medium text-[18px] outline-none border-none'>Login</button>
      <button className='bg-[#2B5FD2] text-white px-3 py-1.5 rounded-[5px]'>Sign up</button>
       </div>

    </div>
  )
}

export default Nav