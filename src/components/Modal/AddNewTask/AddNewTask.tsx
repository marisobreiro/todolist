import React from 'react';
import {Modal} from 'react-native';

import {IconButton} from '../../UI/IconButton/IconButton';

import * as S from './AddNewTask.styles';

export function AddNewTask({...props}) {
  return (
    <Modal animationType="slide" visible={true}>
      <S.ContainerAdd>
        <IconButton type="close" onPress={props.handleCloseModal} />
        <S.AddTask>
          <S.AddTaskText>Adicionar tarefa</S.AddTaskText>
          <S.InputContainer>
            <S.TaskInput
              placeholder="Insira aqui sua próxima tarefa"
              onChangeText={props.onChangeText}
            />
            <IconButton type="plus" onPress={props.handleAddNewTask} />
          </S.InputContainer>
        </S.AddTask>
      </S.ContainerAdd>
    </Modal>
  );
}
