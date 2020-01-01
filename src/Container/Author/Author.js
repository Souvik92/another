import React,{Component} from 'react';
import classes from './Author.css';

class Author extends Component{
    state={
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
    }
    render(){
        return(
            <div className={classes.Author}>
                    <header>
                        <div>
                            <h1>{this.state.author.name}</h1>
                            <h2>{this.state.author.title}</h2>
                        </div>                    
                    </header>
                    <div>
                        
                    </div>             
            </div>
        )
    }
}

export default Author;