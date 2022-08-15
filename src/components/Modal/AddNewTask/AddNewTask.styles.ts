import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const ContainerAdd = styled.View`
  background: ${props => props.theme.background};
  align-items: flex-end;
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? '70px;' : '30px'};
`;

export const AddTask = styled.View`
  align-self: center;
  margin-top: 180px;
  padding: ${Platform.OS === 'ios' ? '0px 20px;' : '0px 40px'};
`;

export const AddTaskText = styled.Text`
  color: ${props => props.theme.color};
  font-size: ${Platform.OS === 'ios' ? '20px' : '16px'};
  font-weight: bold;
`;

export const InputContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${Platform.OS === 'ios' ? '20px' : '10px'};
`;

export const TaskInput = styled.TextInput`
  color: ${props => props.theme.color}
  width: 80%;
  padding: ${Platform.OS === 'ios' ? '15px' : '10px'};
  border-color: ${props => props.theme.color};
  border-width: 1px;
  border-radius: 10px;
  font-size: ${Platform.OS === 'ios' ? '18px' : '16px'};

`;
