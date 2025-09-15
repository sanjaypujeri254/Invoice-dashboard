import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvoiceDashboard from "./Component/InvoiceDashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvoiceDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
