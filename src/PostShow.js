import React from "react"
import {Link} from "react-router-dom"
import axios from "axios";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';
class PostShow extends React.Component{
    constructor(props){
        super(props)
        this.state={posts:{},authors:{}}
    }
    componentDidMount(){
        const id=this.props.match.params.id
        console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then(response=>{
             this.setState({posts:response.data})
             
         
         let authorId=this.state.posts.userId
         console.log(authorId)
         axios.get(`https://jsonplaceholder.typicode.com/users/${authorId}`)
         .then(response=>{
             this.setState({authors:response.data})
         })
        })
    }
    render(){
        return(<div className="container">  
         <Card>
             
             <CardTitle> <h2> <Link to={`/authors/${this.state.authors.id}`}>name-{this.state.authors.name} </Link></ h2></CardTitle>
            <CardText> <h2> title-{this.state.posts.title} </h2></CardText>
            <CardSubtitle>  <h2> body-{this.state.posts.body} </h2></CardSubtitle>
            
         </Card>
        </div>)
    }
}
export default PostShow