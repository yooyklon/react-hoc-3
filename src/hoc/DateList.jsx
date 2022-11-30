import React from "react";

export default function DateList(Component) {
  return class extends React.Component {
    render() {
      return (
        <Component {...this.props} list={this.props.data(this.props.list)} />
      );
    }
  };
}
