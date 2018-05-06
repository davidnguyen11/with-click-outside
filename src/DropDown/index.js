import React from 'react';

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.outside !== this.props.outside) {
      this.setState({
        open: !nextProps.outside,
      });
    }
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    const { outside, id } = this.props;

    return (
      <div>
        <button id="btnOutside">outside</button>
        <div style={{ display: 'inline-block', background: 'orange' }} id={id}>
          <button id="btnDropDown" onClick={this.toggle}>
            DropDown Button
          </button>
          {open &&
            !outside && (
              <div>
                <button id="button_1">1</button>
                <button id="button_1">2</button>
                <button id="button_1">3</button>
                <button id="button_1">4</button>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default DropDown;
