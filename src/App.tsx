import { I18nextProvider } from "react-i18next";
import { Suspense } from "react";

import { HoroscopeArea, Header } from "./components";
import styles from "./styles/styles.module.scss";
import i18n, { useInitI18n } from "./i18n";

function App() {
  return (
    <div className={styles.page}>
      <Header />

      <HoroscopeArea />

      <footer className={styles.footer}>created by Stanislav Korol</footer>
    </div>
  );
}

export default function WrappedApp() {
  useInitI18n();

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense>
        <App />
      </Suspense>
    </I18nextProvider>
  );
}
