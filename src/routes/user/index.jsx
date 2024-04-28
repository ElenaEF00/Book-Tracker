import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Navbar from "../../components/navbar";
import Book from "../../components/book";
import userAvatar from "../../public/undraw_female_avatar_efig.svg";

export default function User() {
  const [userData, setUserData] = useState({
    avatar: "",
    name: "UserGuest",
    favoriteBooks: [],
  });

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        favoriteBooks: storedFavorites,
      }));
    }
  }, [localStorage.getItem("favorites")]);

  const { name, favoriteBooks } = userData;

  return (
    <>
      <Navbar />
      <div className={styles.UserPage}>
        <div className={styles.user}>
          <img className={styles.userIcon} src={userAvatar} alt="User Avatar" />
          <h2>{name}</h2>
        </div>
        <div className={styles.favoriteBooks}>
          {favoriteBooks.length > 0 ? (
            favoriteBooks.map((book) => <Book bookData={book} key={book.ia} />)
          ) : (
            <>
              <div className={styles.noFavBooks}>
                <h4 className={styles.text}>
                  Ancora nessun preferito?
                  <br />
                  <span className={styles.highlight}>
                    Aggiungi un nuovo libro!
                  </span>
                </h4>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
