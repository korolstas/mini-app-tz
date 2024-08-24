import { Drawer } from "antd";

import { useRequestBody } from "../../../contexts";
import styles from "./styles.module.scss";

export const HoroscopeDrawer = () => {
  const { dataDrawer, closeDrawer } = useRequestBody();

  return (
    <Drawer
      title={dataDrawer?.sign}
      placement={"bottom"}
      onClose={closeDrawer}
      open={!!dataDrawer}
    >
      <p className={styles.drawer}>{dataDrawer?.horoscope}</p>
    </Drawer>
  );
};
