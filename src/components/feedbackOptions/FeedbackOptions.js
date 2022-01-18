import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {Object.keys(options).map(option => (
        <button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={css.button}
        >
          {option}
        </button>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
