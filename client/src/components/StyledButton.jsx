import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

// Exemplo de botão estilizado com styled-components
const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%);
    transform: translateY(-2px);
    box-shadow: 0 5px 10px 2px rgba(255, 105, 135, .4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px 1px rgba(255, 105, 135, .3);
  }

  &.secondary {
    background: linear-gradient(45deg, #2196F3 30%, #21CBF3 90%);
    box-shadow: 0 3px 5px 2px rgba(33, 203, 243, .3);

    &:hover {
      background: linear-gradient(45deg, #21CBF3 30%, #2196F3 90%);
      box-shadow: 0 5px 10px 2px rgba(33, 203, 243, .4);
    }
  }

  &.success {
    background: linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%);
    box-shadow: 0 3px 5px 2px rgba(76, 175, 80, .3);

    &:hover {
      background: linear-gradient(45deg, #8BC34A 30%, #4CAF50 90%);
      box-shadow: 0 5px 10px 2px rgba(76, 175, 80, .4);
    }
  }
`;

// Exemplo de container com animação
const AnimatedContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.theme?.palette?.background?.paper || '#fff'};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: ${props => props.theme?.palette?.primary?.main || '#1976d2'};
    margin-bottom: 16px;
  }

  p {
    color: ${props => props.theme?.palette?.text?.secondary || '#666'};
    line-height: 1.6;
  }
`;

// Componente de exemplo
export function StyledButtonExample() {
  return (
    <AnimatedContainer>
      <h3>Exemplos de Styled Components</h3>
      <p>Estes botões foram criados usando styled-components com Material-UI:</p>
      
      <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
        <StyledButton>
          Botão Primary
        </StyledButton>
        
        <StyledButton className="secondary">
          Botão Secondary
        </StyledButton>
        
        <StyledButton className="success">
          Botão Success
        </StyledButton>
      </div>
    </AnimatedContainer>
  );
}

export default StyledButton;