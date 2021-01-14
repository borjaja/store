import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import styles from "./products.module.scss";
import { request } from "../../utils/datocms";

const Plp = ({ data }) => {
    return (
        <Layout>
            <div className={styles.product_list}>
                {data.allProducts.map((product, index) => (
                    <Card product={product} key={index} />
                ))}
            </div>
        </Layout>
    );
};

const HOMEPAGE_QUERY = `query{
    allProducts {
      slug
      title
      imgurl
      price
    }
  }`;

export async function getStaticProps() {
    const data = await request({
        query: HOMEPAGE_QUERY,
        /*variables: {limit: 10},*/
    });
    return {
        props: { data },
    };
}

export default Plp;
