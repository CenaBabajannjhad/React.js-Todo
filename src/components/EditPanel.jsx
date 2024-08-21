import React from 'react'
import EditForm from './EditForm'

const EditPanel = ({sendEditedTask , id}) => {
  return (
    <section className='backdrop-blur-xl fixed inset-0  w-screen h-screen flex items-center justify-center'>
      <button className='fixed w-[30px] h-[30px] top-8 right-8'>
        <div className='w-[25px] fixed border-2  rounded-lg border-black rotate-[45deg]'></div>
        <div className='w-[25px] fixed border-2 rounded-lg border-black rotate-[-45deg]'></div>
      </button>
      <div className='text-center w-3/4 h-1/4'>
        <EditForm id={id} sendEditedTask={sendEditedTask} />
      </div>
    </section>
  )
}

export default EditPanel
