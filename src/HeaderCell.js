import React from 'react'
import PropTypes from 'prop-types'

class HeaderCell extends React.Component {
  componentDidMount() {
    this.sendWidth();
    window.addEventListener("resize", () => this.sendWidth());
  }
  
  sendWidth() {
    this.props.setCellWidth(this.cell.clientWidth);
  }

  render() {
    const style = {
      width: this.props.width,
      backgroundColor: "inherit"
    };
    return (
      <th ref={el => (this.cell = el)} style={style}>
        {this.props.children}
      </th>
    );
  }
}

HeaderCell.propTypes = {
  setCellWidth: PropTypes.func,
  width: PropTypes.number,
  children: PropTypes.any
}

export default HeaderCell