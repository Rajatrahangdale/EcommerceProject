/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const Details = () => {
  const [singleProduct, setsingleProduct] = useState();
  const { id } = useParams();
  console.log(id);

  const getData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);

    setsingleProduct(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {singleProduct ? (
        <div className="w-[70%] flex h-full m-auto p-[10%] gap-10">
          <img
            className="object-contain w-[50%] h-[70%]"
            src={singleProduct.image}
            alt={singleProduct.title}
          />
          <div className="containt flex flex-col gap-3 font-semibold">
            <h1 className="text-3xl font-semibold">{singleProduct.title}</h1>
            <h3 className="text-zinc-700">{singleProduct.category}</h3>
            <h2 className="text-red-400 font-bold ">${singleProduct.price}</h2>
            <p>{singleProduct.description}</p>
            <div className="flex items-center gap-5 py-4">
              <Link>
                <button className="px-4 py-1 border border-blue-300 rounded-md text-blue-400">
                  Edit
                </button>
              </Link>
              <Link>
                <button className="px-4 py-1 border border-red-300 rounded-md text-red-400">
                  Delete
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
