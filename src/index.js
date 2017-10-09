// Demo component
// this is only example component

import React from 'react';
import TableHeader from './TableHeader'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <table>
          <TableHeader>
          </TableHeader>
        </table>
         </div>
    )
  }
}

export default MyComponent;