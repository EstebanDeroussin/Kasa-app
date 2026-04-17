import { useNavigate } from "react-router-dom";
import ANNONCES from "../../data/annonces";
import ListingCard from "../../components/ListingCard/ListingCard";
import styles from "./Home.module.scss";

const Home = () => {
    const navigate = useNavigate();

    return (
        <main className={styles.main}>
            <section className={styles.grid}>
                {ANNONCES.map((annonce) => (
                    <ListingCard
                        key={annonce.id}
                        cover={annonce.cover}
                        title={annonce.title}
                        onClick={() => navigate(`/location/${annonce.id}`)}
                    />
                ))}
            </section>
        </main>
    );
};

export default Home;
