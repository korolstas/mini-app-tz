import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { HoroscopeCardSkeleton } from "../HoroscopeCardSkeleton";
import { configSigns } from "../../../constants/config";
import { useRequestBody } from "../../../contexts";
import { HoroscopeCard } from "../HoroscopeCard";
import {
  IHoroscopeRequest,
  IHoroscopeData,
  TSignHoroscope,
  SignsEnum,
} from "../../../types";
import styles from "./styles.module.scss";
import { endPoints } from "../../../axios";
import { HoroscopeDrawer } from "../HoroscopeDrawer";

export const HoroscopeArea = () => {
  const { body, loading, setLoading } = useRequestBody();
  const [data, setData] = useState<IHoroscopeData | undefined>();
  const prevBodyRef = useRef<IHoroscopeRequest | null>(null);
  const { t } = useTranslation();

  const getHoroscope = async (
    body: IHoroscopeRequest
  ): Promise<IHoroscopeData | undefined> => {
    setLoading(true);
    try {
      const response = await endPoints.postHoroscope(body);
      setLoading(false);
      return response.data;
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (prevBodyRef.current !== body) {
      prevBodyRef.current = body;
      const fetchData = async () => {
        const horoscopeData = await getHoroscope(body);
        setData(horoscopeData);
      };
      fetchData();
    }
  }, [body]);

  const skeletonArray = Array.from({ length: 12 }, (_, index) => index + 1);

  const signsArray = Object.values(SignsEnum);

  return (
    <>
      <HoroscopeDrawer />

      <div className={styles.area}>
        {loading
          ? skeletonArray.map((i) => <HoroscopeCardSkeleton key={i} />)
          : signsArray
              .filter((sign) => {
                if (!body.sign) return sign;
                if (body.sign === sign.toLocaleLowerCase()) return sign;
              })
              .map((sign, index) => {
                const i =
                  configSigns[
                    sign.toLocaleLowerCase() as keyof typeof configSigns
                  ];

                const horoscope =
                  typeof data?.horoscope === "string"
                    ? data.horoscope
                    : (data?.horoscope as TSignHoroscope)[
                        sign.toLocaleLowerCase() as keyof TSignHoroscope
                      ];

                return (
                  <HoroscopeCard
                    key={index + sign}
                    horoscope={horoscope}
                    dateRange={t(`signs.${sign.toLocaleLowerCase()}.date`)}
                    image={i.image}
                    sign={t(`signs.${sign.toLocaleLowerCase()}.name`)}
                  />
                );
              })}
      </div>
    </>
  );
};
