import styled from "@emotion/styled";

const MessageBox = styled.div(
  ({ theme }) => `  
    background-color: ${theme.colors.lightGrey};
    border-radius: ${theme.borderRadius.default};
    border: ${theme.border};
    padding: ${theme.spacings.lg};    
    text-align: center;
  `
);

export default MessageBox;
