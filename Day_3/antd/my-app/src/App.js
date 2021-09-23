import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import Homeheader from "./views/Homeheader";

function App() {
  return (
    <div className="App">
      <header id="header" className="clearfix home-header">  
          <Homeheader/>
      </header>
    </div>
  );
}

export default App;
