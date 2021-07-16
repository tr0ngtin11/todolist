import './Todo.css';
import React from 'react'
 
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id:props.id , value:props.value, done:props.done,level:props.level};
  }

  handleComplete = ()=>{
    this.setState({done:true})
    this.props.handleComplete(this.props.id)
  }


  render() {
let checkDone = '';
if(!this.state.done){
  checkDone =  <i onClick={()=> this.handleComplete(this.props.id)} className="fa fa-check" aria-hidden="true"></i>
}

let elementLevel = <span class="badge badge-primary">Primary</span>
if(this.props.level ==0){
  elementLevel = <span class="badge badge-success loca">Small</span>
}
else if(this.props.level ==1){
  elementLevel = <span class="badge badge-warning loca">Medium</span>
}
else{
  elementLevel = <span class="badge badge-danger loca">High</span>
}

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {/* <i onClick={()=> this.handleComplete(this.props.id)} className="fa fa-check" aria-hidden="true"></i> */}
        {checkDone}
      <span className={this.state.done?'done mx-auto':''}>{this.props.value}</span>
      {elementLevel}
      <i onClick={()=> this.props.handleDelete(this.props.id) }  className="fa fa-trash-o delete "></i>
      </li> 
    );

  }
}



export default Todo;
