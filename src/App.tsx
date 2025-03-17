import Layout from "components/layout/Layout";
import Home from "pages/Home";

function App() {
  return (
    <div className="">
      <Layout children={<div><Home /></div>} />
    </div>
  );
}

export default App;
