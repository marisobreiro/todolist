import React, {useState} from 'react';
import {FlatList, StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {darkMode, lightMode} from './src/config/theme';
import {Header} from './src/components/Header/Header';
import {AddNewTask} from './src/components/Modal/AddNewTask/AddNewTask';
import {Task} from './src/components/Task/Task';

import * as S from './App.styles';

interface Task {
  id: string;
  data: string;
}

const App = () => {
  const scheme = useColorScheme();
  const [showModal, setShowModal] = useState(false);
  const [myTasks, setMyTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleAddNewTask() {
    const task = {
      id: String(new Date().getTime()),
      data: newTask,
    };

    setMyTasks(tasks => [...tasks, task]);
  }

  function handleDeleteTask(id: string) {
    setMyTasks(tasks => tasks.filter(task => task.id !== id));
  }

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkMode : lightMode}>
      <S.Container>
        <StatusBar />
        <Header handleShowModal={() => setShowModal(true)} />
        <FlatList
          data={myTasks}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Task>{item.data}</Task>}
        />
        {showModal ? (
          <AddNewTask
            handleCloseModal={() => setShowModal(false)}
            handleAddNewTask={() => {
              handleAddNewTask();
              setShowModal(false);
            }}
            onChangeText={setNewTask}
          />
        ) : (
          ''
        )}
      </S.Container>
    </ThemeProvider>
  );
};

export default App;
