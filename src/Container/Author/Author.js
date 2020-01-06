import React, { Component } from "react";
import classes from "./Author.css";
import axios from "axios";
import jsonItem from "../../testdata/author/1.json";
/*import  from "../../HOC/illiary/illiary";*/

class Author extends Component {
  /*state={
        author:{
            "name": "Jonas Schmedtmann",
            "title": "Academind by Maximilian Schwarzmüller",
            "social": {
              "website": "http://jonas.io/",
              "twitter": "https://twitter.com/jonasschmedtman"
            },
            "description": {
              "intro": "Hi, I'm Jonas! I have been identified as one of Udemy's Top Instructors and all my premium courses have recently earned the best-selling status for outstanding performance and student satisfaction.",
              "skills": "I'm a full-stack web developer and designer with a passion for building beautiful things from scratch. I've been building websites and apps since 2007 and also have a Masters degree in Engineering.",
              "important": "Do you want to learn how to build awesome websites with advanced HTML and CSS? Looking for a complete JavaScript course that takes you from beginner to advanced developer?"
            },
            "topics": ["JavaScript", "CSS"]
        }
    }*/

  /*componentWillMount = () => {
        axios.get('../../../testdata/author/1.json').then((res) => {
            this.setState({author:res.data})
            console.log(this.state.author);
        });
    }*/
  state = {
    author: null
  };

  componentDidMount = () => {
    axios.get("../../../testdata/authors/authors.json").then(res => {
      let author = res.data.find(el => {
        console.log(
          el.name
            .split(" ")
            .join("")
            .toLowerCase()
        );
        return (
          el.name
            .split(" ")
            .join("")
            .toLowerCase() === this.props.match.params.id
        );
      });
      if (author) {
        this.setState({ author: author });
      }
    });
  };

  render() {
    const getIcons = () => {
      let arrKeys = Object.keys(this.state.author.social);
      let arrItems = arrKeys.map(el => {
        if (el.toLowerCase() === "website") {
          return (
            <a key={el} href={this.state.author.social[el]}>
              <i
                className="fa fa-globe"
                style={{ fontSize: "24px", color: "#007791" }}
              ></i>
            </a>
          );
        } else if (el.toLowerCase() === "twitter") {
          return (
            <a key={el} href={this.state.author.social[el]}>
              <i
                className="fa fa-twitter"
                style={{ fontSize: "24px", color: "#007791" }}
              ></i>
            </a>
          );
        } else if (el.toLowerCase() === "youtube") {
          return (
            <a key={el} href={this.state.author.social[el]}>
              <i
                className="fa fa-youtube"
                style={{ fontSize: "24px", color: "#007791" }}
              ></i>
            </a>
          );
        } else {
          return (
            <a key={el} href={this.state.author.social[el]}>
              <i
                className="fa fa-facebook"
                style={{ fontSize: "24px", color: "#007791" }}
              ></i>
            </a>
          );
        }
      });
      return arrItems;
    };

    let authorHTML = null;

    if (this.state.author) {
      authorHTML = (
        <>
          <header>
            <div>
              <h1>{this.state.author.name}</h1>
              <h2>{this.state.author.title}</h2>
            </div>
          </header>
          <div>
            <div>
              <aside>
                <img
                  src={require("../../Assets/AuthorImages/" +
                    this.state.author.name
                      .split(" ")
                      .join("")
                      .toLowerCase() +
                    ".jpg")}
                  alt="not available"
                />
                <div>{getIcons()}</div>
              </aside>
            </div>
            <div>
              <article>
                <p>{this.state.author.description.intro}</p>
                <p>{this.state.author.description.skills}</p>
                <p>{this.state.author.description.important}</p>
              </article>
              <footer>
                <div>
                  <h3>Total students</h3>
                  <p>680,272</p>
                </div>
                <div>
                  <h3> Courses</h3>
                  <p>9</p>
                </div>
                <div>
                  <h3> Reviews</h3>
                  <p>211.447</p>
                </div>
              </footer>
            </div>
          </div>
        </>
      );
    }

    return <div className={classes.Author}>{authorHTML}</div>;
  }
}

export default Author;
