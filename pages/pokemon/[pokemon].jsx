import React from "react";
import Head from "next/head";
import styles from "./Pokemon.module.css";

const pokemon = ({pokemon}) => (
    <>
        <Head>
            <title>Pokemon: {pokemon?.name}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className={styles.container}>
            <h1>Welcome, {pokemon?.name}</h1>
            <img src={pokemon?.sprites.front_default} alt="" />
        </div>
    </>
);

export async function getStaticPaths() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const pokemon = await res.json();
    let paths = pokemon.results.map((p) => {
        return `/pokemon/${p.name}`;
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
    const pokemon = await res.json();
    return {props: {pokemon}};
}

export default pokemon;
