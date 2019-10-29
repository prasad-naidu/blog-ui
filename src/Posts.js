import React from "react"
import {Link} from "react-router-dom"
import axios from"axios"
import ItemPost from './show'
import { ListGroup, ListGroupItem ,Row, Col} from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

 class Posts extends React.Component{
     constructor(){
         super()
         this.state={
             posts:[],
             post:{}
             
                        }
                          }


    handleShow=(id)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            const post=response.data
            console.log(post)
            this.setState({post})

        })
    }

     componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
           const posts=response.data
         return  this.setState({posts})
        }) 

        

     }
     render(){
         return(<div className="container">
             <h2>Listing Posts</h2>
        
             <div>
             <Row>
                
            {this.state.posts.map(item=>{
                return (
                    
                    <Col sm="4" key={item.id}>
                    <Card >
                        
                        <CardBody>
                        <img  width="100%" height="5%" src="https://picsum.photos/200/300" />
                        <CardTitle>Title:-{item.title} </CardTitle>
                        <CardSubtitle>Body:-{item.body} </CardSubtitle>
                        
                        <Link to={`/posts/${item.id}`}> Read more</Link>
                        {/* <CardText> {post.title} </CardText>
                        <CardText> {post.body} </CardText> */}
                        
                        </CardBody>
                    </Card>
                        
                    </Col>                    
                
        )
        })}
            
            </Row>     
            </div>
            

         </div> )
     }
 }
 export default Posts