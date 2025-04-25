import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from './Projects'
import Skill from './Skill'
import Skills from './Skills'

function App() {

  return (
    <>
      <img src="./public/kubernetes.png" height={500} className='loading-animation'/>
      <div className='name_parent'>
      <h1 className='name_back'>Daisuke Kikuchi</h1>
      <h1 className='name_front'>Daisuke Kikuchi</h1>
      </div>
      <img src="./public/daisuke.jpg" height={500}/>
      <Projects/>
      <Skills/>
    </>
  )
}

export default App
