import React from "react";
import { connect } from "react-redux";
import "./App.css";
import actions from "./actions";
import "typeface-roboto";
import { Border } from "./border.js";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tila: "1",
      searchText: "",
      battleTag: "Oageoni#2192"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSearch(event) {
    this.props.dvaStats(this.state.battleTag);
    this.props.owStats(this.state.battleTag);
  }
  handleClick(tila) {
    this.setState({
      tila: tila
    });
  }

  componentDidMount() {
    this.props.owStats(this.state.battleTag);
    this.props.dvaStats(this.state.battleTag);
  }

  sortWithKey(chars, key, asc = true) {
    return chars.sort((a, b) => {
      if (a[key] < b[key]) return asc ? -1 : 1;
      if (a[key] > b[key]) return asc ? 1 : -1;
    });
  }
  render() {
    const { owStat, dvaStat } = this.props;

    if (!owStat || !dvaStat) {
      return null;
    } else {
      const levelIcon = owStat.levelIcon;
      const prestigeIcon = owStat.prestigeIcon;
      const name = owStat.name;
      const level = owStat.level;
      const icon = owStat.icon;
      const ratingIcon = owStat.ratingIcon;
      const rating = owStat.rating;

      /*       let award = [];
      Object.keys(owStat.competitiveStats.awards).forEach(allMedals => {
        award.push({
          name: allMedals,
          ...owStat.competitiveStats.awards[allMedals]
        });
      });
      console.log(award); */
      let chars = [];
      if (dvaStat.competitiveStats && dvaStat.competitiveStats.topHeroes) {
        Object.keys(dvaStat.competitiveStats.topHeroes).forEach(charName => {
          chars.push({
            name: charName,
            ...dvaStat.competitiveStats.topHeroes[charName]
          });
        });
      }
      this.sortWithKey(chars, this.state.tila);
      return (
        <div className="background">
          <div className="App">
            <div className="header">
              <img
                src={icon}
                alt="icon"
                style={{ height: "100px", float: "left", margin: "1px" }}
              />

              <p
                style={{
                  fontSize: "25px",
                  margin: "4px",
                  fontStyle: "Impact",
                  fontWeight: "400",
                  aligment: "left",
                  color: "white",
                  float: "left",
                  textShadow: "2px 2px 4px #000000"
                }}
              >
                {name} <br />
                {level}
              </p>
              <div
                style={{
                  position: "absolute",
                  float: "left",
                  alligment: "center",
                  paddingLeft: "500px",
                  paddingTop: "40px"
                }}
              >
                <InputGroup>
                  <Input
                    name="battleTag"
                    placeholder="Ex. battletag-1234"
                    value={this.state.battleTag}
                    onChange={this.handleChange}
                  />
                  <InputGroupAddon addonType="prepend">
                    <Button onClick={this.handleSearch}>Search</Button>
                  </InputGroupAddon>
                </InputGroup>
              </div>
              <Border
                width="100"
                height="100"
                image1={levelIcon}
                image2={prestigeIcon}
                style={{ float: "left", zIndex: "-1" }}
              />

              <img
                src={ratingIcon}
                style={{ height: "100px", float: "left" }}
              />
            </div>

            <div
              class="container-fluid"
              style={{
                fontSize: "50px",
                fontStyle: "Impact",
                fontWeight: "400",
                alligment: "middle",
                color: "white",
                float: "middle",
                margin: "10px",
                textShadow: "2px 2px 4px #000000"
              }}
            >
              <div class="row">
                <div class="col-sm">
                  <p>
                    Season 12 <br />
                    {rating}
                    <br />
                  </p>
                </div>
              </div>
            </div>
            {/*      <div>
              <FormGroup>
                <Label for="Sort by">Sort by...</Label>
                <Input
                  name="tila"
                  type="select"
                  value={this.state.tila}
                  onChange={this.handleChange}
                >
                  <option value="name">Name</option>
                  <option value="winPrecentage">Win precentage</option>
                  <option value="timePlayed">Time played</option>
                </Input>
              </FormGroup>
            </div> */}

            <div>
              <table
                style={{
                  fontSize: "20px",
                  fontStyle: "Impact",
                  fontWeight: "300",
                  alligment: "left",
                  textAlign: "center",
                  color: "white",
                  float: "left",
                  textShadow: "2px 2px 4px #000000",
                  textTransform: "uppercase"
                }}
              >
                <thead>
                  <tr>
                    <th>
                      <Button onClick={e => this.handleClick("name")}>
                        Hero
                      </Button>
                    </th>
                    <th>
                      <Button onClick={e => this.handleClick("win precentage")}>
                        Win precentage
                      </Button>
                    </th>
                    <th>
                      <Button onClick={e => this.handleClick("games won")}>
                        Games won
                      </Button>
                    </th>
                    <th>
                      <Button onClick={e => this.handleClick("time played")}>
                        Time played
                      </Button>
                    </th>
                    <th>
                      <Button
                        onClick={e => this.handleClick("eliminations per life")}
                      >
                        Eliminations per life
                      </Button>
                    </th>
                    <th>
                      <Button
                        onClick={e => this.handleClick("weapon accuracy")}
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
                        <td style={{ textAlign: "center" }}>
                          {char.winPercentage}
                        </td>
                        <td style={{ textAlign: "center" }}>{char.gamesWon}</td>
                        <td style={{ textAlign: "center" }}>
                          {char.timePlayed}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {char.eliminationsPerLife}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {char.weaponAccuracy}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    owStat: state.app.owStat,
    dvaStat: state.app.dvaStat
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
