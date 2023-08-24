import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaulProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, i) => (
            <img
              key={photo}
              src={photo}
              className={i === active ? "active" : ""}
              alt="animal thumnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
