import React, {useState, useEffect} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import APIService from '../../APIService';
import { useCookies } from 'react-cookie';

export const LeftRegister = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookie] = useCookies(['etoken'])
    const [userCategories, setUserCategories] = useState([])
    const [groups, setGroups] = useState([])
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState([]);
    let history = useHistory();
    
    useEffect(() => {
        if(cookies['etoken']){
            history.push('/dashboard');
        }
    },[cookies])

    useEffect(() => {        
        try{
            APIService.GetUserCategory()
            .then(res => {
                console.log(res);
                setUserCategories(res);
            })
        }
        catch(err){
            console.log(err)
        };
    },[])

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({username, email, password, groups});
        APIService.SignupUser({username, email, password, groups})
        .then(res=> {
            console.log(res); 
            // setCookie('etoken', res.token)
            if (res.errors){
                setErrors(res.errors);
                setSuccess([]);
            }
            else{
                setErrors([]);
                setSuccess({"msg": "Successfully account Created."});
            }
        })
        .catch(err=> console.log(err));
    }


    return ( 
        <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">

                <div className="cart-title">
                    <h2>Register</h2>
                </div>

                <form action="#" method="post">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <input type="text" className="form-control" id="username"  onChange={(e)=>{setUsername(e.target.value)}} value={username} placeholder="Username" required/>
                        </div>
                        <div className="col-md-12 mb-3">
                            <input type="text" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email address" required/>
                        </div>
                        <div className="col-md-12 mb-3">
                            <input type="password" className="form-control" id="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Password" required/>
                        </div>
                        <div className="col-12 mb-3">
                            <select className="form-control selectpicker " data-style="btn-success" id="groups" onChange={(e)=> { console.log(e.target.value); setGroups([e.target.value])}} value={groups}>
                                <option value="0" selected>Select Ctegory</option>
                                {userCategories && userCategories.map((pc, i)=>(
                                    <option value={pc.id}>{pc.name}</option>
                                ))}
                            </select>
                        </div>
                        {errors && <div className="col-12 mb-3">
                            {
                                Object.keys(errors).map(key => 
                                    (<p className="alert alert-danger" role="alert" value={key}>{key+': '+errors[key]}</p>)
                                )
                            }
                        </div>
                        }
                        {success && <div className="col-12 mb-3">
                            {
                                Object.keys(success).map(key => 
                                    (<p className="alert alert-success" role="alert" value={key}>{success[key]}</p>)
                                )
                            }
                        </div>
                        }

                        <div className="col-md-4 mt-10">
                            <button className="btn amado-btn w-100" onClick={onSubmit}>Register</button>
                            <div className="mt-10">
                            if you already have account, <NavLink to={"/login"}>Login</NavLink> here
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div> );
}