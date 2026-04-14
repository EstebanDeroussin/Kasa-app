import RatingStars from "../RatingStars/RatingStars";
import styles from "./AnnonceHeader.module.scss";
import type { Host } from "../../data/annonces";

type AnnonceHeaderProps = {
    title: string;
    location: string;
    tags: string[];
    host: Host;
    rating: string;
};

const AnnonceHeader = ({
    title,
    location,
    tags,
    host,
    rating,
}: AnnonceHeaderProps) => {
    return (
        <section className={styles.root}>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.location}>{location}</p>
                <div className={styles.tags}>
                    {tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className={styles.hostAndRating}>
                <div className={styles.host}>
                    <p className={styles.hostName}>{host.name}</p>
                    <img
                        src={host.picture}
                        alt={host.name}
                        className={styles.hostPicture}
                    />
                </div>
                <RatingStars rating={rating} />
            </div>
        </section>
    );
};

export default AnnonceHeader;
