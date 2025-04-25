import './Register.scss'
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { registerNewUser } from '../../services/userService';

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidConfirmPassword: true
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

    let history = useHistory();
    const handleLogin = () => {
        history.push("/login")
    }
    useEffect(() => {
        // axios.get("http://localhost:8080/api/v1/test-api").then(data => {
        //     console.log(">>>checj data axios", data)
        // })


    }, []);

    const isValidInputs = () => {
        setObjCheckInput(defaultValidInput);

        if (!email) {
            toast.error("Email is required");
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            return false;
        }
        let regx = /\S+@\S+\.\S+/;
        if (!regx.test(email)) {
            setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
            toast.error("Please enter a valid email address");
            return false;
        }
        if (!phone) {
            toast.error("phone is required");
            setObjCheckInput({ ...defaultValidInput, isValidPhone: false });
            return false;
        }
        if (!password) {
            toast.error("password is required");
            setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
            return false;
        }
        if (password != confirmPassword) {
            setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });
            toast.error("password is not the same");
            return false;
        }


        return true;
    }


    const handleRegister = async () => {
        let check = isValidInputs();
        if (check === true) {
            let respone = await registerNewUser(email, phone, username, password);
            let serverData = respone.data
            if (+serverData.EC === 0) {
                toast.success(serverData.EM)
                history.push("/login")
            } else {
                toast.error(serverData.EM)
            }
        }

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
                            <input type='text' className={objCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'} placeholder='Email address '
                                value={email} onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label>Phone number:</label>
                            <input type='text' className={objCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'} placeholder='Phone number '
                                value={phone} onChange={(event) => setPhone(event.target.value)}
                                required
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
                            <input type='password' className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'} placeholder='Password'
                                value={password} onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Confirm password:</label>
                            <input type='password' className={objCheckInput.isValidConfirmPassword ? 'form-control' : 'form-control is-invalid'} placeholder='Confirm password'
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