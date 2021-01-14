import Link from "next/link";
import styleCard from "./card.module.scss";

const Card = ({product, index}) => {
    return (
        <Link href={`product/${index}`}>
            <a className={styleCard.card}>
                <img src={product.imgUrl} alt="" className="product__image" />
                <p>{product.name}</p>
                <span>${product.price}</span>
            </a>
        </Link>
    );
};

export default Card;
