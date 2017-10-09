import React from 'react';
import ReactDOM from 'react-dom';
import BetterTable from './BetterTable';

describe('<BetterTable />', () => {

  it('throws when it does not have a child', () => {
    const div = document.createElement('div');
    expect(() => ReactDOM.render(<BetterTable />, div))
      .toThrowErrorMatchingSnapshot();
  })
  
  it('throws when it has more than one child', () => {
    const div = document.createElement('div');
    expect(() => ReactDOM.render(
      <BetterTable>
        <div />
        <div />
      </BetterTable>, div)).toThrowErrorMatchingSnapshot();
  })

  it('renders when it has a single table element as a child', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BetterTable>
        <table></table>
      </BetterTable>, div);
  });
});