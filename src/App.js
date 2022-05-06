import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./App.css";

const PER_PAGE = 20;
function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }
  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  //0,10,20,30....
  const offset = currentPage * PER_PAGE;
  //console.log("offset",offset)
  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((res, index) => <img key={index} src={res.thumbnailUrl} />);
  //console.log("currentPageData",currentPageData)

  //total pages:500
  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="App">
      <h1>React Pagination</h1>
      {currentPageData}
      <ReactPaginate
        previousLabel={"<-Previous"}
        nextLabel={"Next->"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
}

export default App;
