
    const sidenav = (
      <div>
    <p>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
      Toggle width collapse
    </button>
  </p>
  <div style="min-height: 120px;">
    <div class="collapse collapse-horizontal" id="collapseWidthExample">
      <div class="card card-body" style="width: 300px;">
        This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
      </div>
    </div>
  </div>
  </div>
);
var myCollapsible = document.getElementById('myCollapsible')
  myCollapsible.addEventListener('hidden.bs.collapse', function () {
    // do something...
  })
  var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
});