import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import UserUpdate from './UserUpdate';

const UserManager = () => {

    const [userList, setUserList] = useState([]);
    const [showForm, setshowForm] = useState(false); //usestate snippet is used here 
    const [userData, setuserData] = useState(null);

    const getDataFromBackend = async () => {
    //sending request
    const res=  await fetch ('http://localhost:5000/user/getall');

    //accessing data from response
    const data = await res.json();

    console.log(data);
    setUserList(data);
    
    
    };

    useEffect(() => {
     getDataFromBackend();
    }, [])
    
    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/user/delete/' +id, {
        method : 'DELETE'
        })

        if(res.status===200){
            getDataFromBackend();
            toast.success('User Deleted Sucsessfully!');
        }
    }

    const updateUser = (user)=> {
        setshowForm(true);
        setuserData(user);
    }

  return (
    <div>
        <header className='bg-dark py-5'>
            <div className="container">
                <h1 className="display-3 fw-bold text-white text-center">
                    Manage User Data
                </h1>
            </div>

        </header>
        <div className="row">
            <div className="col-md">
                <div className="container-fluid mt-4">
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th colSpan ={2} className="text-center">User Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map ((user)=>(
                                <tr>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => deleteUser(user._id)}><i class="fas fa-trash"></i></button>
                                    </td>
                                    <td>
                                        <button className='btn btn-warning' onClick={() => updateUser(user)}><i class="fas fa-edit    "></i></button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>


                </div>
            </div>
            {
                showForm ?
                (
                    <div className="col-md-3">
                        <UserUpdate userData={userData} getDataFromBackend={getDataFromBackend} setshowForm={setshowForm}/>
                    </div>
                )
                :
                ("")
            }
            
        </div>
        

         

    </div>
  )
}

export default UserManager