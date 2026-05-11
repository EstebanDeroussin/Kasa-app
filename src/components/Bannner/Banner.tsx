import clsx from "clsx";
import styles from "./Banner.module.scss";

interface BannerProps {
    img: string;
    /** Texte centré sur la bannière (ex. page d’accueil). */
    title?: string;
}

const Banner = ({ img, title }: BannerProps) => {
    const hasTitle = Boolean(title);

    return (
        <div className={clsx(styles.bannerMain, hasTitle && styles.withTitle)}>
            <img
                src={img}
                className={styles.img}
                alt=""
                aria-hidden={hasTitle}
            />
            <div
                className={clsx(
                    styles.bannerOverlay,
                    hasTitle && styles.bannerOverlayStrong,
                )}
            />
            {title ? (
                <p className={styles.title}>{title}</p>
            ) : null}
        </div>
    );
};

export default Banner;
