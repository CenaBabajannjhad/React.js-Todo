import React , {useState} from 'react'

const TodoForm = ({sendTodo}) => {
  const [inputValue , setInputValue] = useState('');
  // when form submited
  function handleForm(e){
    e.preventDefault()
    // if input value have some value return
    if(inputValue){
      // send value to parent component
      sendTodo(inputValue);
      // and in the end , clean or reset input
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleForm} className='w-10/12 lg:w-7/12 mx-auto mt-5'>
      <section className='flex items-center'>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)}  className='block bg-[none] focus:outline-none w-3/4 border-solid border-[#6C63FF] border-2 rounded-md py-2 px-3' type="text" placeholder='enter your todo...'/>
        <button type='submit' className='block w-1/4 bg-[#6C63FF] hover:bg-[#483ff9] hover:border-[#483ff9] border-solid border-[#6C63FF] ml-1 rounded-md text-white font-medium border-2 py-2 px-3'>ADD</button>
      </section>
    </form>
  )
}

export default TodoForm
