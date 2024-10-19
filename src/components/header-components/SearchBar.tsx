import React, { useContext } from "react";
import { queryContext } from "../../context/QueryContext";

interface PropTypes {}

const SearchBar: React.FC<PropTypes> = () => {
  const context = useContext(queryContext);
  if (!context) throw Error("QUERY STATE NOT FOUND");
  const { queryState, updateQueryState } = context;
  const keydownHandler = (event: React.KeyboardEvent) => {
    if (event.key !== "Enter") return;
    const target = event.currentTarget as HTMLInputElement;
    console.log(target.value);
    updateQueryState(target.value);
    console.log(queryState);
  };
  return (
    <div className="search-bar-container align-row">
      <div className=" search-bar center-div">
        <div className="center-div">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.5 26.25L16.625 18.375C16 18.875 15.2812 19.2708 14.4687 19.5625C13.6562 19.8542 12.7917 20 11.875 20C9.60417 20 7.68229 19.2135 6.10938 17.6406C4.53646 16.0677 3.75 14.1458 3.75 11.875C3.75 9.60417 4.53646 7.68229 6.10938 6.10938C7.68229 4.53646 9.60417 3.75 11.875 3.75C14.1458 3.75 16.0677 4.53646 17.6406 6.10938C19.2135 7.68229 20 9.60417 20 11.875C20 12.7917 19.8542 13.6562 19.5625 14.4687C19.2708 15.2812 18.875 16 18.375 16.625L26.25 24.5L24.5 26.25ZM11.875 17.5C13.4375 17.5 14.7656 16.9531 15.8594 15.8594C16.9531 14.7656 17.5 13.4375 17.5 11.875C17.5 10.3125 16.9531 8.98438 15.8594 7.89062C14.7656 6.79688 13.4375 6.25 11.875 6.25C10.3125 6.25 8.98438 6.79688 7.89062 7.89062C6.79688 8.98438 6.25 10.3125 6.25 11.875C6.25 13.4375 6.79688 14.7656 7.89062 15.8594C8.98438 16.9531 10.3125 17.5 11.875 17.5Z"
              fill="#9982bd"
            />
          </svg>
        </div>
        <input
          className="search-input"
          spellCheck="false"
          placeholder="Search for a wallpaper..."
          onKeyDown={keydownHandler}
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
