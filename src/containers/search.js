import React,{Component} from 'react';
import {connect}  from 'react-redux';
import { getCars } from '../actions';

import {bindActionCreators} from 'redux'; 

class Search extends Component{

    constructor(props){
        super(props);

        this.state={
            keyword:''
        }
    }

    searchCars = (event) =>{
        event.preventDefault();
        console.log('inside search function' , this.state);
        this.props.getCars(this.state.keyword);
    }

    handleChange = (event) =>{
        this.setState({
            keyword:event.target.value
        })
    }

    componentDidMount(){
        console.log(this.state);
    }
    render(){
        return(
            <div className="main-search">
                <form onSubmit={this.searchCars}>
                    <input type="text"  value={this.state.keyword} onChange={this.handleChange}/>
                </form>

            </div>
        )
    }
}
//mapStatetoProps get data from action/reducer
//mapdispatchToProps to send data 

function mapDispatchToProps(dispatch){
    return bindActionCreators({getCars},dispatch);
}

export default connect(null,mapDispatchToProps)(Search);