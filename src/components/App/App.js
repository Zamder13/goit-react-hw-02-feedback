import React, { Component } from 'react';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistics from '../statistics/Statistics';
import Section from '../section/Section';
import Notification from '../statistics/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    const totalValue = Object.values(this.state);
    return totalValue.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = (this.state.good / total) * 100;
    return Math.round(positive);
  };

  render() {
    const data = this.state;
    const totalfeedback = this.countTotalFeedback();
    const positivefeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {totalfeedback ? (
            <Statistics
              good={data.good}
              neutral={data.neutral}
              bad={data.bad}
              total={totalfeedback}
              positivePercentage={positivefeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
