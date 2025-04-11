import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getApi } from "@/http/api";
import { QueryKeys } from "@/constant/QuerieKeys";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.products, query],
    queryFn: () =>
      getApi(`/products?populate=*&filters[name][$contains]=${query}`),
    enabled: !!query,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search results for: "{query}"</h2>
      {data?.data?.length ? (
        <ul className="grid grid-cols-2 gap-4">
          {data.data.map((product) => (
            <li key={product.id} className="border p-2 rounded">
              <img
                src={`http://localhost:1337${product.mainimage?.url}`}
                alt={product.name}
                className="w-[152px] h-[199px] object-cover"
              />
              <p className="mt-2">{product.name}</p>
              <p className="text-sm text-gray-500">${product.finalprice}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
