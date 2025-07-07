import { getQueryResult } from "apiCalls/getQueryResults";
import SearchBar from "components/common/SearchBar";
import Results from "components/home/Results";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const options = ["Jobs", "Resources", "Forums"];

const Home = () => {
  // get parameters from url
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("query") || "";
  const optionParam = searchParams.get("option") || options[0];
  const optionParamIndex = options.findIndex(
    (opt: string) => opt.toLowerCase() === optionParam.toLowerCase()
  );

  const navigate = useNavigate();

  // declare constants
  const [query, setQuery] = useState<string>(queryParam);
  const [filters, setFilters] = useState<object>({});
  const [optionIndex, setOptionIndex] = useState<number>(
    Math.max(optionParamIndex, 0)
  );
  const [data, setData] = useState<object[] | null>();

  // handle search query
  async function handleSubmission() {
    const result = await getQueryResult({
      query,
      option: options[optionIndex],
      filters,
    });
    setData(result);
  }

  // fetch data when parameters change
  useEffect(() => {
    handleSubmission();
    let queryString = "?";

    if (query) queryString = `${queryString}query=${query}`;
    queryString = `${queryString}${query && "&"}option=${options[
      optionIndex
    ].toLowerCase()}`;

    navigate(queryString);
  }, [optionIndex]);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col gap-3 items-center">
        <SearchBar
          searchText={query}
          setSearchText={setQuery}
          onSubmit={handleSubmission}
        />

        {/* OPTIONS */}
        {data && (
          <div className="flex gap-3">
            {options.map((optName, index) => (
              <button
                key={index}
                onClick={() => setOptionIndex(index)}
                className={`cursor-pointer border-theme border-3 ${
                  optionIndex === index
                    ? "bg-theme text-white "
                    : "border-theme"
                } font-bold px-5 py-2 rounded`}
              >
                {optName}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RESULTS  */}
      {data && (
        <div className="flex flex-col w-full">
          <Results data={data} />
        </div>
      )}
    </div>
  );
};

export default Home;
