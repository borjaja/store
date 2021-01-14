import Link from "next/link";
import styleCard from "./card.module.scss";

const Card = ({ product, index }) => {
    return (
        <Link href={`product/${product.slug}`}>
            <a className={styleCard.card}>
                <img src={product.imgurl} alt="" className="product__image" />
                <p>{product.title}</p>
                <span>${product.price}</span>
            </a>
        </Link>
    );
};

export default Card;
