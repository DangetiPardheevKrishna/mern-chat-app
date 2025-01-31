import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        className="input input-bordered border-neutral rounded-full"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-500 text-white border-neutral hover:bg-neutral-800"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
