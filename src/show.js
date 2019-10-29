
import React from "react"
import axios from "axios"
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';

class Show extends React.Component{
  constructor (){
    super()
    this.state={
      post:{}
    }
  }

 componentDidMount(){
   const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then(response=>{
          const post=response.data
         this.setState({post})
    })
 }

render(){
     return(
             <div className="container" >
               <div className="jumbotron text-centre">
               <Card>
                 <CardBody>
                  <CardText> title:-{this.state.post.title}</CardText>
                  <CardSubtitle> body:-{this.state.post.body}</CardSubtitle>
                 </CardBody>
              </Card>    
              </div>
            </div>)
}


}
export default Show