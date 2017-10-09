import React from 'react';

import BetterTable from '../src/BetterTable'

class Example extends React.Component {
  render() {
    const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    return (
      <div className="container">
        <h1>Wrapper</h1>
        <BetterTable hasFixedHeader>
          <table className="table" data-id="test">
            <thead>
              <tr>
                <th>Head 1</th>
                <th>Head 2</th>
                <th>Head 3</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((value, index) => (
                <tr key={index}>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              ))}
            </tbody>
          </table>
        </BetterTable>
      </div>
    )
  }
}

export default Example