import styled from "@emotion/styled";

export const Table = styled.div(
  ({ theme }) => `
    border-radius: ${theme.borderRadius.default};
    border: ${theme.border};
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `
);

export const TableRow = styled.div(
  ({ theme }) => `  
    align-items: center;
    border-bottom: ${theme.border};
    box-sizing: border-box;        
    display: grid;    
    grid-column-gap: 1rem;    
    grid-template-areas:
      'avatar  name     transactions actions'
      'avatar  category transactions actions'
      'details details  details      details';    
    grid-template-columns: 50px auto 60px 60px;    
    padding: ${theme.spacings.md};
    transition: background-color 0.3s ease;  
    
    :hover {      
      background-color: ${theme.colors.lightGrey};      
    }

    :last-child {
      border-bottom-width: 0;
    }

    @media (min-width: ${theme.breakpoints.lg}) {      
      grid-template-areas: 
        'avatar  name    category transactions actions'
        'details details details  details      details';
      grid-template-columns: 50px 1fr 1fr 1fr 60px;    
    }
  `
);

export const TableHeader = styled.div(
  ({ theme }) => `
    display: none;

    @media (min-width: ${theme.breakpoints.lg}) {
      align-items: center;
      border-bottom: ${theme.border};
      display: grid;    
      grid-column-gap: 1rem;      
      grid-template-areas: 'avatar name category transactions actions';
      grid-template-columns: 50px 1fr 1fr 1fr 60px;    
      padding: ${theme.spacings.md};
    }
  `
);

type TableColumnProps = {
  gridArea: string;
};

export const TableColumn = styled.div<TableColumnProps>(
  ({ gridArea }) => `    
    grid-area: ${gridArea};
  `
);
