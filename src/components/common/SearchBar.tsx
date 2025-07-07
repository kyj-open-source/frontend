import React, { useRef, useState } from "react";
import searchIcon from "assets/images/icons/search-icon.svg";
import { autoResize, handleKeydown, moveToTop } from "utils/searchUtils";

type SearchBarType = {
  searchText: string;
  setSearchText: (value: string) => void;
  onSubmit: () => void;
};

const SearchBar: React.FC<SearchBarType> = ({
  searchText,
  setSearchText,
  onSubmit,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    // Static version without animation
    <div className="sticky-0 w-[50vw] flex gap-3 overflow-hidden top-[100px]">
      {/* Text input */}
      <textarea
        ref={textareaRef}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          if (textareaRef.current) {
            autoResize(textareaRef.current);
          }
        }}
        onKeyDown={(e) => {
          if (textareaRef.current) {
            handleKeydown(e, textareaRef.current);
          }
        }}
        rows={1}
        cols={50}
        className="w-[50vw] p-4 text-xl resize-none outline-none rounded-md border-2 border-theme-d max-h-[20em] leading-6 overflow-y-hidden"
        placeholder="Search"
      />
      {/* Search button */}
      <button
        className="px-2.5 h-[56px] rounded-md flex items-center justify-center bg-theme"
        onClick={onSubmit}
      >
        <img src={searchIcon} alt="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
