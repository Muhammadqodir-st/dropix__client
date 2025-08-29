import { useParams } from "react-router-dom"
import posts from "../data/data"

export default function Product() {
    const {id} = useParams()

    const [product] = posts.filter(i => i.id === id);
    
        
    return (
        <div>
            <p>id {product.Image}</p>
            <img src={product.Image} alt="" />
        </div>
    )
};