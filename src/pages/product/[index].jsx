import React from "react";
import {withRouter} from "next/router";
import Layout from "../../components/Layout/Layout";
import {request} from "../../utils/datocms";

const Pdp = ({product}) => {
    console.log("text");
    console.log(product);
    return (
        <Layout>
            <div className="product">
                <h2 className="product__title">{product.title}</h2>
                <img src={product.urlImg} alt="" className="product__image" />
                <p>{product.description}</p>
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
const HOMEPAGE_QUERY = `query{
    allProducts {
      slug
      title
      urlImg
      price
      description
    }
  }`;

export async function getStaticPaths() {
    const data = await request({
        query: HOMEPAGE_QUERY,
        /*variables: {limit: 10},*/
    });

    let paths = data.allProducts.map((p) => {
        return `/product/${p.slug}`;
    });
    return {
        paths,
        fallback: false,
    };
}

const PRODUCT_QUERY = `query ($slug: String){
    product(filter: { idProduct: { eq: $slug } }) {
      slug
      title
      urlImg
      price
      description
      idProduct
    }
  }`;

export async function getStaticProps({index}) {
    const data = await request({
        query: PRODUCT_QUERY,
        variables: {slug: index},
    });
    return {
        props: {product: data.product},
    };
}

export default withRouter(Pdp);
