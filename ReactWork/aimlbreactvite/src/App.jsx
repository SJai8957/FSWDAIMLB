import React from 'react'
import Student from './Student';
import logo from './logo.png'

function App() {
    const studentdata={}
  return (
    // <div style={{color:'Red'}}><h2>ABES Engineering College</h2>
    // <div style={mystyle}>{a}</div>
    <div style={{marginLeft:"300px"}}>
      {/* <Student data={studentdata} /> */}
      <div>
          <Student name="Rahul Kumar" roll='2200321530' college="Abes engineeering college" branch="CSE AIML" 
           pic={<img src={logo} height={100} width={40}/>} 
           />
      </div>
    </div>
  
  )
}

export default App