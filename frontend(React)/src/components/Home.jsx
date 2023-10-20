import React, { useState } from 'react'
import List from './List.jsx';
import axios from 'axios';

export default function Home(){
	const [userValue, setUserValue] = useState({
        name: "",
        email: "",
        password: ""
    });
 
    const fieldValue = (e) => {
        setUserValue({
            ...userValue,
            [e.target.name]: e.target.value
			// Must be use 1st field. It use as serially [name, email, password]
        });
        console.log(userValue);
    }
	
    const [loading, setLoading] = useState()
 
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const responce = await axios.post("http://127.0.0.1:8000/api/addUser", userValue);
            console.log(responce);
            setLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }
   
	// Count
	const [showCount, setCount] = useState(0);
	const decrement = () => {
		setCount(showCount-1);
	}
	const increment = () => {
		setCount(showCount+1);
	}

	// Must be last
 	if(loading){
        return <Home />
    }

	return (
		<div>
			<h2 className='text-center'>Laravel, React js, REST API CRUD</h2>
			<h5>Add user details</h5>
			<div className='row justify-content-center'>
				<div className="col-md-4">
					<form>
						<div className='mb-3'>
							<label htmlFor='name' className='form-label'>Name</label>
							<input type="text" id='name' className='form-control' name="name" onChange={e => fieldValue(e)} />
						</div>
						<div className='mb-3'>
							<label htmlFor='email' className='form-label'>Email</label>
							<input type="email" id='email' className='form-control' name="email" onChange={e => fieldValue(e)} required />
						</div>
						<div className='mb-3'>
							<label htmlFor='password' className='form-label'>Password</label>
							<input type="text" id='password' className='form-control' name="password" onChange={e => fieldValue(e)} required />
						</div>
						<button type='submit' className='btn btn-outline-primary col-12' onClick={e => onSubmit(e)}>Add user</button>				
					</form>
					<div className='mt-4'>
						<button className='btn btn-sm btn-danger' onClick={decrement}>Decrement</button>
						<span className='mx-4'>{showCount}</span>
						<button className='btn btn-sm btn-success' onClick={increment}>Increment</button>
					</div>
				</div>
				<div className="col-md-8">
					<List />
				</div>
			</div>
		</div>
	)
}
