import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 40px 20px;
`;

export const ActionsContainer = styled.View`
  align-items: flex-end;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${props => props.theme.color}
  font-size: 30px;
  font-weight: bold;
`;

export const Menu = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background: ${props => props.theme.background};
`;
