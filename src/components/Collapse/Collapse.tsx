import { useState, type ReactNode } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import clsx from "clsx";
import styles from "./Collapse.module.scss";

type CollapseVariant = "default" | "about";

type CollapseProps = {
    title: string;
    defaultOpen?: boolean;
    children: ReactNode;
    /** Variante « about » : même rendu visuel que l’ancien bloc Reassurance (page À propos). */
    variant?: CollapseVariant;
};

const Collapse = ({
    title,
    defaultOpen = false,
    children,
    variant = "default",
}: CollapseProps) => {
    const [open, setOpen] = useState(defaultOpen);
    const isAbout = variant === "about";

    return (
        <div className={isAbout ? styles.rootAbout : styles.root}>
            <button
                type="button"
                className={isAbout ? styles.headerAbout : styles.header}
                onClick={() => setOpen((prev) => !prev)}
            >
                {isAbout ? (
                    <h2 className={styles.titleAbout}>{title}</h2>
                ) : (
                    title
                )}
                {isAbout ? (
                    <RiArrowUpSLine
                        className={clsx(
                            styles.iconAbout,
                            open ? styles.iconAboutOpen : styles.iconAboutClosed,
                        )}
                        aria-hidden
                    />
                ) : (
                    <span
                        className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`}
                    >
                        ❯
                    </span>
                )}
            </button>
            <div
                className={`${styles.body} ${open ? styles.bodyOpen : ""}`}
            >
                <div className={styles.inner}>
                    <div
                        className={clsx(
                            styles.content,
                            isAbout && styles.contentAbout,
                        )}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collapse;
