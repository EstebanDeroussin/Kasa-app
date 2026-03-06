import Banner from "../../components/Bannner/Banner";
import styles from "./Home.module.scss";
import { REASSURANCEDATA } from "../../data/reassuranceData";
import Reassurance from "../../components/Reassurance/Reassurance";

const home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.bannerContainer}>
                <Banner img="/public/images/Banner/Banner.png" />
                <div className={styles.bannerOverlay}></div>
            </div>
            <div className={styles.reassuranceContainer}>
                {REASSURANCEDATA.map((item, i) => (
                    <Reassurance key={i} item={item} />
                ))}
            </div>
        </div>
    );
};

export default home;
