import React,{Component} from 'react';
import Card from '../../Components/Card/Card';
import classes from './PopularTopics.css';
import styles from '../../index.css';

class Populartopics extends Component {
    render(){
        return(
            <div className={classes.PopularTopics} style={{'background-color':'salmon'}}>
                <div className={styles['left-arrow']}>
                   <span class="fa fa-chevron-left"></span>
                </div>
                <Card>
                    <div>this is first div</div>
                    <div>this is 2nd</div>
                </Card>
                <Card>
                    <div>this is first div</div>
                    <div>this is 2nd</div>
                </Card>
                <Card>
                    <div>this is first div</div>
                    <div>this is 2nd</div>
                </Card>
                <Card>
                    <div>this is first div</div>
                    <div>this is 2nd</div>
                </Card>
                <Card>
                    <div>this is first div</div>
                    <div>this is 2nd</div>
                </Card>
                <div className={styles['right-arrow']}>
                    <span class="fa fa-chevron-right" ></span>
                </div>
            </div>
        )
    }
}

export default Populartopics;