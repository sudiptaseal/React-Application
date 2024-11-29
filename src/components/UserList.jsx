import React from 'react'

const UserList = () => {
    const users = [
        {
            id:1,
            name:"sudipta seal",
            age:38
        },
        {
            id:2,
            name:"monaj mondal",
            age:37
        },
        {
            id:3,
            name:"santanu Dhali",
            age:39
        }
    ]
  return (
    <main>
        {
            users.map(({id,name,age})=>(
                <div key={id}> 
                    <h1>Name = {name}</h1>
                    <h1>Age = {age}</h1>
                </div>
            ))
        }
    </main>
  )
}

export default UserList;