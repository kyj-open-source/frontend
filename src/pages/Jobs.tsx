import SearchBar from "components/common/SearchBar";
import { useState } from "react";

function Jobs() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="relative flex justify-center border-2 h-100 overflow-hidden bg-red-300">
      <div className="h-50 w-50 bg-green-300 absolute sticky-0"></div>
    </div>
  );
}

export default Jobs;
