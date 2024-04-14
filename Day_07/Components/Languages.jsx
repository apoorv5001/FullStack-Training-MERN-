import React from 'react'

const Languages = () => {
    let lang=["Java","JavaScript","Python","Ruby","PHP"]
  return (
    <div>
        <h1>Best Programming Languages:</h1>
        <ul>
            {lang.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>

        </div>
  )
}

export default Languages