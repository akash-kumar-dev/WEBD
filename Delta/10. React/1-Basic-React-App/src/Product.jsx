import "./Product.css"

function Product({ title, price = 1, features }) {
    // const list = features.map((feature) => <li>{feature}</li>);
    return (
        <div className="Product">
            <h2>{title}</h2>
            {/* <p>{list}</p> */}
            <p>{features.map((feature) => <li>{feature}</li>)}</p>
            <h4>Price : {price}</h4>
            {price > 3000 ? <p>"Discount of 5%"</p> : null}
        </div>
    );
}

export default Product