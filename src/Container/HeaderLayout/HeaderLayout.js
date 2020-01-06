import React, { Component } from 'react';
import classes from './HeaderLayout.css';
import {Link} from 'react-router-dom'


class HeaderLayout extends Component {
  render() {
    return (
    <div className={classes.HeaderLayout}>
    <div>
      <div>
        <div>
          <Link to={"/"}>
            <img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" alt="udemy logo" style={{width:"110px",height:"32px"}} />
          </Link>
        </div>
        
         { /*<div>Hi from header layout</div>**/}
      </div>
      <div>
          <div>
            <i className="fa fa-tasks"></i>
            <span>Categories</span>
          </div>          
      </div>
      <div>
          <div className={classes.inputClass}>
            {/*<form action="/action_page.php">*/}
            <input type="search" name="q" />
            <Link to='/'>
            <span>
              {/*<Link>*/}
                <i class="fa fa-search"></i>
              {/*</Link>*/}
            </span>
            </Link>
          {/*</form>*/}
          </div>          
      </div>
      <div>
          <div>
            <Link to='/'>Udemy for Business</Link>
          </div>          
      </div>
      <div>
          <div>
            <Link to='/'>Teach on Udemy</Link>
          </div>    
      </div>
      <div>
          <div>
            <Link to='/'>My courses</Link>
          </div> 
      </div>
      <div className={classes.cartArea}>
        <div>
          <span>
            <Link to='/'><i className="fa fa-shopping-cart"></i></Link>
          </span>
          <Link to='/'>Login</Link>
          <Link to='/'>SignUp</Link>
        </div> 
      </div>
    </div>
    </div>
    );
  }
}

export default HeaderLayout;