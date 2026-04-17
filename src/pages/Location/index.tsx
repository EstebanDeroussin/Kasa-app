import { useParams } from "react-router-dom";
import { getAnnonceById } from "../../data/annoncesQueries";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import AnnonceHeader from "../../components/AnnonceHeader/AnnonceHeader";
import Collapse from "../../components/Collapse/Collapse";
import EquipmentsList from "../../components/EquipmentsList/EquipmentsList";
import styles from "./location.module.scss";

const Location = () => {
    const { id } = useParams<{ id: string }>();
    const annonce = getAnnonceById(id);

    if (!annonce) {
        return (
            <main className={styles.main}>
                <p>Cette annonce n&apos;existe pas.</p>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <ImageSlider images={annonce.pictures} altBase={annonce.title} />

            <AnnonceHeader
                title={annonce.title}
                location={annonce.location}
                tags={annonce.tags}
                host={annonce.host}
                rating={annonce.rating}
            />

            <section className={styles.details}>
                <Collapse title="Description">
                    <p>{annonce.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    <EquipmentsList items={annonce.equipments} />
                </Collapse>
            </section>
        </main>
    );
};

export default Location;
