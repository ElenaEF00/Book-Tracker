import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          <li>
            <Link className={styles.links} to={"/"}>
              Homepage
            </Link>
          </li>
          <li>
            <Link className={styles.links} to={"/Copyright"}>
              Copyright
            </Link>
          </li>
        </ul>
        <div className={styles.logo}>
          <img src="https://img.logoipsum.com/330.svg" alt="logo" />
        </div>
        <ul className={styles.icons}>
          <li>
            <img
              className={styles.images}
              src="https://img.icons8.com/ios/50/3A724F/user-male-circle--v1.png"
              alt="account"
            />
          </li>
          <li>
            <img
              className={styles.images}
              src="https://img.icons8.com/ios/50/3A724F/twitter--v1.png"
              alt="twitter"
            />
          </li>
          <li>
            <img
              className={styles.images}
              src="https://img.icons8.com/ios/50/3A724F/instagram-new--v1.png"
              alt="instagram"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
