import React from 'react'
import PropTypes from 'prop-types'

import Table from './Table'

class TableWrapper extends React.Component {

  render() {  
    const children = React.Children.map(this.props.children, () => {
      return <Table></Table>
    })
    return children[0]
  }
}

TableWrapper.propTypes = {
  children: PropTypes.any
}

export default TableWrapper