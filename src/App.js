import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 9;
  // apiKey = process.env.REACT_NEWS_API;
  const apiKey = "79c438c4094749039a2e537d1d603109";

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Navbar />
      <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route
          exact
          path="/technology"
          element={
            <News
              key="technology"
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="technology"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="general"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country="in"
              apiKey={apiKey}
              category="sports"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
