import "./styles/components/App/index.sass";
import "./styles/components/App/responsive.sass";

function App() {
  return (
    <div className="container">
      <div className="title">
        <h2>Reliable, efficient delivery</h2>
        <strong>Powered by Technology</strong>
        <p>
          Our Artificial intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="cards">
        <div className="card card-1">
          <h3>Supervisor</h3>
          <p>Monitors activity to identify project roadblocks</p>
          <img src="./images/icon-supervisor.svg" alt="lupa" />
        </div>
        <div className="card-group">
          <div className="card card-2">
            <h3>Team Builder</h3>
            <p>
              Scans our talent network to create the optimal team for your
              project
            </p>
            <img src="./images/icon-team-builder.svg" alt="casa" />
          </div>
          <div className="card card-3">
            <h3>Karma</h3>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src="./images/icon-karma.svg" alt="lampada" />
          </div>
        </div>
        <div className="card card-4">
          <h3>Calculator</h3>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <img src="./images/icon-calculator.svg" alt="stats" />
        </div>
      </div>
    </div>
  );
}

export default App;
