import React, { Component } from "react";

export default class ContainerComponent extends Component {
  arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    selectedGlass: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderChangeGlasses = (glassId) => {
    // tim index cua glass trong db
    const glassIdex = this.arrGlasses.findIndex(
      (glass) => glass.id === glassId
    );
    this.setState({
      selectedGlass: this.arrGlasses[glassIdex],
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="row mainModel">
          <div className="col-6">
            <img className="model" src="./img/model.jpg" alt="model " />
          </div>
          <div className="col-6 ">
            <img className="model parent" src="./img/model.jpg" alt="model " />
            <img className="glass" src={this.state.selectedGlass.url} alt="" />
            <div className="desc">
              <h5>{this.state.selectedGlass.name}</h5>
              <p>{this.state.selectedGlass.desc}</p>
            </div>
          </div>
        </div>
        <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
          {this.arrGlasses.map((item) => (
            <img
              className={
                this.state.selectedGlass.id === item.id
                  ? "active ml-2 p-2 glass-item"
                  : "ml-2 p-2 glass-item"
              }
              style={{ width: "110px", height: " 55px" }}
              src={item.url}
              alt="product"
              key={item.id}
              onClick={() => this.renderChangeGlasses(item.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

//  <div className="row">
//    {this.arrGlasses.map((item) => (
//      <div className="col-2" key={item.id}>
//        <img src={item.url} alt="" />
//        <p>{item.desc}</p>
//      </div>
//    ))}
//  </div>;
