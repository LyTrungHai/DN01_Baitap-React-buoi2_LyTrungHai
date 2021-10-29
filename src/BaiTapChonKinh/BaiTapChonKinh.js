import React, { Component } from "react";
import ContainerComponent from "./ContainerComponent";
import HeaderComponent from "./HeaderComponent";

export default class BaiTapChonKinh extends Component {
  render() {
    return (
      <div className="bg-body">
        <div className="overlay">
          <HeaderComponent />
          <ContainerComponent />
        </div>
      </div>
    );
  }
}
