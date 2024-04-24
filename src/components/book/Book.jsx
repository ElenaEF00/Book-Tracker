import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Book = ({ bookData }) => {
  const { title, cover_id, authors } = bookData;
  const author = authors[0]?.name || "Author not found";

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
    </div>
  );
};

export default Book;
