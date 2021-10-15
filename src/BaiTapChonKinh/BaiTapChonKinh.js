import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

export default class BaiTapChonKinh extends Component {
  render() {
    return (
      <div className="bg-body">
        <div className="overlay">
          <HeaderComponent />
        </div>
      </div>
    );
  }
}
