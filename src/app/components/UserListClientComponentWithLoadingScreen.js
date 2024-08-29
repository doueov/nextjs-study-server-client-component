"use client"

import { useEffect, useState } from "react"

export default function UserListClientComponentWithLoadingScreen() {
    const [progress, setProgress] = useState("")
    const [fetching, setFetching] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("/api/fake/users").then(res => res.json()).then(users => {
            setUsers(users)
            setFetching(false)
        })
    }, [])

    useEffect(() => {
        if(fetching) {
            console.log("start timer")
            const id = setInterval(() => {
                setProgress(progress => {
                    console.log(progress)
                    return progress + "■"
                })
                if(!fetching) clearInterval(id)
            }, 500)
            return () => {
                clearInterval(id)
                console.log("clear timer")
            }
        }
    }, [fetching])

    return <div>
        {fetching ? 
            progress 
            :
            <>
                <h1>Users</h1>
                <ul>
                    {users.map(user => <li key={user.id}>{user.id}</li>)}
                </ul>
            </>
        }
    </div>
}