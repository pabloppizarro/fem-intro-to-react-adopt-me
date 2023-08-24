import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  //lifecycle class hook
  componentDidCatch(error, info) {
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this.
          <Link to="/">Click here to go back home</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
