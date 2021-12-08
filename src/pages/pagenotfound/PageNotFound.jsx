import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  document.title = "Forgot Password | Smart Stock";

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-warning">
        <DocumentTitle title={"Page not found | Smart Stock"} />
        <h1 className="card p-3">404 page Not found</h1>
        <Link to="/">Back to Home Page</Link>
      </div>
    </>
  );
};

export default PageNotFound;
