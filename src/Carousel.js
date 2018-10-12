import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    src:
      "https://cdn.discordapp.com/attachments/412344410215284736/422511455686885406/eaba684e-fedc-425c-9ba6-61c7473e7648.png",
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src:
      "https://cdn.discordapp.com/attachments/412344410215284736/427681375127207937/WoWScrnShot_032518_211250.jpg",
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src:
      "https://metrouk2.files.wordpress.com/2017/07/187144066.jpg?quality=80&strip=all",
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeIndex: 0
    };
    this.toggle = this.toggle.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) {
      return;
    }
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) {
      return;
    }
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) {
      return;
    }
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <div>
       
        <div className="container">
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={this.goToIndex}
            />
            {items.map(item => {
              return (
                <CarouselItem
                  onExiting={this.onExiting}
                  onExited={this.onExited}
                  key={item.src}
                >
                  <div
                    style={{
                      height: "500px",
                      backgroundImage: "url(" + item.src + ")",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />
                  <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                  />
                </CarouselItem>
              );
            })}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Carousel;
