import React from "react";
import Head from "next/head";
import Link from "next/link";

const Blog = () => (
    <>
        <Head>
            <title>My Blog!</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div>Wellcome, blog reader!</div>
        <Link href="/">
            <a> Go back home</a>
        </Link>
    </>
);

export default Blog;
