function Pagination() {
  return (
<div>
    <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item page-link">Previous</li>
          <li className="page-item page-link">1</li>
          <li className="page-item page-link">2</li>
          <li className="page-item page-link">3</li>
          <li className="page-item page-link">Next</li>
        </ul>
   </nav>
</div>
)
  };
export default Pagination
//this needs the logic for pagination added
//decide on 5 or 10 items
//show or hide depending on if there are 5(10) or more items on the page
//show number of pages that have 5 items on them
//stretch goal