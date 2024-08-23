import Tools from './components/Tools';
import Panel from './components/panel/Panel';
function App() {
  return (
    <div className="container-fluid bg-info">
      <div className="row gy-3">
        <div className="col-12">
          <Tools />
        </div>
        <div
          className="col-12  bg-light border border-2 border-info position-relative"
          style={{ height:'650px' }}
        >
          <Panel />
        </div>
      </div>
    </div>
  );
}

export default App;
