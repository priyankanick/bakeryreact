import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { form } from 'react-bootstrap'
export default function Userdetails() {
    useEffect(() => {
        userListApiCall()
    }, [])
    let [userdetails, setUserDetails] = useState([])
    let userListApiCall = async () => {
        let token = localStorage.getItem("token")
        //console.log("token===>",token);
        let data = await axios.get("http://localhost:5000/users/list/", {
            headers: {
                Authorization: token //the token is a variable which holds the token
            }
        })
        setUserDetails(data.data.data)
        console.log("=====================>>", data.data.data)
    }
    return (
        <>
            <div><table border="1" cellPadding="10" >
                <thead>
                    <tr key="-1"><th>
                        name
                    </th>
                        <th>
                            email
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {userdetails.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td> {item.name}</td>
                                <td>{item.email}</td>
                            </tr>

                        )

                    })
                    }
                </tbody>

            </table>
            </div>

        </>)
}
