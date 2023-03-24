import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterSearchBox } from "../../feature/filter/filterSlice";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (search) {
      dispatch(filterSearchBox(search));
    }
  }, [search]);
  return (
    <div className="flex-1 max-w-xs search-field group">
      <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search Task"
        className="search-input text-gray-800"
        id="lws-searchTask"
      />
    </div>
  );
}
