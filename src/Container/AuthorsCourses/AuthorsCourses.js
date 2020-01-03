import React, { Component } from 'react';
import Aux from '../../HOC/Auxilliary/Auxilliary';
//import classes from './ContentLayout.css';
import ContentHeader from '../../Components/ContentHeader/ContentHeader';
import classes from './AuthorsCourses.css'
import PopularTopics from '../PopularTopics/PopularTopics';
import PopularAuthors from '../../Container/PopularAuthors/PopularAuthors';
import axios from 'axios';
//import AuthorComponent from '../../Components/AuthorComponent/AuthorContainer';

class AuthorsCourses extends Component {
  /*state={
    authors:[
      {
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
      },
      {
        "name": "Maximilian Schwarzmüller",
        "title": "Web Developer, Designer, and Teacher",
        "social": {
          "website": "https://academind.com/",
          "twitter": "https://twitter.com/maxedapps",
          "youTube": "https://www.youtube.com/c/academind"
        },
        "description": {
          "intro": "Starting out at the age of 13 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.",
          "skills": "Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS 2 in a lot of projects. I love both worlds nowadays!",
          "important": "As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 700,000 students on Udemy as well as a successful YouTube channel is the best proof for that."
        },
        "topics": ["Angular", "React", "ReactHooks", "JavaScript"]
      },
      {
        "name": "Maximilian Schwarzmüller",
        "title": "Web Developer, Designer, and Teacher",
        "social": {
          "website": "https://academind.com/",
          "twitter": "https://twitter.com/maxedapps",
          "youTube": "https://www.youtube.com/c/academind"
        },
        "description": {
          "intro": "Starting out at the age of 13 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.",
          "skills": "Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS 2 in a lot of projects. I love both worlds nowadays!",
          "important": "As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 700,000 students on Udemy as well as a successful YouTube channel is the best proof for that."
        },
        "topics": ["Angular", "React", "ReactHooks", "JavaScript"]
      },
      {
        "name": "Maximilian Schwarzmüller",
        "title": "Web Developer, Designer, and Teacher",
        "social": {
          "website": "https://academind.com/",
          "twitter": "https://twitter.com/maxedapps",
          "youTube": "https://www.youtube.com/c/academind"
        },
        "description": {
          "intro": "Starting out at the age of 13 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.",
          "skills": "Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS 2 in a lot of projects. I love both worlds nowadays!",
          "important": "As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 700,000 students on Udemy as well as a successful YouTube channel is the best proof for that."
        },
        "topics": ["Angular", "React", "ReactHooks", "JavaScript"]
      },
      {
        "name": "Maximilian Schwarzmüller",
        "title": "Web Developer, Designer, and Teacher",
        "social": {
          "website": "https://academind.com/",
          "twitter": "https://twitter.com/maxedapps",
          "youTube": "https://www.youtube.com/c/academind"
        },
        "description": {
          "intro": "Starting out at the age of 13 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.",
          "skills": "Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS 2 in a lot of projects. I love both worlds nowadays!",
          "important": "As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses, more than 700,000 students on Udemy as well as a successful YouTube channel is the best proof for that."
        },
        "topics": ["Angular", "React", "ReactHooks", "JavaScript"]
      },
      {
        "name": "Stephen Grider",
        "title": "Engineering Architect",
        "social": {
          "twitter": "https://twitter.com/ste_grider",
          "youTube": "https://www.youtube.com/channel/UCQCaS3atWyNHEy5PkDXdpNg"
        },
        "description": {
          "intro": "Stephen Grider has been building complex Javascript front ends for top corporations in the San Francisco Bay Area.",
          "skills": "With an innate ability to simplify complex topics, Stephen has been mentoring engineers beginning their careers in software development for years, and has now expanded that experience onto Udemy, authoring the highest rated React course. He teaches on Udemy to share the knowledge he has gained with other software engineers.",
          "important": "Invest in yourself by learning from Stephen's published courses."
        },
        "topics": ["Angular", "JavaScript"]
      },
      {
        "name": "Stephen Grider",
        "title": "Engineering Architect",
        "social": {
          "twitter": "https://twitter.com/ste_grider",
          "youTube": "https://www.youtube.com/channel/UCQCaS3atWyNHEy5PkDXdpNg"
        },
        "description": {
          "intro": "Stephen Grider has been building complex Javascript front ends for top corporations in the San Francisco Bay Area.",
          "skills": "With an innate ability to simplify complex topics, Stephen has been mentoring engineers beginning their careers in software development for years, and has now expanded that experience onto Udemy, authoring the highest rated React course. He teaches on Udemy to share the knowledge he has gained with other software engineers.",
          "important": "Invest in yourself by learning from Stephen's published courses."
        },
        "topics": ["Angular", "JavaScript"]
      },
      {
        "name": "Stephen Grider",
        "title": "Engineering Architect",
        "social": {
          "twitter": "https://twitter.com/ste_grider",
          "youTube": "https://www.youtube.com/channel/UCQCaS3atWyNHEy5PkDXdpNg"
        },
        "description": {
          "intro": "Stephen Grider has been building complex Javascript front ends for top corporations in the San Francisco Bay Area.",
          "skills": "With an innate ability to simplify complex topics, Stephen has been mentoring engineers beginning their careers in software development for years, and has now expanded that experience onto Udemy, authoring the highest rated React course. He teaches on Udemy to share the knowledge he has gained with other software engineers.",
          "important": "Invest in yourself by learning from Stephen's published courses."
        },
        "topics": ["Angular", "JavaScript"]
      },
      {
        "name": "Stephen Grider",
        "title": "Engineering Architect",
        "social": {
          "twitter": "https://twitter.com/ste_grider",
          "youTube": "https://www.youtube.com/channel/UCQCaS3atWyNHEy5PkDXdpNg"
        },
        "description": {
          "intro": "Stephen Grider has been building complex Javascript front ends for top corporations in the San Francisco Bay Area.",
          "skills": "With an innate ability to simplify complex topics, Stephen has been mentoring engineers beginning their careers in software development for years, and has now expanded that experience onto Udemy, authoring the highest rated React course. He teaches on Udemy to share the knowledge he has gained with other software engineers.",
          "important": "Invest in yourself by learning from Stephen's published courses."
        },
        "topics": ["Angular", "JavaScript"]
      }
    ],
    categories:[
      {
        "category": "Development",
        "sub-category": "Web Development",
        "topics": ["JavaScript", "Angular", "React", "CSS", "HTML5", "VueJS"]
      },
      {
        "category": "Development",
        "sub-category": "Data Science",
        "topics": [
          "Machine Learning",
          "Python",
          "Deep Learning",
          "Data Analysis",
          "Artificial Intelligence"
        ]
      },
      {
        "category": "Development",
        "sub-category": "Mobile Apps",
        "topics": [
          "Android Development",
          "iOS Development",
          "Google Flutter",
          "Swift"
        ]
      },
      {
        "category": "IT & Software",
        "sub-category": "IT Certification",
        "topics": ["AWS Certification", "Cisco CCNA"]
      },
      {
        "category": "IT & Software",
        "sub-category": "Network & Security",
        "topics": ["Ethical Hacking", "Cyber Security", "Network Security"]
      },
      {
        "category": "IT & Software",
        "sub-category": "Operating Systems",
        "topics": ["Linux", "Windows Server"]
      }
    ],
    headerInfo:null,
    authorID:null
  }*/

