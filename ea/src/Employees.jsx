import React from 'react'
import {useState} from "react"
import girlImage from "./images/girlImage.jpg"
import boyImage from "./images/boyImage.jpg"
export const Employees=()=> {
        const [employees, setEmployees] = useState([{
                id: 1,
                fullName: "Bob Jones",
                designation: "JavaScript Developer",
                gender: "male",
                teamName: "A"
              },
              {
                id: 2,
                fullName: "Jill Bailey",
                designation: "Node Developer",
                gender: "female",
                teamName: "A"
              },
              {
                id: 3,
                fullName: "Gail Shepherd",
                designation: "Java Developer",
                gender: "female",
                teamName: "A"
              },
              {
                id: 4,
                fullName: "Sam Reynolds",
                designation: "React Developer",
                gender: "male",
                teamName: "B"
              },
              {
                id: 5,
                fullName: "David Henry",
                designation: "DotNet Developer",
                gender: "male",
                teamName: "B"
              },
              {
                id: 6,
                fullName: "Sarah Blake",
                designation: "SQL Server DBA",
                gender: "female",
                teamName: "B"
              },
              {
                id: 7,
                fullName: "James Bennet",
                designation: "Angular Developer",
                gender: "male",
                teamName: "C"
              },
              {
                id: 8,
                fullName: "Jessica Faye",
                designation: "API Developer",
                gender: "female",
                teamName: "C"
              },
              {
                id: 9,
                fullName: "Lita Stone",
                designation: "C++ Developer",
                gender: "female",
                teamName: "C"
              },
              {
                id: 10,
                fullName: "Daniel Young",
                designation: "Python Developer",
                gender: "male",
                teamName: "D"
              },
              {
                id: 11,
                fullName: "Adrian Jacobs",
                designation: "Vue Developer",
                gender: "male",
                teamName: "D"
              },
              {
                id: 12,
                fullName: "Devin Monroe",
                designation: "Graphic Designer",
                gender: "male",
                teamName: "D"
              }])
              const [selectedTeam, setSelectedTeam] = useState("A")
              const handleChange =(e)=>{
                console.log(e.target.value)
                setSelectedTeam(e.target.value)
                
              }
              const handleClick =(event)=>{
                const changeEmployeeTeam = employees.map((el)=>
                (el.id === parseInt(event.currentTarget.id))?
                (el.teamName === selectedTeam) ? {...el,teamName:""}:{...el,teamName:selectedTeam}:el)
                           
               setEmployees(changeEmployeeTeam)
                }
                     
              
  return (
        <div className='container'>
                <select value={selectedTeam} 
                onChange={handleChange} className="form-select" aria-label="Default select example">
                        <option value="A">Team A </option>
                        <option value="B">Team B</option>
                        <option value="C">Team C</option>
                        <option value="D">Team D</option>
                </select>
<div className="card-collection">
        
        
        {employees.map ((el)=>(
         
<div  
        onClick={handleClick}
         className={(el.teamName ===selectedTeam ?"standout":"nostandout" )}
         
          id={el.id} 
          style={{cursor:"pointer"}}
          >      <div>{el.id}</div>
                 <div >{ el.gender==="female"?<img width="220px" alt="girl"src={girlImage}/>: <img width="100px" alt="boy"src={boyImage}/>}</div>
                 <div>FullName : {el.fullName}</div>
                 <div>Designation : {el.designation}</div>
                 <div>Gender : {el.gender}</div>
                 <div>TeaamName : {el.teamName}</div>
       </div>
         
        ))}
     </div>

        </div>
    
  )
}

      


       
        

