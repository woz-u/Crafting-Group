
function Sidenav() {
  return (
      <div>
    <p>
    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
      Toggle width collapse
    </button>
  </p>
  <div style="min-height: 120px;">
    <div className="collapse collapse-horizontal" id="collapseWidthExample">
      <div className="card card-body" style="width: 300px;">
        This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
      </div>
    </div>
  </div>
  </div>
  )
};
var myCollapsible = document.getElementById('myCollapsible')
  myCollapsible.addEventListener('hidden.bs.collapse', function () {
    // do something...
  })
  var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})

export default Sidenav
//this needs to be setup to be exported/imported to a index page?