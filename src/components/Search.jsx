import React, { useCallback } from "react";
import classNames from "classnames";
import { debounce } from "lodash";
import useSearchVideo from "../hooks/useSearchVideo";
import "../assets/styles/components/Search.scss";

const Search = ({ isHome }) => {
  const inputStyle = classNames("input", { isHome });
  const { handleSearch } = useSearchVideo();

  const debounceFunction = useCallback(
    debounce(
      (inputValue) => {
        handleSearch(inputValue);
      },
      1000,
      {
        trailing: true,
      }
    ),
    []
  );

  const onSearch = (value) => {
    debounceFunction(value);
  };

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder="Buscar..."
        onChange={({ target: { value } }) => onSearch(value)}
      />
    </section>
  );
};

export default Search;
