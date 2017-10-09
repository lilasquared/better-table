import React from 'react'
import PropTypes from 'prop-types'
import HeaderCell from './HeaderCell'

const HeaderRow = props => {
    const children = React.Children.map(props.children, (child, index) => {
      if (child.type === HeaderCell) {
        return React.cloneElement(child, {
          key: index,
          setCellWidth: cellWidth => props.setColumnWidth(cellWidth, index)
        })
      }

      return child
    })

    return <tr>{children}</tr>
  }

HeaderRow.propTypes = {
  children: PropTypes.any
}

export default HeaderRow