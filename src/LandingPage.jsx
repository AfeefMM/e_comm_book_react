import "bootstrap/dist/css/bootstrap.min.css";
import IdCards from "./IdCards";

function LandingPage() {
  return (
    <div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 landingPgBg">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            loading="lazy"
            width="400"
            height="300"
          />
        </div>
        <div className="col-lg-6 landingPgTitle">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Buy your favourite books for the best price
          </h1>
          <p className="lead landingPgsubTitle">
            From literature to applied educational resources,we have alot of
            textbooks to offer
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="landingPgMidTitle">Best Sellers</h1>
      </div>
      <IdCards />
    </div>
  );
}

export default LandingPage;
