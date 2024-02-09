import React from 'react'
import { useParams } from 'react-router-dom'

function Article() {
    const name= useParams();
  return (
    <div className='mb-20'>
    <div className='sm:text-4xl text-2xl font-bold mt-6 text-gray-900'>Article PAGE</div>
    <h1>this is a {name.name} article</h1>
    </div>
  )
}

export default Article