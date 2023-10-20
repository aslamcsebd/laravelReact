import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const View = () => {
	const {id} = useParams();
	const [user, setUser] = useState([]);
	
	useEffect(() => {
		fetchUser();
	}, [id]);

	const fetchUser = async () => {
		try {
			const result = await axios.get("http://127.0.0.1:8000/api/findUser/"+id);
			setUser(result.data.user);
		}catch (err){
			console.log("Something wrong");
		}
	}
	
	const navigate = useNavigate();
	const backPage = ()=>{
		navigate('/');
	}

	return (
		<div className='row justify-content-center mt-4'>
			<div className='col-6'>
				<h4>User details</h4>
				<table className='table table-bordered text-center'>
					<thead>
						<tr>
							<th>SL No</th>
							<th>Full name</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
						</tr>
					</tbody>
				</table>
				<div>
					<button className='btn btn-primary text-center px-4' onClick={backPage}>Back to home</button>
				</div>
			</div>
		</div>
	)
};

export default View;
