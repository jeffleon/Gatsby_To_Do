import React from "react"
import Form_ from '../../components/form'
import Tasks from '../../components/tasks'
import './styles/index.css'

const Home = () =>{
  return (
      <div className="content row">
        <Form_/>
        <Tasks/>
      </div>
  )
}

export default Home
