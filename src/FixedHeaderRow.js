import React from 'react'
import PropTypes from 'prop-types'
import FixedHeaderCell from './FixedHeaderCell'

const FixedHeaderRow = props => {
  const style = {
    position: "fixed",
    top: 0,
    visibility: "visible",
    background: "white"
  };

  const children = React.Children.map(props.children, (child, index) => {
    if (child.type === 'th') {
      return (
        <FixedHeaderCell {...child.props} width={props.widths[index]}>
          {child.props.children}
        </FixedHeaderCell>
      );
    }
    return child;
  });

  return <tr style={style}>{children}</tr>;
}

FixedHeaderRow.propTypes = {
  widths: PropTypes.arrayOf(PropTypes.number),
  children: PropTypes.any
}

export default FixedHeaderRow