import React, {useState} from 'react'
import {Form, Button, FormGroup, Input, Row, Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from "react-redux"
import { addFunction } from "../src/actions/sampleAction"
import './styles/form.css'

const Formulario = (props) => {
    var [input ,handleInput] = useState("");
    var handle = (e) => {handleInput(e.target.value)};
    var handleSub = async (e) => { 
        var lng, lat;
        e.preventDefault();
        if ("geolocation" in navigator)
        {            
            navigator.geolocation.getCurrentPosition(async position=>{
                lng = position.coords.longitude;
                lat = position.coords.latitude;
                if (input.length > 0) { props.addFunction({"data": input, "lat": lat, "lng": lng})}
                input = await "";
            }); 
        }
        e.target.reset();
    }
    return (
        <div className="container">
            <h1 className="title">List of task</h1>
            <Form onSubmit={handleSub} className="form">
                <Row form>
                    <Col md={10} sm={12}>
                        <FormGroup>
                            <Input onChange={handle} type="text" name="task" id="task" placeholder="task to do" />
                        </FormGroup>
                    </Col>
                    <Col md={2} sm={12}>
                        <Button color="success" className="button-form" type="submit">
                            +
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
const mapStateToProps = state => ({
    add: state.data.add,
    delete: state.data.delete
  })
  
export default connect(mapStateToProps, { addFunction })(Formulario)
  