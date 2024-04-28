import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import AddInput from "../../components/addInput";
import BookList from "../../components/bookList";
import { DotLoader } from "react-spinners";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";

export default function Homepage() {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => {
      setLists(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.Homepage}>
      <Navbar />
      <AddInput />
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <DotLoader color={"#c85d1b"} loading={isLoading} size={50} />
        </div>
      ) : (
        lists.map((list, i) => (
          <BookList
            bookListData={list.works}
            title={list.name.toUpperCase()}
            key={i}
          />
        ))
      )}
    </div>
  );
}
