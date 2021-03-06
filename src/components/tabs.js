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
      activeTab: "Competitive"
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
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.props.selected === 0 })}
              onClick={() => {
                this.props.onChange(0);
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
