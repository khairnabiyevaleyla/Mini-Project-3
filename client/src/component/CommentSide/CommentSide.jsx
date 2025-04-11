import React, { useState } from "react";
import styles from "./style.module.scss";
import SharedComments from "@/component/shared/SharedComments/SharedComments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "@/constant/QuerieKeys";
import { getApi, postApi } from "@/http/api";
import { useParams } from "react-router";

const CommentSide = () => {
  const rating = 5;
  const { id } = useParams();

  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: [QueryKeys.products, id],
    queryFn: () => getApi(`/products?populate=*&filters[id]=${id}`),
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["AddComment"],
    mutationFn: () =>
      postApi("/comments", {
        data: {
          ...form,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.products, id]);
      setForm({
        name: "",
        desc: "",
        product: id,
      });
    },
  });
  const [form, setForm] = useState({
    name: "",
    desc: "",
    product: id,
  });

  const handleChnage = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.root}>
      {" "}
      <div className={styles.rating}>
        <h6 className={styles.title}>Customer Reviews</h6>
        <div className="">
          <ul className="flex gap-1">
            {[...Array(rating)].map((_, index) => (
              <li key={index}>
                <i className="ri-star-line"></i>{" "}
              </li>
            ))}
            <p>
              <span>0</span> Reviews
            </p>
          </ul>
        </div>
      </div>
      <div className="w-full">
        {data?.data[0]?.comments?.map((el, index) => (
          <SharedComments key={index} personName={el?.name} text={el?.desc} />
        ))}
      </div>
      <div className="w-full">
        {" "}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutate();
          }}
          className="bg-white p-4 rounded-lg shadow-md "
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              onChange={handleChnage}
              value={form.name}
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="comment"
            >
              Comment
            </label>
            <textarea
              onChange={handleChnage}
              value={form.desc}
              name="desc"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="desc"
              rows="3"
              placeholder="Enter your comment"
            ></textarea>
          </div>
          <div className="mb-4"></div>
          <button
            className="bg-[#141718] border border-[#141718] hover:bg-[#Fff] hover:text-[#141718] text-[#fff] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isPending ? "Loading..." : "Write Review"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSide;
