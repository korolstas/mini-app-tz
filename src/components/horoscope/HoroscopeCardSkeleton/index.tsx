import { Skeleton } from "antd";

import styles from "./styles.module.scss";

export const HoroscopeCardSkeleton = () => (
  <Skeleton.Button active={true} className={styles.skeleton} />
);
