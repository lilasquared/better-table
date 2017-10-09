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
    const { width, ...props } = this.props
    delete props.setCellWidth
    const style = {
      width,
      backgroundColor: "inherit"
    }

    return (
      <th ref={el => (this.cell = el)} style={style} {...props}>
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