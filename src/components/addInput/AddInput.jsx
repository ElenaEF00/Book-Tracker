import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const AddInput = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const onInputChange = (e) => setInputValue(e.target.value);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/book/${inputValue.replace(" ", "+")}`);
  };
  return (
    <div className={styles.Add}>
      <form className={styles.AddInput} onSubmit={onHandleSubmit}>
        <input
          className={styles.AddInput__input}
          type="text"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Inserisci il titolo"
        />
        <input className={styles.AddInput__btn} type="submit" value="Cerca" />
      </form>
    </div>
  );
};

export default AddInput;
