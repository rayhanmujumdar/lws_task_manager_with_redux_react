import React from "react";

export default function SearchInput() {
  return (
    <div class="flex-1 max-w-xs search-field group">
      <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
      <input
        type="text"
        placeholder="Search Task"
        class="search-input"
        id="lws-searchTask"
      />
    </div>
  );
}
