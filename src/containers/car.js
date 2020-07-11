import React,{Component} from 'react';
import  {connect} from 'react-redux';
import {carDetail} from '../actions';
import {bindActionCreators} from 'redux';

class Car extends Component{
    
    componentWillMount(){
        this.props.carDetail(this.props.match.params.id);
    }

    renderDetail=({detail})=>{
        if(detail){
            return detail.map((item)=>{
                return(
                    <div key={item.id} className="car_detail">
                        <img src={`/images/${item.image}`}/>
                        <div className="content">
                            <h2>{item.model}</h2>
                            <h2>{item.brand}</h2>
                            <h3>
                                {item.description}
                            </h3>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div>
                {this.renderDetail(this.props.cars)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('inside car.js ', state);
    return{
        cars:state.cars
    }
}


//to send the data "ID" to action
function mapDispatchToProps(dispatch){
    return bindActionCreators({carDetail},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Car);