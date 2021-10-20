import Header from '../components/header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <h1 className={styles['title-homepage']}>Welcome Fahmi</h1>
      <Footer />
    </>
  );
}
