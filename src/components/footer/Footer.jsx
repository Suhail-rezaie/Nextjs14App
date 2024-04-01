import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SUHAIL</div>
      <div className={styles.text}>
        suhail © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
