import React from 'react'
import Header from '../../other/Header'
import Tasklist from '../../other/Tasklist'
import TaskSummry from '../Tasklist/TaskSummry'

const Empdashboard = () => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header />
        <Tasklist />
        <TaskSummry />
    </div>
  )
}

export default Empdashboard