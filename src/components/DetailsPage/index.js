import React from "react";
import { Link } from "react-router-dom";
import howarts from "../../images/howarts.png";
import "./styles.scss";

function DetailsPage(props) {
  const { characters, loading } = props;
  const { id } = props.match.params;

  const person = characters.find(person => {
    return person.id === parseInt(id);
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  const status = person.alive ? (
    " ALIVE"
  ) : (
    <i class="fas fa-skull-crossbones" />
  );
  const year =
    person.yearOfBirth === "" ? "" : `Year of birth: ${person.yearOfBirth}`;
  const house = person.house === "" ? "" : `House: ${person.house}`;
  const patronus = person.patronus === "" ? "" : `Patronus: ${person.patronus}`;

  return (
    <div
      className="DetailsPage__container"
      style={{ backgroundImage: `url(${howarts})` }}
    >
      <div className="DetailsPage__card">
        <div
          className="DetailsPage__image"
          style={{ backgroundImage: `url(${person.image})` }}
        />
        <div>
          <h2 className="DetailsPage__title">{person.name}</h2>
          <div className="DetailsPage__content">
            <p>{house}</p>
            <p>{year}</p>
            <p>{patronus}</p>
            <p>Status: {status}</p>
          </div>
          <Link to="/" className="DetailsPage__link">
            <p>
              <i class="fas fa-reply" /> Back
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
