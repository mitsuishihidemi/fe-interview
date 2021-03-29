import styled from "@emotion/styled";

export const Table = styled.div(
  ({ theme }) => `
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.default};
    border: ${theme.border};
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `
);

export const TableHeader = styled.div(
  ({ theme }) => `
    align-items: center;
    border-bottom: ${theme.border};
    display: grid;    
    grid-column-gap: 1rem;    
  `
);

export const TableRow = styled.div(
  ({ theme }) => `  
    align-items: center;
    border-bottom: ${theme.border};
    box-sizing: border-box;        
    display: grid;    
    grid-column-gap: 1rem;        
    transition: background-color 0.3s ease;  

    :last-child {
      border-bottom-width: 0;
    }    
    
    :hover {      
      background-color: ${theme.colors.lightGrey};      
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
