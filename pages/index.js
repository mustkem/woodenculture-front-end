import styles from "../styles/Home.module.css";

import HomeComponent from "../Components/Home";
import { wrapper as storeWrapper } from "../store/store";

function Home() {
  return (
    <div className={styles.container}>
      <HomeComponent />
    </div>
  );
}

export const getStaticProps = storeWrapper.getStaticProps(async ({ store }) => {
  // await store.dispatch(homeActions.fetchSubCategories());
  const testData = () => {
    return store.getState();
  };
  return {
    props: testData(),
  };
});

export default Home;
