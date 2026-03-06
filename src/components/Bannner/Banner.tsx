import styles from "./Banner.module.scss";

interface BannerProps {
    img: string;
}

const Banner = ({ img }: BannerProps) => {
    return (
        <div className={styles.bannerMain}>
            <img src={img} className={styles.img} alt="" />
            <div className={styles.bannerOverlay} />
        </div>
    );
};

export default Banner;
