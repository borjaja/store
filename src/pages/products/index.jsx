import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import styles from "./products.module.scss";

const Plp = ({products}) => {
    return (
        <Layout>
            <div className={styles.product_list}>
                {products.map((product, index) => (
                    <Card product={product} key={index} index={index} />
                ))}
            </div>
        </Layout>
    );
};

export async function getStaticProps(context) {
    const res = await fetch("https://my-json-server.typicode.com/jubs16/Products/Products");
    const products = await res.json();

    return {props: {products}};
}

export default Plp;
