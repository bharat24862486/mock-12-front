import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Post from '../Component/Post'
import Get from '../Component/Get'

const MainRoutes = () => {
  return (
    <Routes>

      <Route path='/post' element={<Post />}/>
      <Route path='/' element={<Get />}/>
    </Routes>
  )
}

export default MainRoutes
