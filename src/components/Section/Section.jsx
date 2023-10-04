import { SectionFeedback, Title } from "./Section.styled";

export const Section = ({title, children}) => {
    return (
        <SectionFeedback>
            <Title>{title}</Title>
            {children}            
        </SectionFeedback>
    );
};