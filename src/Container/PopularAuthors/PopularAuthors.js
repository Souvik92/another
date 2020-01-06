import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import classes from "./PopularAuthors.css";
import styles from "../../index.css";
import { Link } from "react-router-dom";

class PopularAuthor extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    this.state = {
      totalElements: this.props.authors.length,
      prevPointer: 0,
      nextPointer: 0
    };
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

  static getDerivedStateFromProps(props, state) {
    /*console.log(props.windowWidth);
        console.log("Popular authors get derieved state from props");*/
    state = {
      nextPointer: state.prevPointer + props.noOfElements
    };
    /*console.log(state.nextPointer);*/
    return state;
  }

  render() {
    const authors = this.props.authors.slice(
      this.state.prevPointer,
      this.state.nextPointer
    );
    const authorsHTML = authors.map(el => {
      return (
        <Card
          myRef={this.inputElement}
          resizeFunc={() =>
            this.props.setNoOfElements(this.inputElement.current.clientWidth)
          }
        >
          <Link
            to={
              "/author/" +
              el.name
                .split(" ")
                .join("")
                .toLowerCase()
            }
          >
            <div>
              <img
                src={require("../../Assets/AuthorImages/" +
                  el.name
                    .split(" ")
                    .join("")
                    .toLowerCase() +
                  ".jpg")}
                alt="not available"
              />
              {/*<img src={require('../../Assets/AuthorImages/jonasschmedtmann.jpg')} alt="not available" />*/}
              <div className={classes.decoratingCard}>
                <h3>{el.name}</h3>
                <div>
                  <div>{el.title}</div>
                  <div>
                    <p>1,405,103 students</p>
                    <p>26 courses</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Card>
      );
    });

    return (
      <div
        className={
          classes.PopularAuthors
        } /*s tyle={{'backgroundColor':'yellow'}}*/
      >
        <div onClick={this.goBefore} className={styles["left-arrow"]}>
          <span class="fa fa-chevron-left"></span>
        </div>
        {authorsHTML}
        <div onClick={this.goAfter} className={styles["right-arrow"]}>
          <span class="fa fa-chevron-right"></span>
        </div>
      </div>
    );
  }
}

export default PopularAuthor;
