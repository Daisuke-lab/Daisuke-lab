import React from 'react'
import "./styles/skill.css"
interface Props {
    name: string
}

function Skill({name}:Props) {
  return (
    <div className='skill_box'>
        <div className="inner">
        {name}
        </div>
    </div>
  )
}

export default Skill