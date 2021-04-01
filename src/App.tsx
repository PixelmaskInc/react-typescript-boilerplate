import * as React from "react";
import { hot } from "react-hot-loader";
import Login from "./app/Login/index";
import "./App.scss"

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <>
        <Login />
      </>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
