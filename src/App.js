import React from "react";
import './App.css';
import Route from "./route/route";
import { Suspense } from "react";
import SpinnerLoad from "./components/Shared/Spinner";

function App() {

  const scrollhide = (ee) => {
  /*   console.log(ee); */
    var b;
    return(
        b=ee
    )
  }
  return (
    <div className="App">
          <Suspense fallback={<SpinnerLoad />}>
            <Route scroll={scrollhide}/>
          </Suspense>
    </div>
  );
}

export default App;
