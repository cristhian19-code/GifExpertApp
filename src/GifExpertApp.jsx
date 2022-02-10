import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    const [mode, setMode] = useState(false)
    
    const handleChangeMode = () => {
        setMode(!mode);
    }

    return (
        <div className={`px-4 py-10 transition-colors min-h-full ${mode ? 'bg-gray-800 text-gray-400' : 'white text-gray-700'}`}>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl font-bold'>GifExpertApp</h1>
                <button onClick={handleChangeMode} className=' shadow-md bg-transparent px-5 py-2 rounded-md font-bold'>{mode ? 'Ligth':'Dark'} Mode</button>
            </div>
            <AddCategory categories={ categories } setCategories={ setCategories }/>
            {
                categories.map(category => (
                    <GifGrid key={category} category={ category }/>
                ))
            }
        </div>
    )
}
