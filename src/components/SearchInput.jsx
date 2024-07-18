
import { CiSearch } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="w-full py-3 px-5 border-b-[12px] border-black/5 md:hidden">
      <form
        className="flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search/list?query=${inputValue}`);
          setInputValue("");
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="검색어를 입력해주세요."
          className="w-full font-light outline-none"
        />
        {inputValue && (
          <TiDeleteOutline
            size={25}
            color="#9b9b9b"
            onClick={() => {
              setInputValue("");
            }}
          />
        )}
        <button>
          <CiSearch size={25} className="ml-4" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
