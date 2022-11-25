import './App.css'

// Replace your code here
/* eslint-disable prettier/prettier */
import {Component} from "react";

class App extends Component {
    state={text:"",isSaved:false}

    changeInput=(event)=>{
        this.setState({text:event.target.value})
    }

save = ()=>{
    this.setState({isSaved:true})
}

edit = ()=>{
    this.setState({isSaved:false})
}


    render(){
        const {text,isSaved}=this.state
        return(
            <>
            <h1>Editable Text Input</h1>
        {isSaved ? <p>{text}</p> :<input type="text" value={text} onChange={this.changeInput}/>}
        {isSaved?
        <button type="button" onClick={this.edit}>Edit</button>:
        <button type="button" onClick={this.save}>Save</button>}
        
        </>
        )
    }
} 

export default App
