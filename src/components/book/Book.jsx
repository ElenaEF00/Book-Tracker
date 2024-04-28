import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Book = ({ bookData }) => {
  const { title, cover_id, authors } = bookData;
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites"))?.some(
      (book) => book.title === title
    ) || false
  );

  const author = authors[0]?.name || "Author not found";

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const index = favorites.findIndex((book) => book.title === title);
    if (index === -1) {
      favorites.push({ title, cover_id, authors });
    } else {
      favorites.splice(index, 1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className={styles.Book}>
      <Link to={`/book/${title}`}>
        <img
          className={styles.image}
          src={`https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`}
          alt={title}
        />
        <h3 className={styles.title}>{title}</h3>
        <h5 className={styles.author}>{author}</h5>
      </Link>
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
    </div>
  );
};

export default Book;
