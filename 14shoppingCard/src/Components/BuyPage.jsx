import { useState, useEffect } from "react";
import axios, { Axios } from 'axios';
import {Container, Col, Row} from "reactstrap"

const url = "https://ecommbackend-production.up.railway.app/api/v1/products"

const BuyPage = ({addInCart}) =>{

    const [product, setProduct] = useState([]);

    const fetchInfos  =  async ()=>{

        const { data } = await axios.get(url);
        const photo =  data.productsObj[0].photos[0].secure_url;
        const name  = data.productsObj[0].name;
        const price  = data.productsObj[0].price;
        const description  = data.productsObj[0].description;
        setProduct([photo,name,price,description]);
    }



   

    useEffect(()=>{
        fetchInfos();
    },[])

    return(
        <>
            <h1>This is buy page</h1>
            {product}
            <img src={product} alt="" />
        </>
    )

}

export default BuyPage;
