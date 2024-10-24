/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { productsContext } from "../Utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(productsContext);
  const [filterProducts, setFilterProducts] = useState();
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();
  const param = decodeURIComponent(search.split("=")[1]);

  const handleCategory = async () => {
    if (!param) return;
    try {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${param}`
      );
      const data = await response.json();
      console.log("Filtered by category:", data);
      if (data.length > 0) {
        setFilterProducts(data);
      }
    } catch (error) {
      console.error("Error fetching category data:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    setFilterProducts(products);
    setLoading(false);
    if (param) {
      handleCategory();
    }
  }, [param, products]);

  return (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap gap-3 overflow-x-hidden overflow-y-auto">
        {loading ? (
          <Loading />
        ) : (
          filterProducts?.map((item) => (
            <Link
              key={item.id}
              to={`/details/${item.id}`}
              className="card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-300">
                {item.title.slice(0, 17)}...
              </h1>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
