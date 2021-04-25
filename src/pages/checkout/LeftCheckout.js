import React, {useState, useEffect, useRef} from 'react';
import APIService from '../../APIService';
import {useCookies} from 'react-cookie';

export const LeftCheckout = (props) => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [user, setUser] = useState('')
    const [cookies, setCookie] = useCookies(['etoken']);
    const [checkOutLocal, setCheckOutLocal] = useState(props.checkOut)
    useEffect(() => {    
        console.log(cookies) 
        if(cookies['etoken']){  
            APIService.GetUserDetails(cookies['user_id'], cookies['etoken'])
            .then(res=> {
                console.log(res)
                setUser(res)
            })
            .catch(err=> console.log(err));
        }


    }, []);
    const previousValueRef = useRef();
    const previousValue = previousValueRef.current;
    
    useEffect(() => {
      previousValueRef.current = props.checkOut;
    });
    
    const onChangeFirstname = (e) => {
        setFirstname(e.target.value);
    }
    const onChangeLirsFtname= (e) => {
        setLastname(e.target.value)
    }

    const onSubmit = () => {
        fetch('http://localhost:8000/orders/',{
            'method': 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization':`Token ${cookies['etoken']}` 
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)

            // setProducts(res)
            }
        )
        .catch(err => console.log(err));
    }
    if (props.checkOut !== previousValue && props.checkOut !== checkOutLocal) {
        setCheckOutLocal(props.checkOut);
        console.log('Clicked....')
        onSubmit()
    }
    return ( 
        <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">

                <div className="cart-title">
                    <h2>Checkout</h2>
                    <p>{console.log(checkOutLocal)}</p>
                </div>

                <form action="#" method="post">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <input type="text" className="form-control" id="first_name" value={firstname} placeholder="First Name" onChange={onChangeFirstname} required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="text" className="form-control" id="last_name" value={lastname} placeholder="Last Name" onChange={onChangeLirsFtname} required/>
                        </div>
                        <div className="col-12 mb-3">
                            <input type="text" className="form-control" id="company" placeholder="Company Name" value=""/>
                        </div>
                        <div className="col-12 mb-3">
                            <input type="email" className="form-control" id="email" placeholder="Email" value={user.email}/>
                        </div>
                        <div className="col-12 mb-3">
                            <select className="form-control" id="country">
                            <option value="usa">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ger">Germany</option>
                            <option value="fra">France</option>
                            <option value="ind">India</option>
                            <option value="aus">Australia</option>
                            <option value="bra">Brazil</option>
                            <option value="cana">Canada</option>
                        </select>
                        </div>
                        <div className="col-12 mb-3">
                            <input type="text" className="form-control mb-3" id="street_address" placeholder="Address" value=""/>
                        </div>
                        <div className="col-12 mb-3">
                            <input type="text" className="form-control" id="city" placeholder="Town" value=""/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="text" className="form-control" id="zipCode" placeholder="Zip Code" value=""/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="number" className="form-control" id="phone_number" min="0" placeholder="Phone No" value=""/>
                        </div>
                        <div className="col-12 mb-3">
                            <textarea name="comment" className="form-control w-100" id="comment" cols="30" rows="10" placeholder="Leave a comment about your order"></textarea>
                        </div>

                        <div className="col-12">
                            <div className="custom-control custom-checkbox d-block mb-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                <label className="custom-control-label" for="customCheck2">Create an accout</label>
                            </div>
                            <div className="custom-control custom-checkbox d-block">
                                <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                <label className="custom-control-label" for="customCheck3">Ship to a different address</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div> );
}