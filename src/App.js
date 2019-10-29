import React from 'react';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
import Posts from "./Posts"
import Authors from "./Authors"
import AuthorShow from "./AuthorShow"
import PostShow from "./PostShow"
import Show from "./show"

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function App(props) {
  return (<BrowserRouter>  <div>
          
      <Breadcrumb>
                  <BreadcrumbItem active> 
                  <Link to="/posts"> post  </Link>  
                  <Link to="/authors" > Authors  </Link>
                   </BreadcrumbItem>
      </Breadcrumb>
       <Switch>
       
       <Route path="/posts" component={Posts} exact={true}/>
       <Route path="/authors" component={Authors} exact={true}/>
       <Route path="/authors/:id" component={AuthorShow}/>
       <Route path="/posts/:id" component={Show} />
       <Route path="/posts/:id" component={PostShow} />
       </Switch>
         </div></BrowserRouter>
  
  );
}

export default App;
