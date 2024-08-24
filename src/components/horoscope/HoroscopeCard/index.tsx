import { FC, useState } from "react";
import { Card } from "antd";

import { HoroscopeDrawer } from "../HoroscopeDrawer";
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
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <HoroscopeDrawer
        horoscope={horoscope}
        title={sign}
        onClose={handleClick}
        onSwipeRight={handleClick}
        open={isOpen}
      />

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
    </>
  );
};
