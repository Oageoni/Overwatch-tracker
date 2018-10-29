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
import InputView from "./components/BattletagInput.js";
import StatTable from "./components/StatTable.js";
import EmptyView from "./views/BtagInputView";
import Tabs from "./components/tabs";
import QpStatTable from "./components/QpStatTable";

const SortTypes = {
  name: "string",
  winPercentage: "number",
  gamesWon: "number",
  timePlayed: "time",
  eliminationsPerLife: "float",
  weaponAccuracy: "number"
};

function parseTimes(time) {
  let value = null;
  if (time.match(/hours$/)) {
    value = parseInt(time.replace(/ hours$/, "")) * 60;
  }
  if (time.match(/minutes$/)) {
    value = parseInt(time.replace(/ minutes$/, ""));
  }
  return value;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tila: "name",
      lastTila: "name",
      searchText: "",
      asc: false,
      battleTag: props.battleTag || "Oageoni#2192",
      battleTagInput: props.battleTag || "Oageoni#2192",
      tab: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    if (state.battleTag !== props.battleTag) {
      props.dvaStats(props.battleTag);
      props.owStats(props.battleTag);
      return {
        battleTag: props.battleTag,
        battleTagInput: props.battleTag
      };
    } else {
      return null;
    }
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
  handleClick(tila) {
    if (this.state.lastTila == tila) {
      this.setState({
        tila: tila,
        asc: !this.state.asc
      });
    } else {
      this.setState({
        tila: tila,
        lastTila: tila
      });
    }
  }

  handleTabChange(activeTab) {
    this.setState({ tab: activeTab });
  }

  componentDidMount() {
    this.props.owStats(this.state.battleTag);
    this.props.dvaStats(this.state.battleTag);
  }

  sortWithKey(chars, key, asc = true) {
    console.log(key, SortTypes[key]);
    if (SortTypes[key] == "string") {
      return chars.sort((a, b) => {
        if (a[key] < b[key]) return asc ? 1 : -1;
        if (a[key] > b[key]) return asc ? -1 : 1;
      });
    }
    if (SortTypes[key] == "number") {
      return chars.sort((a, b) => {
        let na = parseInt(a[key]);
        let nb = parseInt(b[key]);
        if (na < nb) return asc ? -1 : 1;
        if (na > nb) return asc ? 1 : -1;
      });
    }
    if (SortTypes[key] == "float") {
      return chars.sort((a, b) => {
        let na = parseFloat(a[key]);
        let nb = parseFloat(b[key]);
        if (na < nb) return asc ? -1 : 1;
        if (na > nb) return asc ? 1 : -1;
      });
    }
    if (SortTypes[key] == "time") {
      return chars.sort((a, b) => {
        let na = parseTimes(a[key]);
        let nb = parseTimes(b[key]);

        if (na < nb) return asc ? -1 : 1;
        if (na > nb) return asc ? 1 : -1;
      });
    }
  }

  render() {
    const { owStat, dvaStat } = this.props;

    if (!owStat || !dvaStat) {
      return <EmptyView />;
    } else {
      const levelIcon = owStat.levelIcon;
      const prestigeIcon = owStat.prestigeIcon;
      const name = owStat.name;
      const level = owStat.level;
      const icon = owStat.icon;
      const ratingIcon = owStat.ratingIcon;
      const rating = owStat.rating;

      let chars = [];
      if (dvaStat.competitiveStats && dvaStat.competitiveStats.topHeroes) {
        Object.keys(dvaStat.competitiveStats.topHeroes).forEach(charName => {
          chars.push({
            name: charName,
            ...dvaStat.competitiveStats.topHeroes[charName]
          });
        });
      }
      let qpChars = [];
      if (dvaStat.quickPlayStats && dvaStat.quickPlayStats.topHeroes) {
        Object.keys(dvaStat.quickPlayStats.topHeroes).forEach(charName => {
          qpChars.push({
            name: charName,
            ...dvaStat.quickPlayStats.topHeroes[charName]
          });
        });
      }
      this.sortWithKey(qpChars, this.state.tila, this.state.asc);
      this.sortWithKey(chars, this.state.tila, this.state.asc);
      return (
        <div className="background">
          <div className="App">
            <div className="header">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-sm-1">
                    <img
                      src={icon}
                      alt="icon"
                      style={{ height: "100px", float: "left", margin: "1px" }}
                    />
                  </div>
                  <div class="col-sm-1">
                    <p
                      style={{
                        fontSize: "25px",
                        margin: "4px",
                        fontStyle: "Impact",
                        fontWeight: "400",
                        aligment: "left",
                        color: "white",
                        left: "10px",
                        top: "1px",
                        position: "absolute",
                        textShadow: "2px 2px 4px #000000",
                        textTransform: "uppercase"
                      }}
                    >
                      {name}
                    </p>
                    <div col-sm-6 style={{ paddingTop: "20px" }}>
                      <Border
                        width="100"
                        height="100"
                        image1={levelIcon}
                        image2={prestigeIcon}
                        style={{
                          marginTop: "30px",
                          paddingTop: "40px",
                          position: "absolute"
                        }}
                      />

                      <p
                        style={{
                          fontSize: "25px",
                          margin: "4px",
                          fontStyle: "Impact",
                          fontWeight: "400",
                          aligment: "left",
                          color: "white",
                          left: "40%",
                          top: "5px",
                          position: "absolute",
                          textShadow: "2px 2px 4px #000000",
                          textTransform: "uppercase",
                          zIndex: "-1"
                        }}
                      >
                        <br />
                        {level}
                      </p>
                    </div>
                  </div>
                  <div
                    class="col-sm-6"
                    style={{
                      position: "absolute",
                      float: "left",
                      alligment: "center",
                      paddingLeft: "19px",
                      paddingTop: "15px"
                    }}
                  />
                  <div class="col-sm-3" style={{ paddingTop: "20px" }}>
                    <img
                      src={ratingIcon}
                      style={{ height: "100px", float: "left" }}
                    />
                  </div>
                  <div class="col-sm-6">
                    <InputView />
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div class="col-sm-10 col-md-offset-12">
                  <p
                    style={{
                      paddingLeft: "150px",
                      fontSize: "50px",
                      fontStyle: "Impact",
                      fontWeight: "400",
                      alligment: "middle",
                      color: "white",
                      float: "middle",
                      margin: "10px",
                      textShadow: "2px 2px 4px #000000",
                      zIndex: "-1"
                    }}
                  >
                    Season 12 <br />
                    {rating}
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Tabs onChange={this.handleTabChange} selected={this.state.tab} />
              {this.state.tab === 0 ? (
                <StatTable
                  chars={chars}
                  onSort={this.handleClick}
                  active={this.state.tila}
                />
              ) : (
                <QpStatTable
                  chars={qpChars}
                  onSort={this.handleClick}
                  active={this.state.tila}
                />
              )}
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
    dvaStat: state.app.dvaStat,
    battleTag: state.app.battleTag
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
