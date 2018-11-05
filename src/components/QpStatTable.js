import React from "react";
import { Button } from "reactstrap";

class QpStatTable extends React.Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }
  isActive(name, winPercentage, gamesWon, weaponAccuracy, timePlayed) {
    if (this.props.active == name) {
      return { color: "primary" };
    }
    if (this.props.active == winPercentage) {
      return { color: "primary" };
    }
    if (this.props.active == gamesWon) {
      return { color: "primary" };
    }
    if (this.props.active == timePlayed) {
      return { color: "primary" };
    }
    if (this.props.active == weaponAccuracy) {
      return { color: "primary" };
    } else {
      return {};
    }
  }

  render() {
    const { chars, onSort } = this.props;
    return (
      <table class="table table-hover">
        <thead>
          <tr class="table-default">
            <th style={{ float: "center", paddingLeft: "100px" }}>
              <Button {...this.isActive("name")} onClick={e => onSort("name")}>
                Hero
              </Button>
            </th>
            <th>
              <Button
                {...this.isActive("winPercentage")}
                onClick={e => onSort("winPercentage")}
              >
                Win precentage
              </Button>
            </th>
            <th>
              <Button
                {...this.isActive("gamesWon")}
                onClick={e => onSort("gamesWon")}
              >
                Games won
              </Button>
            </th>
            <th>
              <Button
                {...this.isActive("timePlayed")}
                onClick={e => onSort("timePlayed")}
              >
                Time played
              </Button>
            </th>
            <th>
              <Button
                {...this.isActive("eliminationsPerLife")}
                onClick={e => onSort("eliminationsPerLife")}
              >
                Eliminations per life
              </Button>
            </th>
            <th>
              <Button
                {...this.isActive("weaponAccuracy")}
                onClick={e => onSort("weaponAccuracy")}
              >
                Weapon accuracy (%)
              </Button>
            </th>
          </tr>
        </thead>

        <tbody>
          {chars.map((char, index) => {
            return (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{char.name}</td>
                <td style={{ textAlign: "center" }}>{char.winPercentage}</td>
                <td style={{ textAlign: "center" }}>{char.gamesWon}</td>
                <td style={{ textAlign: "center" }}>{char.timePlayed}</td>
                <td style={{ textAlign: "center" }}>
                  {char.eliminationsPerLife}
                </td>
                <td style={{ textAlign: "center" }}>{char.weaponAccuracy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default QpStatTable;
