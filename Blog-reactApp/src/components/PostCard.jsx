import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className=' justify-center mb-4'>
                <img  src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className=' w-64 rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero laboriosam eveniet! Non eligendi deserunt recusandae voluptate quisquam nobis mollitia.</p>
        </div>
    </Link>
  )
}


export default PostCard