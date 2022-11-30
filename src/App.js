import React from 'react';

import { MonthTableContainer } from './components/MonthTable';

import { YearTableContainer } from './components/YearTable';

import { SortTableContainer } from './components/SortTable';

export default class App extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_DATE_URL)
      .then(response => response.json())
      .then(data => this.setState({ list: data.list }));
  }

  render() {
    const { list } = this.state;
    return (
      <div id="app">
        <MonthTableContainer list={list} data={(list) => {
          const month = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ];
          var monthIndex = {
            "Jan": 1,
            "Feb": 2,
            "Mar": 3,
            "Apr": 4,
            "May": 5,
            "Jun": 6,
            "Jul": 7,
            "Aug": 8,
            "Sept": 9,
            "Oct": 10,
            "Nov": 11,
            "Dec": 12
          };
          const sortList = [...list];
          return (sortList.map((el => ({ month: month[new Date(el.date).getMonth()], amount: el.amount })))).sort((prev, next) => monthIndex[prev.month] - monthIndex[next.month]);
        }} />
        <YearTableContainer list={list} data={(list) => {
          const sortList = [...list];
          return (sortList.map((el => ({ year: new Date(el.date).getFullYear(), amount: el.amount })))).sort((prev, next) => prev.year - next.year);
        }} />
        <SortTableContainer list={list} data={(list) => {
          const sortList = [...list];
          return (sortList.map((el => ({ date: el.date, amount: el.amount })))).sort((prev, next) => new Date(prev.date) - new Date(next.date));
        }} />
      </div>
    );
  }
}