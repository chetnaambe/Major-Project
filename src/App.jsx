import React from 'react'
import Nav from './Component/Nav'
import Section1 from './Component/Section1'
import Section2 from './Component/Section2'
import Section3 from './Component/Section3'
import Section4 from './Component/Section4'

const App = () => {
  return (
    <div className='h-screen w-full h-full'>
   <div className='pt-3.5 px-4.5'>
       <Nav />
       <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
   </div>
    </div>
  )
}

export default App
