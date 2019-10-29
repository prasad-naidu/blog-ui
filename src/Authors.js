import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import { ListGroup, ListGroupItem } from 'reactstrap';


class Authors extends React.Component{
  constructor(props){
      super(props)
      this.state={
          authors:[]
        }
  }
  componentDidMount(){
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response=>{
          const authors=response.data
          this.setState({authors})
      })
  }

    render(){
        return(<div className="container">
            <h2>Listing Authors</h2>
        <ul>
            <ListGroup>
         {this.state.authors.map(author=>{
             return <li key={author.id}> <ListGroupItem ><Link to={`/authors/${author.id}`}>{author.name} </Link>
             </ListGroupItem> 
             </li>
         })}
         </ListGroup>
        </ul>
        </div>)
    }
} 
export default Authors
