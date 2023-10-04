import { BtnWrapper, FeedbackBtn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <BtnWrapper>
            {options.map(option => 
            <FeedbackBtn type="button" key ={option}
              onClick={() => onLeaveFeedback(option)}>
                {option}
            </FeedbackBtn>
            )}
        </BtnWrapper>
    );        
};