import React from 'react';

import Header from '../src/Header';
import HeaderRow from '../src/HeaderRow'
import HeaderCell from '../src/HeaderCell'
import Body from '../src/Body'
import BodyRow from '../src/BodyRow'

import TableWrapper from '../src/TableWrapper'

class Example extends React.Component {
    render() {
      const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        return (
          <div className="container">
          <h1>Sup</h1>
          <h1>Sup</h1>
          <h1>Sup</h1>
  
          <table className="table">
            <Header isFixed>
              <HeaderRow>
                <HeaderCell>Head 1</HeaderCell>
                <HeaderCell>Head 2</HeaderCell>
                <HeaderCell>Head 3</HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {arr.map((value, index) => (
                <BodyRow key={index}>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </BodyRow>
              ))}
            </Body>
          </table>

          <TableWrapper>
            <table>
              <tr>
                <td>Test</td>
              </tr>
            </table>
          </TableWrapper>
        </div>
      )
    }
  }

export default Example