import styles from "./index.module.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCopyright,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          <li className={styles.li}>
            <Link className={styles.links} to={"/"}>
              <AiOutlineHome className={styles.icon} />
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.links} to={"/User"}>
              <AiOutlineUser className={styles.icon} />
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.links} to={"/Copyright"}>
              <AiOutlineCopyright className={styles.icon} />
            </Link>
          </li>
        </ul>
        <div className={styles.logo}>
          <img src="https://img.logoipsum.com/330.svg" alt="logo" />
        </div>
        <ul className={styles.social}>
          <li className={styles.li}>
            <AiOutlineTwitter className={styles.images} />
          </li>
          <li className={styles.li}>
            <AiOutlineInstagram className={styles.images} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
