import styled from 'styled-components/native';

export const TaskCard = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  flex-direction: row;
  margin: 5px 0;
  width: 90%
  heigth: 50px;
  background: ${(props: {theme: {card: any}}) => props.theme.card};
  border-radius: 8px;
`;

export const TaskContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  width: 75%;
`;

export const TaskText = styled.Text`
  color: ${(props: {theme: {color: any}}) => props.theme.color}
  font-size: 16px;
  margin-left: 10px;
`;

export const DeleteTask = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 25%;
  padding: 20px;
`;
