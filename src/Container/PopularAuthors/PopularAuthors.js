import React,{Component} from 'react';
import Card from '../../Components/Card/Card';
import classes from './PopularAuthors.css';
import styles from '../../index.css';
import {Link} from 'react-router-dom';

class PopularAuthor extends Component{
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }

    callMe = () =>{
        //console.log(this.myRef.current.clientWidth);
        console.log(this.inputElement.current.clientWidth);
        
    }


    render(){
        const authorsHTML = this.props.authors.map(el => {
            return (
                <Card myRef={this.inputElement} >
                    <Link to={'/author/1'/*+author.name*/}>
                        <div >
                            <img  src={require('../../Assets/AuthorImages/'+el.name.split(" ").join('').toLowerCase()+'.jpg')} alt="not available" />
                            {/*<img src={require('../../Assets/AuthorImages/jonasschmedtmann.jpg')} alt="not available" />*/}
                            <div className={classes.decoratingCard}>
                                <h3>{el.name}</h3>
                                <div>
                                    <div>
                                        {el.title}
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
            )
        }) 

        return(
            <div className={classes.PopularAuthors} style={{'backgroundColor':'yellow'}}>
                <div onClick={this.callMe} className={styles['left-arrow']}>
                   <span class="fa fa-chevron-left"></span>
                </div>
                {authorsHTML}
                <div className={styles['right-arrow']}>
                    <span class="fa fa-chevron-right" ></span>
                </div>
            </div>
        )
    }
}

export default PopularAuthor;