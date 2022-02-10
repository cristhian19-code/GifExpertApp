import { useState } from "react"

export const AddCategory = ({categories, setCategories}) => {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    const value = e.target.value 
    setInput(value)
  }

  const handleAddCategory = (e) => {
    e.preventDefault();

    // verificar duplicado de elementos
    const ctg = categories.find(el => el.toLowerCase() === input.toLowerCase());

    if (ctg?.length > 0) {
      alert('La categoria ya existe')
    } else {
      // guardar elemento en la lista de categorias
      setCategories(cat => [input ,...cat]);
    }
    
    setInput('')
  }

  return (
    <form onSubmit={handleAddCategory}>
      <input value={input} onChange={handleInputChange} className='my-5 w-full border p-3 outline-none rounded-sm border-blue-400 text-gray-700' type="text" placeholder='Burcar gif por nombre'/>
    </form>
  )
}