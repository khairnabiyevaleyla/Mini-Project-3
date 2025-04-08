import React from "react";
import styles from "./style.module.scss";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constant/QuerieKeys";
import { getApi } from "@/http/api";

const Categories = ({ setCategory }) => {
  const { data } = useQuery({
    queryKey: [QueryKeys.categories],
    queryFn: () => getApi(`/categories`),
  });

  return (
    <div>
      <div className={styles.title}>
        <span>Categories</span>
      </div>
      <div className={styles.categories}>
        <ul>
          {data?.data &&
            data?.data.map((item, index) => (
              <li key={index} onClick={() => setCategory(item?.name)}>
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