  state={
    authors:[],
    categories:[]
  }

  myName = () => {
    let arr = [];
    arr.push(this.state.categories.map(el => {
       return el["sub-category"];
    }));
    this.setState({headerInfo:arr});
    
  }

  componentDidMount = () =>{
    axios.get('../../../testdata/authors/authors.json').then((res) => {
      this.setState({authors:res.data})
      console.log(res.data)
    });

    axios.get('../../../testdata/categories/categories.json').then((res) => {
      this.setState({categories:res.data})
      console.log(res.data)
    });
}

  showAuthorHandle = (id) => {
    let author =this.state.authors.find(author => author.name === id);
    console.log(author.name);
    if(author){
      this.setState({AuthorID:author});
     }
  }
  
  render() {
    let authorsCoursesHTML = null;
    if((this.state.categories.length > 0) && (this.state.authors.length > 0)){
      authorsCoursesHTML = (
        <Aux>
            <ContentHeader categories={this.state.categories} />
            {/*<div>
                <ContentHeader categories={this.state.categories} />
                    <button onClick={this.myName}>Press me</button>
                    <button onClick={this.showMe}>Show me</button>
                <div className={classes.popularTopics}>
                    <h4 className={classes.nullifyAll}>Popular topics</h4>
                    <PopularTopics categories={this.state.categories} />
                </div>
                <div className={classes.wholeContent}>
                    <h4>Popular Instructors</h4>
                    <PopularInstructors authors={this.state.authors} activateAuthor={(id) => this.showAuthorHandle(id)}/>
                </div>
            </div>};*/}
            <div className={classes.AuthorsCourses}>
              <div /*style={{'backgroundColor':'yellow'}}*/>
                  <h2>Popular topics</h2>
                  <PopularTopics categories={this.state.categories}/>
              </div>
              <div style={{/*'backgroundColor':'pink',*/'marginTop':'30px'}}>
                  <h2>Popular Instructors</h2>
                  <PopularAuthors authors={this.state.authors} />
              </div>
            </div>
            
        </Aux>

      )
    }
    return (
      <Aux>         
            {authorsCoursesHTML}
      </Aux>
        
    );
  }
}

export default AuthorsCourses;