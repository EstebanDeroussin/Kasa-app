import { Link } from "react-router-dom";
import style from "./error.module.scss";

const Error = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1 className={style.error}>404</h1>
                <p className={style.text}>
                    Oups! La page que vous demandez n&apos;existe pas.
                </p>
                <Link to="/" className={style.backLink}>
                    Retourner sur la page d&apos;accueil
                </Link>
            </div>
        </div>
    );
};

export default Error;
