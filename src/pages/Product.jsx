import { Helmet } from "react-helmet-async";

function Product() {
  return (
    <>
      <Helmet>
        <title>Product | FlowDesk</title>
        <meta
          name="description"
          content="Discover FlowDesk features for project management and collaboration."
        />
      </Helmet>

      <section className="page">

        <h1>FlowDesk Product</h1>

        <p className="page-desc">
          Everything your team needs to plan, collaborate,
          and deliver projects successfully.
        </p>

        <div className="page-grid">

          <div className="page-card">
            <h3>Task Management</h3>
            <p>
              Organize work with boards, lists, and task priorities.
            </p>
          </div>

          <div className="page-card">
            <h3>Team Collaboration</h3>
            <p>
              Share updates, assign work, and collaborate in real time.
            </p>
          </div>

          <div className="page-card">
            <h3>Reporting</h3>
            <p>
              Analyze project progress with beautiful dashboards.
            </p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Product;