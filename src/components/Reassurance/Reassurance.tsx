import { RiArrowUpSLine } from "react-icons/ri";
import { type ReassuranceItem } from "../../data/reassuranceData";
import styles from "./Reassurance.module.scss";
import { useState, useRef } from "react";
import clsx from "clsx";

const Reassurance = ({ item }: { item: ReassuranceItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        if (!isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.main}>
            <div className={styles.container} onClick={handleToggle}>
                <h2>{item.title}</h2>
                <RiArrowUpSLine
                    className={clsx(
                        styles.icon,
                        isOpen ? styles.iconOpen : styles.iconClosed,
                    )}
                />
            </div>
            <div
                className={styles.description}
                ref={contentRef}
                style={{ height: isOpen ? height : 0 }}
            >
                <p>{item.description}</p>
            </div>
        </div>
    );
};

export default Reassurance;
