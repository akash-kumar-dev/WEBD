import Product from "./Product.jsx";

function ProductTab() {
    // let options = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];     // pre-rapping Mathod
    let options = ["hi-tech", "durable", "fast"];
    return (
        <>
            <Product
                title="phone"
                price={30000}
                features={options}
            />
            {/* <Product title="Laptop" price={50000} />
            <Product title="pen" /> */}
        </>
    );
}

export default ProductTab;