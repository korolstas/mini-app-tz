import { FC, useEffect } from "react";
import { Drawer } from "antd";

import styles from "./styles.module.scss";

interface HoroscopeDrawerProps {
  open: boolean;
  title: string;
  horoscope: string;
  onClose: () => void;
  onSwipeRight: () => void;
}

export const HoroscopeDrawer: FC<HoroscopeDrawerProps> = ({
  open,
  title,
  horoscope,
  onClose,
  onSwipeRight,
}) => {
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const startX = touch.clientX;

      const handleTouchEnd = (e: TouchEvent) => {
        const touchEnd = e.changedTouches[0];
        if (startX < touchEnd.clientX - 50) {
          onSwipeRight();
        }
      };

      window.addEventListener("touchend", handleTouchEnd, { once: true });
    };

    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [onSwipeRight]);

  return (
    <Drawer title={title} placement={"bottom"} onClose={onClose} open={open}>
      <p className={styles.drawer}>{horoscope}</p>
    </Drawer>
  );
};
