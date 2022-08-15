import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const TaskCard = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  flex-direction: row;
  width: 90%
  heigth: 50px;
  background: ${props => props.theme.card};
  border-radius: 8px;
`;

export const TaskContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  width: 75%;
`;

export const TaskText = styled.Text`
  color: ${props => props.theme.color}
  font-size: 16px;
  margin-left: 10px;
`;

export const DeleteTask = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 25%;
  padding: 20px;
`;
