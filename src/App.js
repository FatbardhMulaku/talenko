import React from "react";
import './App.css';
import Route from "./route/route";
import { Suspense } from "react";
import SpinnerLoad from "./components/Shared/Spinner";

function App() {
  
  return (
    <div className="App">
       <Suspense fallback={<SpinnerLoad />}>
            <Route />
          </Suspense>
    </div>
  );
}

export default App;
