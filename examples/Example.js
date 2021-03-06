import React from 'react';

import { BetterTable } from '../src'

class Example extends React.Component {
  render() {
    const arr = [1,1,1,1,1,1,1,1,1]
    return (
      <div className="container">
        <h1>Wrapper</h1>
        <BetterTable hasFixedHeader>
          <table className="table" data-id="test">
            <thead>
              <tr>
                <th colSpan={2}>Head 1</th>
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

        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
        <h1>Other Content</h1>
      </div>
    )
  }
}

export default Example