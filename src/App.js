import './App.css';
import Settings from "./pages/Settings";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
          </Routes>
      </Layout>
  );
}

export default App;
