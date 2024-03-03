import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Library from "./Components/Library";
import AddBook from "./Components/AddBook";
import ViewBook from "./Components/ViewBook";
import EditBook from "./Components/EditBook";
import Books from "./Components/Books";

function App() {
  return (
    <div className="App">
      <Navbar />
  
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="library" element={<Library />} />
        <Route path="AddBook" element={<AddBook />} />
        <Route path="library/:id" element={<ViewBook />} />
        <Route path="library/edit/:id" element={<EditBook />} />
        <Route path="books" element={<Books />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
