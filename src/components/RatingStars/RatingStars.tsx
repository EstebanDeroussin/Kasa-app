import styles from "./RatingStars.module.scss";

type RatingStarsProps = {
    rating: number | string;
    maxStars?: number;
};

const RatingStars = ({ rating, maxStars = 5 }: RatingStarsProps) => {
    const value = Math.min(maxStars, Math.max(0, Number(rating)));
    const stars = Array.from({ length: maxStars }, (_, index) => index < value);

    return (
        <div className={styles.root}>
            {stars.map((filled, index) => (
                <span
                    key={index}
                    className={filled ? styles.starFilled : styles.starEmpty}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default RatingStars;
