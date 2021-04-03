import Head from "next/head";
import styles from "../styles/Home.module.css";

import HomeComponent from "../Components/Home";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeComponent />
    </div>
  );
}
