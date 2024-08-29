import { useState, useEffect } from "react";
import { Character } from "../Character/Character";
import styles from "./style.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function NavPage({ info, page, setPage }) {
  return (
    <header className={styles.Header}>
      {page > 1 && (
        <button className={styles.Button} onClick={() => setPage(page - 1)}>
          <FaArrowLeft />
        </button>
      )}
      <select
        value={page}
        onChange={(e) => setPage(parseInt(e.target.value, 10))}
        className={styles.Select}
      >
        {Array.from({ length: info.pages }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            Página {i + 1}
          </option>
        ))}
      </select>
      {page < info.pages && (
        <button className={styles.Button} onClick={() => setPage(page + 1)}>
          <FaArrowRight />
        </button>
      )}
    </header>
  );
}

function InfoPage({ info, page }) {
  return (
    <footer className={styles.Footer}>
      <p className={styles.Page}>
        Página {page} de {info.pages}
      </p>
      <p className={styles.Page}>Total de registros: {info.count}</p>
    </footer>
  );
}

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results, info } = await data.json();
      setCharacters(results);
      setInfo(info);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div className={styles.Container}>
      <NavPage info={info} page={page} setPage={setPage} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.Row}>
          {characters.map((character) => (
            <div className={styles.Item} key={character.id}>
              <Character
                key={character.id}
                character={character}
              />
            </div>
          ))}
        </div>
      )}

      <NavPage info={info} page={page} setPage={setPage} />

      <InfoPage info={info} page={page} />
    </div>
  );
}

export default CharacterList;
