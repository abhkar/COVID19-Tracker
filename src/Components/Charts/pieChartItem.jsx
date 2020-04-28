import React from 'react';
import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const PieChartItem = ({ Cases, Deaths, Recovered }) => {
  return (
    <Pie
      className='pie'
      data={{
        datasets: [
          {
            data: [Cases, Deaths, Recovered],
            backgroundColor: ['#fca903', '#d14356', '#49d170']
          }
        ],
        labels: ['Cases', 'Deaths', 'Recovered']
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        // title: {
        //   display: true,
        //   text: "World's Stats"
        // },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            fontColor: '#8a8a8a'
          }
        },
        tooltips: {
          enabled: true,
          backgroundColor: '#ededed',
          borderWidth: '2',
          borderColor: '#8a8a8a',
          titleFontColor: '#4a4a4a',
          bodyFontColor: '#4a4a4a',
        }
      }}
    />
  );
};

PieChartItem.propTypes = {};

export default PieChartItem;
