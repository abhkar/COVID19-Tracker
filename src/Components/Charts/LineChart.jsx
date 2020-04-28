import React, { useEffect, useState } from 'react';
import LineChartItem from './LineChartItem';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const LineChart = ({
  DataHistory: {
    Dates,
    WWDates,
    Cases,
    WWCases,
    Deaths,
    WWDeaths,
    Recovered,
    WWRecovered,
    currentCountryLoading
  }
}) => {
  const [DataHistory, setDataHistory] = useState(null);

  useEffect(() => {
    Dates === null && WWDates !== null
      ? setDataHistory({
          Dates: WWDates,
          Cases: WWCases,
          Deaths: WWDeaths,
          Recovered: WWRecovered
        })
      : setDataHistory({
          Dates,
          Cases,
          Deaths,
          Recovered
        });
  }, [WWDates, Dates]);

  return (
    <>
      {!WWDates || currentCountryLoading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <LineChartItem
          Dates={DataHistory.Dates}
          Cases={DataHistory.Cases}
          Deaths={DataHistory.Deaths}
          Recovered={DataHistory.Recovered}
        />
      )}
    </>
  );
};

LineChart.propTypes = {
  WWDates: PropTypes.number,
  Cases: PropTypes.number,
  WWCases: PropTypes.number,
  Deaths: PropTypes.number,
  WWDeaths: PropTypes.number,
  Recovered: PropTypes.number,
  WWRecovered: PropTypes.number,
  currentCountryLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  DataHistory: state.DataHistory
});

export default connect(mapStateToProps)(LineChart);