import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

const Dashboard = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const getDataFromBackend = async () => {
    //sending request
    const res = await fetch("http://localhost:5000/subs/getbyowner/"+currentUser._id)

    //accessing data from response
    const data = await res.json()

    console.log(data)
    setUserList(data)
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])

  const deleteUser = async (id) => {
    console.log(id)
    const res = await fetch("http://localhost:5000/subs/delete/" + id, {
      method: "DELETE",
    })

    if (res.status === 200) {
      getDataFromBackend()
      toast.success("Subscriber Deleted Sucsessfully!")
    }
  }

  const sendMails = async () => {
    for (let user of userList) {
      if (user.email) {
        await fetch("http://localhost:5000/util/sendmail", {
          method: "POST",
          body: JSON.stringify({
            reciever: user.email,
            subject: "NewsLetter from Mini Project",
            html: `
                            <h1>You are recieving mail as you have subscribed!!</h1>
                        `
                    }),
                    headers: {'Content-Type' : 'application/json'}
                })
            }
        }
        // success alert
    }

  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container">
          <h1 className="display-3 fw-bold text-white text-center">Manage Subscribers Data</h1>
        </div>
      </header>
      <div className="container">
        <div className="card-">
            <div className="card-body">
                <h5 className="card-title">Copy the Code Below</h5>
                    <textarea readOnly className="form-control" rows={5} value={`
                    <link rel="stylesheet" href="http://localhost:5000/index.css">
                    <div owner-id="${currentUser._id}" id="plugin"></div>
                    <script src="http://localhost:5000/index.js"></script>
                    `} />
            </div>
        </div>
      </div>

        </header>
        <div className="row">
            <div className="col-md">
                <div className="container-fluid mt-4">
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th className="">User Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map ((user)=>(
                                <tr>
                                    <td>{user._id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => deleteUser(user._id)}><i class="fas fa-trash"></i></button>
                                    </td>
                                   
                                </tr>
                            ))
                        }

                    </tbody>
                </table>


                </div>

                <button className='btn btn-primary mt-4' onClick={sendMails}>Send Mail</button>
            </div>
            
        </div>
    </div>
  )
}

export default Dashboard
