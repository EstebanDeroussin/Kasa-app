import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.scss";

type ImageSliderProps = {
    images: string[];
    altBase: string;
};

const ImageSlider = ({ images, altBase }: ImageSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = images.length;

    useEffect(() => {
        setCurrentIndex(0);
    }, [images]);

    if (total === 0) {
        return null;
    }

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    };

    return (
        <section className={styles.root}>
            {images.map((src, index) => (
                <img
                    key={`${src}-${index}`}
                    src={src}
                    alt={`${altBase} — photo ${index + 1}`}
                    className={`${styles.image} ${
                        index === currentIndex ? styles.imageActive : ""
                    }`}
                />
            ))}
            {total > 1 && (
                <>
                    <button
                        type="button"
                        className={`${styles.navBtn} ${styles.navBtnPrev}`}
                        onClick={goToPrevious}
                        aria-label="Image précédente"
                    >
                        ❮
                    </button>
                    <button
                        type="button"
                        className={`${styles.navBtn} ${styles.navBtnNext}`}
                        onClick={goToNext}
                        aria-label="Image suivante"
                    >
                        ❯
                    </button>
                    <span className={styles.counter}>
                        {currentIndex + 1}/{total}
                    </span>
                </>
            )}
        </section>
    );
};

export default ImageSlider;
