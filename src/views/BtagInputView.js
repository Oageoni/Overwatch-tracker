import React from "react";
import {
  FormGroup,
  Input,
  Label,
  Button,
  Form,
  FormText,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import InputView from "../components/BattletagInput.js";

class EmptyView extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="darkbox">
          <div className="col-md-11" style={{ float: "top" }}>
            <div className="row">
            <p style={{    margin: "auto",
              width: "100%",
              heigth: "70%",
              padding: "5px",
              paddingLeft: "90px",
              paddingTop: "200px",
              position: "sticky",
              top: "0"}}>Enter a Battle.net Tag</p>
            </div>
          </div>
          <div
            col-md-2
            style={{
              margin: "auto",
              width: "30%",
              heigth: "70%",
              padding: "2px",
              paddingTop: "10px",
              position: "sticky",
              top: "0"
            }}
          >
            <InputView />
          </div>
        </div>
      </div>
    );
  }
}
export default EmptyView;
