import React from 'react'
import PropTypes from 'prop-types'
import HeaderCell from './HeaderCell'

const HeaderRow = props => {
  const children = React.Children.map(props.children, (child, index) => {
    if (child.type === 'th') {
      const cellProps = {
        ...child.props,
        key: index,
        setCellWidth: cellWidth => props.setColumnWidth(cellWidth, index)
      }
      return <HeaderCell {...cellProps} />
    }

    return child
  })

  return <tr>{children}</tr>
}

HeaderRow.propTypes = {
  children: PropTypes.any,
  setColumnWidth: PropTypes.func
}

export default HeaderRow