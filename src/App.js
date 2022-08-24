import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 9;
  // apiKey = process.env.REACT_NEWS_API;
  apiKey = "79c438c4094749039a2e537d1d603109";
  //initializning progress to 0 in the state
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                setProgress={this.setProgress}
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.pageSize}
                country="in"
                apiKey={this.apiKey}
                category="sports"
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
