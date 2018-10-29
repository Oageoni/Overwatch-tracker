import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import actions from "../actions";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs activeStyle={{ color: "red" }}>
          <NavItem>
            <NavLink
              className={classnames({ active: this.props.selected === 0 })}
              onClick={() => {
                this.props.onChange(0);
                return { color: "rgb(167, 204, 240)" };
              }}
            >
              Competitive
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.props.selected === 1 })}
              onClick={() => {
                this.props.onChange(1);
                return { color: "info" };
              }}
            >
              Quick play
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
