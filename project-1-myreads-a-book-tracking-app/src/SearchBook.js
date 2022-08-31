import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchBook = () => {
  const [bookInput, setBookInput] = useState("");
  useEffect(() => {}, [bookInput]);
  return (
    <>
      <div>Hello World</div>
      <Link to="/">
        <button>Go Back to shelves</button>
      </Link>

      <input
        onChange={(e) => {
          setBookInput(e.target.value);
        }}
      />
    </>
  );
};

export default SearchBook;
