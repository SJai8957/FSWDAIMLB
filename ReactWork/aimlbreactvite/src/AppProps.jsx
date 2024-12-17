import React from 'react'
import child1 from './ComponentProps/child1'


function AppProps() {
    const studentdata={
        name:"Sahil",
        branch:"AIML",
        section:"B",
        college:"ABES Engineering College"
    }
  return (
    <div>AppProps
        <child1 child1data={studentdata} />
    </div>
  )
}

export default AppProps