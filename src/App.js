import React, { useState, useEffect } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";
function App({ articles }) {
  useEffect(() => {
    upvotes();
  }, []);
  const [data, setdata] = useState(articles);

  const upvotes = () => {
    var copy = [...data];
    copy.sort(function (a, b) {
      return b.upvotes - a.upvotes;
    });
    setdata(copy);
  };
  const recent = () => {
    var copy = [...data];
    copy.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    setdata(copy);
  };
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          onClick={upvotes}
          data-testid="most-upvoted-link"
          className="small"
        >
          Most Upvoted
        </button>
        <button
          onClick={recent}
          data-testid="most-recent-link"
          className="small"
        >
          Most Recent
        </button>
      </div>
      <Articles articles={data} />
    </div>
  );
}

export default App;
