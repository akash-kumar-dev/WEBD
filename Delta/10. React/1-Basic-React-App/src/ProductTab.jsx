import Product from "./Product.jsx";

function ProductTab() {
    let options = ["hitech", "durable", "fast"];    // Array
    // let options2 = { a: "hi-tech", b: "durable", c: "fast" };     //object
    return (
        <>
            <Product
                title="phone"
                price={30000}
                // features={options}
                // features={["hitech", "Array"]}   // passing Array
                features={{a:"hitech", b:"Object"}} //passing Object
            />
            <Product title="Laptop" price={50000} />
            <Product title="pen" />
        </>
    );
}

export default ProductTab;