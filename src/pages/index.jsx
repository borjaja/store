import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";

const Home = () => {
    const router = useRouter();
    const handleClick = (e) => {
        router.push("/pokemon/pikachu");
    };
    return (
        <>
            <Head>
                <title>My Next.js site!</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div>Wellcome, explorer!</div>
            <button onClick={handleClick}> Click me!</button>
        </>
    );
};

export default Home;
