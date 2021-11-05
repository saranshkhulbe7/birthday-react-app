import React, { useState } from "react";
import { people } from "../data.js";

const ProfileList = () => {
  const [profiles, setProfiles] = useState(people);
  const [profileCnt, setProfileCnt] = useState(people.length);

  const removeProfile = (id) => {
    setProfiles(
      profiles.filter((person) => {
        return person.id !== id;
      })
    );

    setProfileCnt((prevState) => {
      return prevState - 1;
    });
  };

  const clearList = () => {
    setProfiles([]);
    setProfileCnt(0);
  };

  return (
    <React.Fragment>
      {/* Card Header */}
      <div className="cardHead">
        <h2>{profileCnt} Birthdays Today</h2>
      </div>

      {/* Card Body */}
      {profiles.map((person) => {
        return (
          <article className="profile">
            <section className="image-sec">
              <img className="image" src={person.image} alt="profile-image" />
            </section>
            <section className="details-sec">
              <div className="details-name">
                <h4>{person.name}</h4>
              </div>
              <div className="details-age">
                <h5>{person.age} years</h5>
              </div>
            </section>
            <section className="rm-btn-sec">
              <button
                className="rm-btn"
                type="button"
                onClick={() => removeProfile(person.id)}
              >
                ✕
              </button>
            </section>
          </article>
        );
      })}

      {/* Card Foot */}
      <div className="cardFoot">
        <button type="button" className="cl-btn" onClick={clearList}>
          clear
        </button>
      </div>
    </React.Fragment>
  );
};

export default ProfileList;
