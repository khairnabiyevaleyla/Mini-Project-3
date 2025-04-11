import React from "react";
import styles from "./style.module.scss";

const SharedComments = ({ personName, text }) => {
  const rating = 5;

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md my-2">
        <h3 className={styles.name}>{personName}</h3>
        <ul className="flex gap-1">
          {[...Array(rating)].map((_, index) => (
            <li key={index}>
              <i className="ri-star-line"></i>
            </li>
          ))}
        </ul>
        <p className={styles.comment}>{text}</p>
      </div>
    </>
  );
};

export default SharedComments;
