import styles from "./ListingCard.module.scss";

type ListingCardProps = {
    cover: string;
    title: string;
    onClick: () => void;
};

const ListingCard = ({ cover, title, onClick }: ListingCardProps) => {
    return (
        <article
            className={styles.card}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick();
                }
            }}
            role="button"
            tabIndex={0}
        >
            <img src={cover} alt={title} className={styles.image} />
            <div className={styles.overlay}>
                <h2 className={styles.title}>{title}</h2>
            </div>
        </article>
    );
};

export default ListingCard;
