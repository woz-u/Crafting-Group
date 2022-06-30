function Footer() {
  return (
    <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item nav-link px-2 text-muted">Home</li>
        <li className="nav-item nav-link px-2 text-muted">Features</li>
        <li className="nav-item nav-link px-2 text-muted">Pricing</li>
        <li className="nav-item nav-link px-2 text-muted">FAQs</li>
        <li className="nav-item nav-link px-2 text-muted">About</li>
      </ul>
      <p className="text-center text-muted">© 2021 Company, Inc</p>
    </footer>
  </div>
  )
};
  export default Footer
  //needs routing logic same as header
  //needs date() function for copyright year