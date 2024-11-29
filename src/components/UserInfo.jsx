import React from 'react'

const UserInfo = () => {
    const userInfo = [
        {
            name: "sudipta",
            email: "sudipta@gmail.com",
            location: "Kolkata, India"
        },
        {
            name: "Monaj",
            email: "monaj@gmail.com",
            location: "US"
        },
        {
            name: "Abhik",
            email: "abhik@gmail.com",
            location: "Pune,India"
        }
    ]
    return (
        <div>
            {
                userInfo.map(({name,email,location}) => (
                    <ul key={Math.random()}>
                        <li>{name}</li>
                        <li>{email}</li>
                        <li>{location}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default UserInfo