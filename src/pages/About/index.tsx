import Banner from "../../components/Bannner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import styles from "./about.module.scss";
import { REASSURANCEDATA } from "../../data/reassuranceData";

const About = () => {
    return (
        <div className={styles.main}>
            <div className={styles.bannerContainer}>
                <Banner img="/public/images/Banner/Banner.png" />
                <div className={styles.bannerOverlay}></div>
            </div>
            <div className={styles.reassuranceContainer}>
                {REASSURANCEDATA.map((item, i) => (
                    <Collapse key={i} variant="about" title={item.title}>
                        <p>{item.description}</p>
                    </Collapse>
                ))}
            </div>
        </div>
    );
};

export default About;
