import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>good:&#32;{good}</p>
      <p>neutral:&#32;{neutral}</p>
      <p>bad:&#32;{bad}</p>
      <p>total:&#32;{total}</p>
      <p>positive:&#32;{positivePercentage}&#37;</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
