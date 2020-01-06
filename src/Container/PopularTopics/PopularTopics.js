import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import classes from "./PopularTopics.css";
import styles from "../../index.css";

class Populartopics extends Component {
  state = {
    elHTML: [],
    totalElements: 0,
    prevPointer: 0,
    nextPointer: 0
  };
  static getDerivedStateFromProps(props, state) {
    console.log(props.noOfElements);
    console.log("popular topics get derived state from props");
    const elements = [];
    let temp = [];
    let elHTML = [];

    props.categories.forEach(items => {
      items.topics.forEach(el => {
        if (elements.length === 0 && elHTML.length === 0) {
          elements.push(el);
          temp.push(el);
        } else {
          let index = elements.findIndex(
            arrEl => arrEl.toLowerCase() === el.toLowerCase()
          );
          if (index < 0 && temp.length === 0) {
            elements.push(el);
            temp.push(el);
          } else if (index < 0 && temp.length > 0) {
            elements.push(el);
            temp.push(el);
            elHTML.push([...temp]);
            temp = [];
          }
        }
      });
    });
    state = {
      elHTML: elHTML,
      totalElements: elHTML.length,
      nextPointer: state.prevPointer + props.noOfElements
    };
    return state;
  }

  goBefore = () => {
    let tempNextPointer = this.state.nextPointer;
    let tempPrevPointer = this.state.prevPointer;
    if (this.state.prevPointer - this.props.noOfElements >= 0) {
      this.setState({
        prevPointer: tempPrevPointer - this.props.noOfElements,
        nextPointer: tempNextPointer - this.props.noOfElements
      });
    } else {
      this.setState({ prevPointer: 0, nextPointer: this.state.totalElements });
    }
  };

  goAfter = () => {
    let tempNextPointer = this.state.nextPointer;
    let tempPrevPointer = this.state.prevPointer;
    if (
      this.state.nextPointer + this.props.noOfElements <=
      this.state.totalElements
    ) {
      this.setState({
        prevPointer: tempPrevPointer + this.props.noOfElements,
        nextPointer: tempNextPointer + this.props.noOfElements
      });
    } else {
      this.setState({
        prevPointer:
          tempPrevPointer + (this.state.totalElements - this.state.nextPointer),
        nextPointer: this.state.totalElements
      });
    }
  };

  render() {
    /*const elements = [];
        let temp = [];
        let elHTML=[];
        
        this.props.categories.forEach(items => {
            items.topics.forEach(el => {
                if(elements.length === 0 && elHTML.length===0){
                    elements.push(el);
                    temp.push(el);
                }
                else{
                    let index =elements.findIndex(arrEl => arrEl.toLowerCase() === el.toLowerCase());
                    if(index<0 && (temp.length===0) ){
                        elements.push(el);
                        temp.push(el);
                    }else if(index<0 && (temp.length > 0 )){
                        elements.push(el)
                        temp.push(el);
                        elHTML.push([...temp]);
                        temp = [];
                    }
                }
            })
        });*/

    let allHTML = this.state.elHTML.slice(
      this.state.prevPointer,
      this.state.nextPointer
    );

    let finalHTML = allHTML.map(elements => {
      return (
        <Card key={elements[0]}>
          <div>{elements[0]}</div>
          <div>{elements[1]}</div>
        </Card>
      );
    });

    return (
      <div className={classes.PopularTopics}>
        <div onClick={this.goBefore} className={styles["left-arrow"]}>
          <span className="fa fa-chevron-left"></span>
        </div>
        {finalHTML}
        <div onClick={this.goAfter} className={styles["right-arrow"]}>
          <span className="fa fa-chevron-right"></span>
        </div>
      </div>
    );
  }
}

export default Populartopics;
