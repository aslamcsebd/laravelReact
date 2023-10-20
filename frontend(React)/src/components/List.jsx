import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const List = () => {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		fetchData();
	}, [])

	const fetchData = async () => {
		try {
			const result = await axios("http://127.0.0.1:8000/api/users");
			// console.log(result.data.users);
			setUserData(result.data.users);
		}catch (err){
			console.log("Something wrong");
		}
	}
	const userDelete = async(id)=>{
		await axios.delete("http://127.0.0.1:8000/api/deleteUser/"+id);
		const newUserData = userData.filter((item) => {
			return(item.id !== id)
		})
		setUserData(newUserData);
	}
	return (
		<>			
			<h5>User details</h5>
			<table className='table table-bordered text-center'>
				<thead>
					<tr>
						<th>SL No</th>
						<th>Full name</th>
						<th>Email</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{
						userData.map((user, i) => {
							return (
								<tr key={i}>
									<td width="8%">{++i}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td width="27%">
										<NavLink to={`/view/${user.id}`} className='btn btn-success'>View</NavLink>
										<NavLink to={`/edit/${user.id}`} className='btn btn-info mx-2'>Edit</NavLink>
										<button onClick={()=>userDelete(user.id)} className='btn btn-danger'>Delete</button>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</>
	)
}
export default List;