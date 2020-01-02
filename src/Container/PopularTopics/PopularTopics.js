import React,{Component} from 'react';
import Card from '../../Components/Card/Card';
import classes from './PopularTopics.css';
import styles from '../../index.css';

class Populartopics extends Component {
    render(){
        
        const elements = [];
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
        });

        let finalHTML = elHTML.map(elements =>{
            return (
                <Card>
                    <div>{elements[0]}</div>
                    <div>{elements[1]}</div>
                </Card>
            )
        })



        return(
            <div className={classes.PopularTopics}>
                <div className={styles['left-arrow']}>
                   <span className="fa fa-chevron-left"></span>
                </div>
                {finalHTML}
                <div className={styles['right-arrow']}>
                    <span className="fa fa-chevron-right" ></span>
                </div>
            </div>
        )
    }
}

export default Populartopics;