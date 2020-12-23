import React from 'react';
import { Link } from 'react-router-dom';
import { validate } from '../helpers/form-validate';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin } from '../redux/actions/auth';
import Swal from 'sweetalert2';

export const AdminLogin = ({history}) => {

    const dispatch = useDispatch();
    
    const initialState = {
        email:'juliocesarflores12@gmail.com',
        password:'123123',
    }

    const [ values, handleInputChange] = useForm(initialState);

    const { email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validResponse = validate(email, password);
        
        validResponse.email && validResponse.password
        ?dispatch( resp = startLogin(email, password, history))
        :Swal.fire('Error','Please, verify the information')
    }

    return (
        <div className="container-form">
           <form className="container-form__login" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group form-check text-center">
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        <Link to="/register">Create Acount</Link>
                    </label>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-block btn-primary"
                    onSubmit={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
