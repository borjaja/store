import Layout from "../components/Layout/Layout";
import {request} from "../utils/datocms";

const Index = ({data}) => {
    console.log(data);
    return (
        <Layout>
            <div>{data.home.text}</div>
        </Layout>
    );
};
export default Index;

const HOMEPAGE_QUERY = `query {
    home {
      text
    }
  }`;

export async function getStaticProps() {
    const data = await request({
        query: HOMEPAGE_QUERY,
        /*variables: {limit: 10},*/
    });
    return {
        props: {data},
    };
}
