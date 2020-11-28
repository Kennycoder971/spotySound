import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <h2 className="app-name">SpotySound</h2>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Librairie
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
