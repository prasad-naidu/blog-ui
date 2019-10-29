import React from "react"
import {Link} from "react-router-dom"
import { ListGroup, ListGroupItem ,Jumbotron} from 'reactstrap';

//import Axios from "axios";
 
class AuthorShow extends React.Component{
    constructor(props){
        super(props)
        this.state={posts:[],
                    authors:{}  }
    }
    componentDidMount=()=>{
        const id=this.props.match.params.id
        console.log(id)
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            return response.json()
        })
        .then(authors=>{
            this.setState({authors})
        })
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response=>{
            return response.json()
        })
        .then(posts=>{
            this.setState({posts})
        })
    }
        
    
    render(){
        return( <div className="container">  
            <Jumbotron>         
            <h2 className="display-3">Author:-{this.state.authors.username} </h2>
            <p className="lead">Email:-{this.state.authors.email} </p>
            </Jumbotron>
             <h2>listing posts</h2>
              <ul>
                   <ListGroup>
                             {this.state.posts.map(post=>{
                                 return <li key={post.id} ><ListGroupItem> <Link to={`/posts/${post.id}`}>{post.title}</Link></ListGroupItem> </li>
                             })} 
                    </ListGroup>                      
                         </ul>  
            
        </div>)
    }
}
export default AuthorShow