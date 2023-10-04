import React, { Component } from "react"; 
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { NotificationMessage } from "./Notification/NotificationMessage";
import { MainContainer } from "./MainContainer/MainContainer.styled";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;   
    return total;        
  };

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const total = this.countTotalFeedback();
   
    const positivePercentage = Math.round((good/total) * 100 );
    return good ? positivePercentage : 0;      
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({   
        [option]: prevState[option] + 1 
    }));
  };

  render() {
    const options = Object.keys(this.state);
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <MainContainer>
        <Section title ="Please leave feedback!">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title ="Statistics">
           {total ? (
            <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={total} 
            positivePercentage={positivePercentage}/>)
          : <NotificationMessage message = "There is no feedback"/> }  
        </Section>        
      </MainContainer>
    );
  };
};