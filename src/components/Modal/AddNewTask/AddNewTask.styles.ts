import styled from 'styled-components/native';

export const ContainerAdd = styled.View`
  background: ${props => props.theme.background};
  padding: 50px 20px;
  align-items: flex-end;
  flex: 1;
`;

export const AddTask = styled.View`
  align-self: center;
  margin-top: 180px;
`;

export const AddTaskText = styled.Text`
  color: ${props => props.theme.color};
  font-size: 16px;
`;

export const InputContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const TaskInput = styled.TextInput`
  color: ${props => props.theme.color}
  width: 90%;
  padding: 10px;
  border-color: ${props => props.theme.color};
  border-width: 1px;
  border-radius: 10px;
`;
