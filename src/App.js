import React from 'react';
import classes from'./App.css';
import {Route,BrowserRouter} from 'react-router-dom';
import Layout from '../src/Container/Layout/Layout';
import AuthorsCourses from '../src/Container/AuthorsCourses/AuthorsCourses';
import Author from '../src/Container/Author/Author'

function App() {  
  return (
    <div>
      <div className={classes.App}> 
          <BrowserRouter>
            <Layout>
              <Route path="/" exact component={AuthorsCourses}/>
              <Route path="/author/:id" component={Author}/>
              {/*<Route path="/" exact component={}/>*/}

            </Layout>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
