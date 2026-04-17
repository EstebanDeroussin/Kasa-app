import styles from "./EquipmentsList.module.scss";

type EquipmentsListProps = {
    items: string[];
};

const EquipmentsList = ({ items }: EquipmentsListProps) => {
    return (
        <ul className={styles.list}>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

export default EquipmentsList;
