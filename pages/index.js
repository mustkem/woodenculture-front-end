import styles from "../styles/Home.module.css";

import HomeComponent from "../Components/Home";
// import { wrapper as storeWrapper } from "../store/store";

function Home() {
  return (
    <div className={styles.container}>
      <HomeComponent />
    </div>
  );
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  return { props: {} };
}

export default Home;
