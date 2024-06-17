import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from './postsSlice'

const Posts = () => {

  const dispatch = useDispatch() // Redux  hook
  const allPosts = useSelector(state => state.blogPosts.posts) // Redux hook

  const fetchPosts = async () => {
    const response = await axios.get('https://dummyjson.com/posts'); // API integration using Fetch
    if (response.status === 200) { // Checking the the status is 200 - Success
      dispatch(setPosts(response.data.posts))
    } else {
      alert("Something went wrong with the blog posts API.")
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  console.log('_single_post', allPosts['0'])

  return (
    <div className='p-5'>
      {allPosts.map((post) => <div className="p-4 mb-5 border border-gray-200 rounded-xl" key={post.id}>
        <h3 className="font-bold mb-1 cursor-pointer">{post.title}</h3>
        <div className='text-gray-500 text-sm mb-2'>{post.body}</div>
        <div className='flex justify-between items-center'>
          <div className='tags flex gap-2 mb-2 text-sm items-center text-gray-500'>
            Tags: {post.tags.map(tag => <button key={tag} className='bg-blue-500 text-white capitalize text-sm rounded-md px-2 py-1'>{tag}</button>)}
          </div>
          <div className='tags flex gap-2 mb-2 text-sm items-center text-gray-500'>
            Views: {post.views}
          </div>
        </div>
      </div>)}
    </div>
  )
}

export default Posts;