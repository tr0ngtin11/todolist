import './App.css';
import React from 'react'
import Todo from './Todo'
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      taskName: '',
      level : '',
      ArrayTask : [],
      isEmty: true
  };
  }
  handleChange = (event) => {
      this.setState({taskName: event.target.value})
    }
   
      
    handleKeyPress = (e) =>{
      if(e.key === 'Enter'){
        if( this.state.taskName === ''){
          return;
        }
        const id = this.state.ArrayTask.length;
        const name = this.state.taskName;
        this.state.ArrayTask.push({id,name,done: false} )
        this.setState({taskName: '',isEmty: false})
        e.preventDefault()
      }
    }

  



  addTask = () => {
    if( this.state.taskName === ''){
      return;
    }

      const id = this.state.ArrayTask.length;
      const name = this.state.taskName;
      const level = this.state.level;
      this.state.ArrayTask.push({id,name,done: false,level} )
      this.setState({taskName: '',isEmty: false})
     
    
    console.log(this.state.ArrayTask)
  }

  handleDelete = (id) =>{
    const tasks = this.state.ArrayTask.filter((element)=> element.id !== id)
    this.setState({ArrayTask: tasks})
    if(tasks.length < 1){
      this.setState({isEmty:true})
    }
  }
  
  handleComplete = (id) =>{
    const tasks =  this.state.ArrayTask
    tasks.forEach(element=>{
      if(element.id === id){
        element.done = true;
      }
    })
    this.setState({ArrayTask : tasks});
  }
  
  handleChoose = (e) => {
    this.setState({level: e.target.value});
  }

  handleSort = () =>{
   let TasksSorted = this.state.ArrayTask.sort((a, b) => b.level - a.level)
   this.setState({ArrayTask : TasksSorted})
     
  }



  render() {
    let Showbtn = '';
    if (!this.state.isEmty){
      Showbtn = <button type="button" class="btn btn-primary" onClick={this.handleSort}>Sắp xếp</button>
    }
   
    return (
      <div className="container">
          <header className="text-center text-light my-4">
              <h1 className="mb-4">Todo List</h1>
              <form action="" className="search ">
              <i  className="fa fa-search icon "></i>
                  <input type="text" className="form-control input-field m-auto " placeholder="search todos" />
              </form>
          </header>
          <ul className="list-group todos mx-auto text-light">
          {this.state.ArrayTask.map((element) => 
     <Todo key={element.id}
      id={element.id} 
      value={element.name} 
      handleDelete={this.handleDelete}
      handleComplete={this.handleComplete} 
      done={element.done}
      level={element.level}
      />
    )
    }
          
          </ul>
         
           {Showbtn}
          
          <form  className="add text-center my-4">
              <label className="text-light">
                  Add new Task...
              </label>
              <input type="text" value={this.state.taskName}  className="form-control m-auto" name="content" onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder="add task"/>
              <i className="fa fa-plus right-input" aria-hidden="true" onClick={this.addTask} ></i>
              <div className="form-group col-4  ">
                <select className="form-control location" value={this.state.value} onChange={this.handleChoose}>
                    <option value="0">Small</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                  </select>
              </div>
              
          </form>
      </div>
    );

  }
}



export default App;
