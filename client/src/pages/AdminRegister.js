import React from 'react';
import { Link } from 'react-router-dom';
import { validate } from '../helpers/form-validate';
import { useForm } from '../hooks/useForm';

export const AdminRegister = () => {

    const initialState = {
        name: '',
        email:'',
        password:'',
        password2: '',
    }

    const [ values, handleInputChange] = useForm(initialState);

    const {name, email, password, password2 } = values;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(e.target[4].checked === true){
            if(password === password2){
                if(name.length > 5){
                    const validResponse = validate(email, password);
    
                    validResponse.email && validResponse.password
                    ?console.log('Saved')
                    :console.log('The email or password are wrong');
                } else { console.log('The name is very short') }
            }else {console.log('The password have be equals')  }
        }else{ console.log('You have accept ours Privacy Statementt')  }
    }

    return (
        <div className="container-form">
           <form className="container-form__login" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        placeholder="Email" 
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
                        placeholder="Password" 
                        className="form-control" 
                        id="exampleInputPassword1"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                        type="password" 
                        placeholder="Repeat password" 
                        className="form-control" 
                        id="exampleInputPassword1"
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">I accept the <Link to="/admin">Privacy Statementt</Link></label>
                </div>
                <div className="form-group form-check text-center">
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        <Link to="/admin">I have acount?</Link>
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