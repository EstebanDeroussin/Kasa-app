import { useState, type ReactNode } from "react";
import styles from "./Collapse.module.scss";

type CollapseProps = {
    title: string;
    defaultOpen?: boolean;
    children: ReactNode;
};

const Collapse = ({ title, defaultOpen = false, children }: CollapseProps) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className={styles.root}>
            <button
                type="button"
                className={styles.header}
                onClick={() => setOpen((prev) => !prev)}
            >
                {title}
                <span
                    className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`}
                >
                    ❯
                </span>
            </button>
            <div
                className={`${styles.body} ${open ? styles.bodyOpen : ""}`}
            >
                <div className={styles.inner}>
                    <div className={styles.content}>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Collapse;
