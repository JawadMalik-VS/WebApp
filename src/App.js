import { Routes, Route } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./component/Sidebar";

import { AllRoutes } from "./routes";
import PrivateRoute from "./routes/PrivateRoutes";
import ProtectedRoute from "./routes/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          {AllRoutes?.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={
                item.isPrivate ? (
                  <PrivateRoute>{item.page}</PrivateRoute>
                ) : (
                  <ProtectedRoute>{item.page}</ProtectedRoute>
                )
              }
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
