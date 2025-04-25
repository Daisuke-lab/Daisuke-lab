import React from 'react'
import Skill from './Skill'
import "./styles/skills.css"
function Skills() {
    
    const skills = {
        "Container": ["Kubernetes", "OpenShift", "Docker", "Podman", "Skopeo"],
        "Backend": ["Spring Boot", "Django"],
        "Cloud": ["AWS", "Solution Architect", "DevOps Engineer"],
        "DevOps": ["Jenkins", "CodePipeline", "GitLab CI/CD", "ArgoCD", "Terraform", "Ansible", "Zabbix", "New Relic"]
    }
    const categories = Object.keys(skills) as Array<keyof typeof skills>
    return (
        <div>
            <h1>Skills</h1>
            {categories.map((category) => (
                <>
                <h2>{category}</h2>
                <div className='skills_box'>{skills[category].map((skill:string) => <Skill name={skill}/>)}</div>
                </>
            ))}
        </div>
    )
}

export default Skills