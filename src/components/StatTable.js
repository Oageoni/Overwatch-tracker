import React from "react";
import { Button } from "reactstrap";

class StatTable extends React.Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }
  isActive(name, winPercentage, gamesWon, weaponAccuracy, timePlayed) {
    if (this.props.active == name) {
      return { color: "info" };
    }
    if (this.props.active == winPercentage) {
      return { color: "info" };
    }
    if (this.props.active == gamesWon) {
      return { color: "info" };
    }
    if (this.props.active == timePlayed) {
      return { color: "info" };
    }
    if (this.props.active == weaponAccuracy) {
      return { color: "info" };
    } else {
      return {};
    }
  }

  render() {
    const { chars, onSort } = this.props;
    return (
      <table
        style={{
          fontSize: "20px",
          fontStyle: "Impact",
          fontWeight: "300",
          alligment: "center",
          textAlign: "center",
          color: "white",
          float: "center",
          textShadow: "2px 2px 4px #000000",
          textTransform: "uppercase"
        }}
      >
        <thead>
          <tr>
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

export default StatTable;
