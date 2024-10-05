
const Nav = () => {
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
          <li className="mb-3 flex items-center">
            <span className="inline-block rounded-full w-[15px] h-[15px] mr-3 bg-blue-100"></span>
            Cat 1
          </li>
          <li className="mb-3 flex items-center">
            <span className="inline-block rounded-full w-[15px] h-[15px] mr-3 bg-red-100"></span>
            Cat 2
          </li>
          <li className="mb-3 flex items-center">
            <span className="inline-block rounded-full w-[15px] h-[15px] mr-3 bg-green-100"></span>
            Cat 3
          </li>
          <li className="mb-3 flex items-center">
            <span className="inline-block rounded-full w-[15px] h-[15px] mr-3 bg-yellow-100"></span>
            Cat 4
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav