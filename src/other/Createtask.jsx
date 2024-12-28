import React from 'react'

const createtask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form className='flex flex-wrap w-full items-start justify-between' >

                <div className='w-1/2 '>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make a UI design'/>  
                    </div>

                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="date" />
                    </div>

                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Employee Name' />
                    </div>

                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='design,dev,etc.' />
                    </div>

                </div>

                <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" rows="10" cols="30"></textarea>
                <button className='bg-emerald-500 py-3 px-5 rounded text-sm mt-4 hover:bg-emerald-600 w-full'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default createtask