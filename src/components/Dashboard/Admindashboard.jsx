import React from 'react'
import Header from '../../other/Header'
import Createtask from '../../other/createtask'
import Alltask from '../../other/Alltask'

const Admindashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header />
        <Createtask />
        <Alltask />
    </div>
  )
}

export default Admindashboard