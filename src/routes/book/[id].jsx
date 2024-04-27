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
                  <h1 className={styles.title}>{bookInfo?.title}</h1>
                  <h3 className={styles.author}>{bookInfo?.author_name}</h3>
                  <div className={styles.info}>
                    <p>
                      ⭐{bookInfo?.ratings_average.toFixed(1)}{" "}
                      <span className={styles.outOfFive}>/5</span>
                    </p>
                    <p>{bookInfo?.first_publish_year}</p>
                    <p>
                      {bookInfo?.number_of_pages_median}{" "}
                      <span className={styles.pages}>pages</span>
                    </p>
                  </div>
                </div>
                <div className={styles.sentence}>
                  <h6 className={styles.introTitle}>Firts sentence</h6>
                  <p>
                    <span className={styles.quote}>"</span>
                    {bookInfo?.first_sentence[0]}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
