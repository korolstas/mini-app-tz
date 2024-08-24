import { GlobalOutlined } from "@ant-design/icons";
import { ItemType } from "antd/es/menu/interface";
import React, { useState } from "react";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";

import { useRequestBody } from "../../contexts";

type LanguageSelectorProps = {
  options: ItemType[];
  onChangeLanguage: (language: string) => void;
};

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  options,
  onChangeLanguage,
}) => {
  const { language } = useRequestBody();
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const handleLanguageChange: MenuProps["onClick"] = ({ key }) => {
    setSelectedLanguage(key as string);
    onChangeLanguage(key as string);
  };

  return (
    <Dropdown
      menu={{
        items: options,
        onClick: handleLanguageChange,
      }}
      placement="bottomRight"
      arrow
    >
      <Button size="middle" type="primary" icon={<GlobalOutlined />}>
        <div style={{ width: 16 }}>{selectedLanguage}</div>
      </Button>
    </Dropdown>
  );
};
