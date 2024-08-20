import React from 'react'
import EditForm from './EditForm'

const EditPanel = ({sendEditedTask , id}) => {
  return (
    <section className='backdrop-blur-xl fixed inset-0'>
      <div className='text-center h-screen mt-[50%]'>
        <EditForm id={id} sendEditedTask={sendEditedTask} />
      </div>
    </section>
  )
}

export default EditPanel
