import React, {useState, useEffect, useRef} from 'react';
import APIService from '../../../APIService';
import {useCookies} from 'react-cookie';

export const LeftProductAdd = ({product, pid}) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [remainQuantity, setRemainQuantity] = useState(0);
    const [description, setDescription] = useState('');
    const [productCategories, setProductCategories] = useState([]);
    const [productData, setProductData] = useState(null);
    const [productCategorie, setProductCategorie] = useState(0);
    const [productCategorieObj, setProductCategorieObj] = useState([]);
    const [addNewCategory, setAddNewCategory] = useState(false);
    const [newcat, setNewcat] = useState('');
    const [hoverImage, setHoverImage] = useState(null);
    const [productImage, setProductImage] = useState(null);
    const [errors, setErrors] = useState({});
    const [cookies, setCookie] = useCookies(['etoken']);

    const fileInput = useRef(null)
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(()=>{
        if (product && Object.keys(product).length) {
            const {title, price, remainQuantity, description} = product;
            setTitle(title);
            setPrice(price);
            setRemainQuantity(remainQuantity);
            setDescription(description);
        } else {
            APIService.GetProduct(pid)
            .then(data => {
                console.log(data);
                setTitle(data.title);
                setPrice(data.price);
                setRemainQuantity(data.remainQuantity);
                setDescription(data.description);
                setProductCategorie(data.productCategorie);
                setProductData(data);                
            })
            .catch(err => console.log(err))
            
        }
        
        try{
            APIService.GetAllCategory(cookies['etoken'])
            .then(res => {
                console.log(res);
                setProductCategories(res);
            })
        }
        catch(err){
            console.log(err)
        };
    },[])


    const onSubmit = (e) => {
        e.preventDefault();
        const formData =new FormData();
        formData.append("title", title);
        formData.append("price", price);
        formData.append("remainQuantity", remainQuantity);
        formData.append("description", description);
        formData.append("productCategorie", productCategorie);
        if(hoverImage){
            formData.append("hoverImage", hoverImage);
        }
        if(productImage){
            productImage.forEach(item => {
            formData.append('productImage',item,item.name )
           });
        } 
        // formData.append("productImage", productImage);
        // formData.append("productImage3", productImage);
        console.log({title, price, remainQuantity, description, productCategorie, hoverImage, productImage})
        console.log(formData);
        if(pid){
            if (title == productData.title) {
                console.log('same title')  
                formData.delete("title")              
                console.log(productData)                
            }
            if (price == productData.price) {
                console.log('same price')  
                formData.delete("price")             
            }
            if (remainQuantity == productData.remainQuantity) {
                console.log('same remainQuantity')  
                formData.delete("remainQuantity")             
            }
            if (description == productData.description) {
                console.log('same description')  
                formData.delete("description")             
            }
            if (productCategorie == productData.productCategorie) {
                console.log('same productCategorie')  
                formData.delete("productCategorie")             
            }
            console.log('have pid ',pid)
            APIService.PatchProduct(pid, formData, cookies['etoken'])
            .then(res=> { console.log('res',res); setErrors(res);})
            .catch(err=> console.log(err));
            }
        else{
            APIService.AddProduct(formData, cookies['etoken'])
            .then(res=> { console.log('res',res); setErrors(res);})
            .catch(err=> console.log(err));
        }
    }

    return ( 
        <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">

                <div className="cart-title">
                    <h2>Add New Product</h2>
                </div>

                <form action="#" method="post">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <input type="text" className="form-control" id="title" value={product && title} onChange={(e)=>setTitle(e.target.value)} placeholder="Product Title" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="number" className="form-control" id="price" value={product && price} onChange={(e)=>setPrice(e.target.value)} placeholder="Product Price" required/>
                        </div>
                        <div className="col-12 mb-3">
                            <input type="number" className="form-control" id="remainQuantity" placeholder="Total Products" onChange={(e)=>setRemainQuantity(e.target.value)} value={product && remainQuantity}/>
                        </div>
                        <div className="col-12 mb-3">                            
                            <textarea name="description" className="form-control w-100" id="description" cols="30" rows="10" placeholder="Details describe about your order" value={product && description} onChange={(e)=>setDescription(e.target.value)} />
                        </div>
                        {!addNewCategory && <div className="col-12 mb-3">
                            <select className="w-100" id="productCategorie" onChange={(e)=> { console.log(e.target.value); setProductCategorieObj(productCategories.filter((pc)=>pc.id == e.target.value));setProductCategorie(e.target.value)}} value={productCategorie}>
                                    <option value="-1">Select Categorie</option>
                                {productCategories && productCategories.map((pc, i)=>(
                                    <option value={pc.id}>{pc.category}</option>
                                ))}
                            </select>
                        </div>}
                        <div className="col-2 mb-3">
                            <button className="btn amado-btn w-100" style={{minWidth: '18px', width: '95px !important',fontSize: '35px'}} onClick={(e)=> {e.preventDefault(); !addNewCategory ? setAddNewCategory(true) : setAddNewCategory(false)}}>{addNewCategory ? "-":"+"}</button>
                        </div>
                        <div className="col-10 mb-3">
                            {addNewCategory && <input type="text" style={{padding: '10px 30px'}} className="form-control" id="title" value={newcat} onChange={(e)=>setNewcat(e.target.value)} placeholder="New category" />}
                        </div>
                        <div className="col-10 mb-3">
                            <input type="file" accept="image/png, image/jpeg" className="form-control" onChange={(e) => setHoverImage(e.target.files[0])}/>
                        </div>
                        <div className="col-10 mb-3">
                            <input type="file" accept="image/*" multiple className="form-control" onChange={(e) => {let fileCollection = [];while (fileCollection.length) { fileCollection.pop(); } console.log(e.target.files); Array.from(e.target.files).map(f => {console.log(f); fileCollection.push(f);});setProductImage(fileCollection)}}/>
                        </div>
                        <div className="col-12 mb-3">
                            <button className="btn amado-btn w-100" onClick={onSubmit}>{pid? "Update":"Add"} product</button>
                        </div>
                        {errors && <div className="col-12 mb-3">
                            {
                                Object.keys(errors).map(key => 
                                    (<p className="alert alert-danger" role="alert" value={key}>{key+': '+errors[key]}</p>)
                                )
                            }
                        </div>
                        }
                        

                    </div>
                </form>
            </div>
        </div> );
}