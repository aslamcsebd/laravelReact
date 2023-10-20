import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
	const {id} = useParams();	
	const [userValue, setUserValue] = useState({
		name: '',
		email: ""
	});

	useEffect(() => {
		fetchUser();
	}, [id]);

	const fetchUser = async () => {
		try {
			const result = await axios.get("http://127.0.0.1:8000/api/findUser/"+id);
			setUserValue(result.data.user);
		}catch (err){
			console.log("Something wrong");
		}
	}

	const fieldValue = (e) => {
		setUserValue({
			...userValue,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://127.0.0.1:8000/api/updateUser/"+id, userValue);
            navigate('/');  
        } catch (err) {
            console.log("Something Wrong");
        }
    }

	const navigate = useNavigate();
	const backPage = () => {
		navigate('/');
	}

	return (
		<>
			<div className="row justify-content-center mt-4">
				<h4 className="text-center">Edit user</h4>
				<div className="col-md-6">
					<form>
						<div className="mb-3">
							<label className="form-label">Id</label>
							<input type="text" className="form-control" name="id" value={id} disabled/>
						</div>
						<div className="mb-3">
							<label className="form-label">Name</label>
							<input type="text" className="form-control" name="name" defaultValue={userValue.name} onChange={e => fieldValue(e)} />
						</div>
						<div className="mb-3">
							<label className="form-label">Email</label>
							<input type="email" className="form-control" name="email" defaultValue={userValue.email} onChange={e => fieldValue(e)} />
						</div>
						<div className="mb-3 mt-3">
							<label className="form-label">Password:</label>
							<input type="password" className="form-control" placeholder="Enter password" name="password" defaultValue={userValue.password} onChange={e => fieldValue(e)}/>
						</div>
						<button className="btn btn-success col-5" onClick={backPage}>Back To Home</button>
						<button type="submit" className="btn btn-primary col-5 float-end" onClick={e => onSubmit(e)}>Edit user</button>				
					</form>
				</div>
			</div>
		</>
	)
};

export default Edit;
