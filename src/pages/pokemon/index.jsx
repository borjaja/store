import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./pokemon.module.css";

const pokemon = ({pokemon}) => (
    <>
        <Head>
            <title>Pokemons</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        {pokemon.map((pokemon, index) => (
            <div className={styles.container} key={index}>
                <Link href={`/pokemon/${pokemon?.name}`}>
                    <a>{pokemon?.name}</a>
                </Link>
            </div>
        ))}
    </>
);

export async function getStaticProps({params}) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
    const pokemon = await res.json();
    return {props: {pokemon: pokemon.results}};
}

export default pokemon;
