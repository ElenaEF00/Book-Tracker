import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import AddInput from "../../components/addInput";
import BookList from "../../components/bookList";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";

export default function Homepage() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  return (
    <div className={styles.Homepage}>
      <Navbar />
      <AddInput />
      {lists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
    </div>
  );
}
