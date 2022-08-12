import styled from 'styled-components/native';

export const TaskContainer = styled.TouchableOpacity`
  align-item: center;
  flex-direction: row;
  width: 90%
  heigth: 50px;
  margin: 5px 20px;
  background: ${props => props.theme.card};
  padding: 20px;
  border-radius: 8px;
`;

export const TaskText = styled.Text`
  color: ${props => props.theme.color}
  font-size: 16px;
  margin-left: 10px;
`;
