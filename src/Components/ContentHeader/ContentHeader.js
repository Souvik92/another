import React from "react";
//import Aux from '../../HOC/AuxilliaryComponent/AuxilliaryComponent';
//import classes from '../ContentHeader/ContentHeader.css';
import classes from "./ContentHeader.css";
const getIcons = name => {
  let lowercasename = name.toLowerCase();
  if (lowercasename === "mobile apps") {
    return "fa fa-mobile";
  } else if (lowercasename === "operating systems") {
    return "fa fa-windows";
  } else if (lowercasename === "network & security") {
    return "fa fa-shield";
  } else if (lowercasename === "data science") {
    return "fa fa-database";
  } else {
    return "fa fa-file-code-o";
  }
};

const contentHeader = props => {
  const elements = props.categories.map(el => {
    return (
      <li key={el["sub-category"]}>
        <span className={getIcons(el["sub-category"])}></span>
        {el["sub-category"]}
      </li>
    );
  });
  return (
    <div className={classes.ContentHeader}>
      <div>
        <ul>
          <li>
            <span className={getIcons(props.categories[0].category)}></span>
            {props.categories[0].category}
          </li>
          {elements}
        </ul>
      </div>
    </div>
  );
};

export default contentHeader;
