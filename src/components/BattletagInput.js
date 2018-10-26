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
import actions from "../actions";
import { connect } from "react-redux";
import EmptyView from "../views/BtagInputView.js";

class InputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      battleTagInput: props.battleTag || "Oageoni#2192"
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSearch(event) {
    this.props.dvaStats(this.state.battleTagInput);
    this.props.owStats(this.state.battleTagInput);
  }
  render() {
    return (
      
      <InputGroup
        style={{ paddingTop: "35px", paddingLeft: "10px", width: "400px" }}
      >
        <Input
          name="battleTagInput"
          placeholder="Ex. battletag#1234"
          value={this.state.battleTagInput}
          onChange={this.handleChange}
        />
        <InputGroupAddon addonType="prepend">
          <Button onClick={this.handleSearch}>Search</Button>
        </InputGroupAddon>
      </InputGroup>
      
    );
  }
}
const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  actions
)(InputView);
