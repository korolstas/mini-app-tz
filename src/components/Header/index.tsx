import { ChangeEvent, useState } from "react";
import { ItemType } from "antd/es/menu/interface";
import { useTranslation } from "react-i18next";
import { Divider, Input } from "antd";

import { LanguageSelector } from "../LanguageSelector";
import { useRequestBody } from "../../contexts";
import { useDebounce } from "../../hooks";
import styles from "./styles.module.scss";

const options: ItemType[] = [
  {
    key: "en",
    label: <div className="">en</div>,
  },
  {
    key: "ru",
    label: <div className="">ru</div>,
  },
];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { setLanguage, setSign } = useRequestBody();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearch = useDebounce((sign?: string) => setSign(sign), 500);

  const onChangeLanguage = (language: string) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  const onSearchHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
    debouncedSearch(target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Input
          value={searchValue}
          placeholder={t("search")}
          onChange={onSearchHandler}
        />

        <LanguageSelector
          options={options}
          onChangeLanguage={onChangeLanguage}
        />
      </div>

      <Divider style={{ margin: 0 }} />
    </header>
  );
};
