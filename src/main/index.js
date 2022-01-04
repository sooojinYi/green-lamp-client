import "./main.scss"
import axios from "axios"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
function MainPage(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get("https://9e587d9b-be38-4b2a-bd69-828204c227a1.mock.pstmn.io/products")
        .then(function(result){
            const products = result.data.products;
            console.log(products);
            setProducts(products);
        }).catch(function(error){
            console.lof(error);
        })
        },[])

    return(
        <div>
            <div id="main">
                <div id="visual">
                    <img src="images/banners/banner1.png" alt="최신조명"></img>
                </div>
                <div id="product" className="innerCon">
                    <h1>그린 조명 최신상품</h1>
                    <div id="product-list">
                        {
                            products.map(product => {
                                return(
                                    <div className="product-card" key={product.id}> 
                                        <Link to={`/product/${product.id}`}>
                                        <div>
                                            <img className="product-img"
                                            src={product.imageUrl} alt={product.name}></img>
                                        </div>
                                        <div className="product-contents">
                                            <span>{product.name}</span>
                                            <span>{product.price}</span>
                                            <div>
                                                <img className="product-avatar" src="images/icons/avatar.png" alt="아이콘"></img>
                                                <span>{product.seller}</span>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainPage;