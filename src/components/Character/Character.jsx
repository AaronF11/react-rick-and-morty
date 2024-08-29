import styles from "./style.module.css";
import { FaHeartbeat, FaSkullCrossbones, FaQuestion } from "react-icons/fa";
import { FaMale, FaFemale } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiAliensFill } from "react-icons/ri";
import Swal from 'sweetalert2'

export function Character({ character }) {

  const handleModal = () => {
    Swal.fire({
      title: character.name,
      html: `
        <p>Estado: ${character.status}</p>
        <p>Especie: ${character.species}</p>
        <p>Genero: ${character.gender}</p>
        <p>Origen: ${character.origin.name}</p>
        <p>Ubicación: ${character.location.name}</p>
      `,
      confirmButtonText: 'Cerrar',
      background: '#fff',
      width: 500,
      padding: '20px',
      confirmButtonColor: '#000',
      cancelButtonColor: '#000',
    });
  };

  return (
    <div className={styles.Character} onClick={handleModal}>
      <div className={styles.imageContainer}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.image}
        />
      </div>
      <div className={styles.infoContainer}>
        <h3 className={styles.name}>{character.name}</h3>
        <h3 className={styles.status}>
          {character.status === "Alive" ? (
            <FaHeartbeat />
          ) : character.status === "Dead" ? (
            <FaSkullCrossbones />
          ) : (
            <FaQuestion />
          )}
          {character.status}
        </h3>
        <h3 className={styles.species}>
          {character.species === "Human" ? (
            <FaUser />
          ) : character.species === "Alien" ? (
            <RiAliensFill />
          ) : (
            <FaQuestion />
          )}
          {character.species}
        </h3>
        <h3 className={styles.gender}>
          {character.gender === "Male" ? (
            <FaMale />
          ) : character.gender === "Female" ? (
            <FaFemale />
          ) : (
            <FaQuestion />
          )}
          {character.gender}
        </h3>
      </div>
    </div>
  );
}
export default Character;
