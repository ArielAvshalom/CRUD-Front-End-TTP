import React from "react"
import {useState, useEffect} from "react";
import Axios from "axios";
import Student from "./Student";

export default function Students(){
    const [students, setStudents] = useState([])

    //create a state with setrender method and set it to zero
    //If you call useEffect, you are making a render request...
    //Your counter will go up
    //if your counter goes up you will make another use effect

    //useRef

    useEffect(() => {
        async function fetchData(){
            const allStudents = await Axios.get(`http://localhost:8080/api/students`)
            console.log("this", allStudents)
            setStudents((allStudents.data))
        }
        fetchData()
    },[])

    return (
        <div>
            {
                students && students.map(student=><Student key = {student.id} props = {student}/>)
            }
        </div>
    )

}