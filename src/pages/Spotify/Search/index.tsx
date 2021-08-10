import React, { useState } from "react";
import SearchForm from "./SearchForm";
import TrackDetail from "../Track/TrackDetail";

function SearchPage() {
  const [view, set_view] = useState("searchform");

  return (
    <>
      {view === "searchform" && <SearchForm set_view={set_view} />}

      {view === "trackdetail" && <TrackDetail />}
    </>
  );
}

export default SearchPage;
