import React, { useState } from 'react'

const EditForm = ({sendEditedTask , id}) => {
    const [value , setValue] = useState('');
    function handlerForm(e){
        e.preventDefault()
        if(value){
            sendEditedTask(id , value)
            setValue('')
        }
    }
  return (
    <form onSubmit={handlerForm} className='w-2/3 mx-auto'>
      <h3 className='text-2xl capitalize font-regular mb-4'>change your task</h3>
      <input value={value} onChange={e => setValue(e.target.value)} className='bg-none focus:outline-none border-2 border-[#6C63FF] w-full px-2 py-2 mb-6 rounded-lg' type="text" placeholder='change your task ...'/>
      <button type='submit' className='w-full bg-[#6C63FF] hover:bg-[#5049dd] text-white py-2 font-bold rounded-lg'>Change</button>
    </form>
  )
}

export default EditForm
