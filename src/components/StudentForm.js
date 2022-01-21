import { useState } from "react";
import Axios from "axios"

export default function StudentForm(){
    const [firstname, setFirstname] = useState("")
    const [lastName, setLastName]   = useState("")
    const [gender, setGender]       = useState("")
    const [dob, setDob]             = useState("2000-01-01")
    const [image, setImage]         = useState("example.com/image")
    async function submitHandler(e){
        e.preventDefault()
        await Axios.post(`http://localhost:8080/api/students`, {firstname, lastName, gender, dob, image})
        console.log('did something')
    }

    return (
        <div>
            <h1>Let's add a student!</h1>
            <form onSubmit={submitHandler}>

                <label>
                    First Name:
                    <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>

                <label>
                    gender:
                    <input type="text" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                </label>

                <label>
                    DOB:
                    <input type="text" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                </label>

                <label>
                    image:
                    <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}