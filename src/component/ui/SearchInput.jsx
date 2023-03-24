import React from "react";

export default function SearchInput() {
  return (
    <div className="flex-1 max-w-xs search-field group">
      <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
      <input
        type="text"
        placeholder="Search Task"
        className="search-input"
        id="lws-searchTask"
      />
    </div>
  );
}
