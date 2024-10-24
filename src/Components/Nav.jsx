/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { productsContext } from "../Utils/Context";
import { Link } from "react-router-dom";
const Nav = () => {
  const [products] = useContext(productsContext);
  const [category, setCategory] = useState();
  

  useEffect(() => {
    const copyProducts = products && products.map((item) => item.category);
    setCategory([...new Set(copyProducts)]);
  }, [products]);

  const color = () => {
    return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)}, 0.9`;
  };

  return (
    <>
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a
          className="px-5 py-2 border rounded border-blue-200 text-blue-300"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl mb-3 w-[80%] font-semibold">Category Filter</h1>
        <ul className="w-[80%]">
          {category?.map((item, index) => {
            return (
              <Link
                to={`/?category=${item}`}
                key={index}
                className="mb-3 flex items-center"
              >
                <button onClick={() => {}}>
                  <span
                    style={{ backgroundColor: color() }}
                    className="inline-block rounded-full w-[15px] h-[15px] mr-3 bg-blue-100"
                  ></span>
                  {item}
                </button>
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
