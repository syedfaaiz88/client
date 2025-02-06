import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="bg-background text-text">
      <Layout element={<LandingPage/>}/>
    </div>
  );
}

export default App;
