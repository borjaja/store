import React from "react";
import {withRouter} from "next/router";
import Layout from "../../components/Layout/Layout";
const Pdp = ({product}) => {
    return (
        <Layout>
            <div className="product">
                <h2 className="product__title">{product.name}</h2>
                <img src={product.imgUrl} alt="" className="product__image" />
                <div className="product__price-button-container">
                    <div className="product__price">${product.price}</div>
                    <button className="snipcart-add-item product__button" data-item-id={product.id} data-item-name={product.title} data-item-price={product.price} data-item-url="/" data-item-image={product.image}>
                        Add to cart
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const res = await fetch("https://my-json-server.typicode.com/jubs16/Products/Products");
    const products = await res.json();

    let paths = products.map((p, index) => {
        return `/product/${index}`;
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const res = await fetch("https://my-json-server.typicode.com/jubs16/Products/Products");
    const products = await res.json();
    const product = products[params.index];
    product.id = params.index;
    return {props: {product}};
}

export default withRouter(Pdp);
