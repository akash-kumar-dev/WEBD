import "./Product.css"

function Product({ title, price = 1, features, features2 }) {
    return (
        <div className="Product">
            <h2>{title}</h2>
            <p>{features.a}</p>
            <h4>Price : {price}</h4>
        </div>
    );
}

export default Product