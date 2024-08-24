import { Card } from "antd";
import { FC } from "react";

import { useRequestBody } from "../../../contexts";
import styles from "./styles.module.scss";

interface HoroscopeCardProps {
  sign: string;
  dateRange: string;
  horoscope: string;
  image: string;
}

export const HoroscopeCard: FC<HoroscopeCardProps> = ({
  dateRange,
  horoscope,
  image,
  sign,
}) => {
  const { openDrawer } = useRequestBody();

  const handleClick = () => {
    openDrawer({ sign, horoscope });
  };

  return (
    <Card
      onClick={handleClick}
      className={styles.card}
      cover={
        <div className={styles.card_cover}>
          <img className={styles.card_cover_img} src={image} alt={sign} />
        </div>
      }
      size={"small"}
      hoverable
    >
      <Card.Meta
        description={
          <div className={styles.card_meta}>
            <h2 className={styles.card_meta_sign}>{sign}</h2>
            <p className={styles.card_meta_date}>{dateRange}</p>
          </div>
        }
      />
    </Card>
  );
};
