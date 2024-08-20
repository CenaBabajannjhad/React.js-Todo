import React from 'react'
import EditForm from './EditForm'

const EditPanel = ({sendEditedTask , id}) => {
  return (
    <section className='backdrop-blur-xl fixed inset-0  w-screen h-screen flex items-center justify-center'>
      <div className='text-center w-3/4 h-1/4'>
        <EditForm id={id} sendEditedTask={sendEditedTask} />
      </div>
    </section>
  )
}

export default EditPanel
