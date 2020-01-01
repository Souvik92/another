import React,{Component} from 'react';
import Card from '../../Components/Card/Card';
import classes from './PopularAuthors.css';
import styles from '../../index.css';
import {Link} from 'react-router-dom';

class PopularAuthor extends Component{
    render(){
        return(
            <div className={classes.PopularAuthors} style={{'backgroundColor':'yellow'}}>
                <div className={styles['left-arrow']}>
                   <span class="fa fa-chevron-left"></span>
                </div>
                <Card>
                    <Link to={'/author/1'/*+author.name*/}>
                        <div>

                        {/*<img src={require('../../../images/tutors/'+props.author.name.split(" ").join('').toLowerCase()+'.jpg')} alt="not available" />*/}
                            <img src={require('../../Assets/AuthorImages/jonasschmedtmann.jpg')} alt="not available" />
                            <div className={classes.decoratingCard}>
                                <h3>Alex </h3>
                                <div>
                                    <div>
                                        Python,machineLearning,khsvds
                                    </div>
                                    <div>
                                        <p>1,405,103 students</p>
                                        <p>26 courses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Card>
                <Card>
                    <div>
                        this is 
                    </div>
                </Card>
                <Card>
                    <div>
                        this is 
                    </div>
                </Card>
                <Card>
                    <div>
                        this is 
                    </div>
                </Card>
                <Card>
                    <div>
                        this is 
                    </div>
                </Card>
                <div className={styles['right-arrow']}>
                    <span class="fa fa-chevron-right" ></span>
                </div>
            </div>
        )
    }
}

export default PopularAuthor;