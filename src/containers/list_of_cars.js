import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class ListOfCars extends Component{

    constructor(props){
        super(props)

        this.state ={
            isHeading:true
        }
    }


    listOfCars = ({list})=>{
         if(list){
             return list.map((car)=>{
                 return(
                     <div>
                         <Link key={car.id} className="car_item" to={`/car/${car.id}`} >
                             <div className="left">
                                 <img src={`/images/${car.image}`}/>
                             </div>
                             <div className="right">
                                 <h3>{car.model}</h3>
                                 <h4>{car.brand}</h4>

                             </div>
                            
                         </Link>
                     </div>
                 )
            })
         }
    }
    render(){
        return(
            <div>

                {this.listOfCars(this.props.cars)}
            </div>
        )
    }
}

function mapStateToProps(state){
    
    console.log('inside listof cars ::: ', state);
    return{
        cars:state.cars
    }

}


export default connect(mapStateToProps,null) (ListOfCars);