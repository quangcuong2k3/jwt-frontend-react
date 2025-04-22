import './Register.scss'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    let history = useHistory();
    const handleLogin = () => {
        history.push("/login")
    }
    useEffect(() => {
        // axios.get("http://localhost:8080/api/test-api").then(data => {
        //     console.log(">>>checj data axios", data)
        // })
    }, []);
    const handleRegister = () => {
        let userData = { email, phone, username, password };

        console.log("check data:", userData)
    }
    return (
        <div className="register-container ">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className='brand'>
                            register
                        </div>
                        <div className='detail'>
                            Learning everthing..
                        </div>
                    </div>
                    <div className="content-right  col-sm-5 col-12 d-flex flex-column gap-3 py-3 ">
                        <div className='brand d-sm-none'>
                            FaceBook
                        </div>
                        <div className='form-group'>
                            <label>Email:</label>
                            <input type='text' className='form-control' placeholder='Email address '
                                value={email} onChange={(event) => setEmail(event.target.value)}

                            />
                        </div>
                        <div className='form-group'>
                            <label>Phone number:</label>
                            <input type='text' className='form-control' placeholder='Phone number '
                                value={phone} onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Username:</label>
                            <input type='text' className='form-control' placeholder='Username '
                                value={username} onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Password:</label>
                            <input type='password' className='form-control' placeholder='Password'
                                value={password} onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Confirm password:</label>
                            <input type='password' className='form-control' placeholder='Confirm password'
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>
                        <button className='btn btn-primary' onClick={() => handleRegister()}>Register</button>

                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={() => handleLogin()}>
                                Already have an account. Login

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Register;