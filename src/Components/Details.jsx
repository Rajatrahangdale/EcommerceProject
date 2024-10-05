import { Link } from "react-router-dom"

const Details = () => {
  return (
    <div className="w-[70%] flex h-full bg-red-200 m-auto p-[10%]">
      <img
        className="object-contain w-[50%] h-[70%]"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="containt">
        <h1 className="text-5xl">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h3>men&apos;s clothing</h3>
        <h2>109.95</h2>
        <p>
          Your perfect pack for 
        </p>
        <Link>Edit</Link>
        <Link>Delete</Link>
      </div>
    </div>
  );
}

export default Details