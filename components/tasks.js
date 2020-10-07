import React from 'react'
import {useSelector} from 'react-redux'
import {Alert} from 'reactstrap'
import 'font-awesome/css/font-awesome.min.css';
import { connect } from "react-redux"
import { deleteFunction } from "../src/actions/sampleAction"
import { doneFunction } from "../src/actions/sampleAction"
import { Link } from "gatsby"
import './styles/tasks.css'

const Tasks = (props) => {
    const data = useSelector((state)=> state.data)
    const tasks = data.map((element, index) => {
        return(
            <div className="container">
                <Alert className="alert" color={element.done?"danger":"success"} id={index}>
                    {element.data}
                    <div className="icones">
                        <Link to="/map" state={{"lat": element.lat, "lng": element.lng}}><i className="fa fa-map-marker m-1" aria-hidden="true"></i></Link>
                        <i onClick={() => props.doneFunction(element.id)} className={element.done?"fa fa-minus-circle m-1":"fa fa-plus-circle  m-1"} id={index} aria-hidden="true"></i>
                        <i onClick={() => props.deleteFunction(element.id)} className="fa fa-trash m-1" id={index} aria-hidden="true"></i>
                    </div>
                </Alert>
            </div>
        )
    });
    return data.length > 0?<>{tasks}</>:<div></div>;
}

const mapStateToProps = state => ({
    add: state.data.add,
    delete: state.data.delete
  })

export default connect(mapStateToProps, { deleteFunction, doneFunction })(Tasks)