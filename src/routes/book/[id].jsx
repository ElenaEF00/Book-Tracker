import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { HTTP_GET } from "../../utils/http";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Navbar from "../../components/navbar";

export default function Book() {
  const { bookId } = useParams();
  const [bookInfo, setBookInfo] = useState({});

  useEffect(() => {
    HTTP_GET(`/search.json?q=${bookId.replaceAll(" ", "+")}`).then((data) =>
      setBookInfo(data.docs[0])
    );
  }, [bookId]);

  return (
    <>
      <Navbar />
      <div className={styles.Book}>
        <Link className={styles.backBtn} to="/">
          <IoArrowBackCircleOutline className={styles.backIcon} />
        </Link>
        <div className={styles.singleBook}>
          <div className={styles.wrapper}>
            {bookInfo?.isbn && (
              <>
                <div className={styles.mainInfo}>
                  {console.log(bookInfo)}
                  <img
                    className={styles.image}
                    src={`https://covers.openlibrary.org/b/id/${bookInfo.cover_i}-M.jpg`}
                    alt={bookInfo?.title}
                  />
                  <div className={styles.info}>
                    <h1>{bookInfo?.title}</h1>
                    <h3>{bookInfo?.author_name}</h3>
                    <h3>Anno di pubblicazione:</h3>
                    <p>{bookInfo?.first_publish_year}</p>
                  </div>
                </div>
                <span>{bookInfo?.ratings_average}⭐</span>
                <p>"{bookInfo?.first_sentence[0]}"</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
