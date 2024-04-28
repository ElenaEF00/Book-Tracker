import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HTTP_GET } from "../../utils/http";
import { DotLoader } from "react-spinners";
import styles from "./index.module.scss";
import Navbar from "../../components/navbar";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function Book() {
  const { bookId } = useParams();
  const [bookInfo, setBookInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    HTTP_GET(`/search.json?q=${bookId.replaceAll(" ", "+")}`).then((data) => {
      setBookInfo(data.docs[0]);
      setIsLoading(false);
    });
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((book) => book.title === bookId));
  }, [bookId]);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const index = favorites.findIndex((book) => book.title === bookId);
    if (index === -1) {
      favorites.push({
        title: bookInfo.title,
        cover_id: bookInfo.cover_i,
        authors: [{ name: bookInfo.author_name[0] }],
      });
    } else {
      favorites.splice(index, 1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <DotLoader color={"#c85d1b"} loading={isLoading} size={50} />
        </div>
      ) : (
        <div className={styles.Book}>
          <Link className={styles.backBtn} to="/">
            <IoArrowBackCircleOutline className={styles.backIcon} />
          </Link>
          <div className={styles.singleBook}>
            <div className={styles.wrapper}>
              {bookInfo?.isbn && (
                <>
                  <div className={styles.mainInfo}>
                    <img
                      className={styles.image}
                      src={`https://covers.openlibrary.org/b/id/${bookInfo.cover_i}-M.jpg`}
                      alt={bookInfo?.title}
                    />
                    <h1 className={styles.title}>{bookInfo?.title}</h1>
                    <h3 className={styles.author}>{bookInfo?.author_name}</h3>
                    {isFavorite ? (
                      <AiFillHeart
                        className={styles.favoriteIcon}
                        onClick={handleToggleFavorite}
                      />
                    ) : (
                      <AiOutlineHeart
                        className={styles.favoriteIcon}
                        onClick={handleToggleFavorite}
                      />
                    )}
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
                  {bookInfo.first_sentence && bookInfo.first_sentence[0] && (
                    <div className={styles.sentence}>
                      <h6 className={styles.introTitle}>First sentence</h6>
                      <p>
                        <span className={styles.quote}>"</span>
                        {bookInfo.first_sentence[0]}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
