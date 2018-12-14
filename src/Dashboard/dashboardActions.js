import {tasksRef} from '../services/fire';
import {FETCH_TASKS} from '../services/constants';

export const addTask = newTask => async dispatch => {
  tasksRef
    .push()
    .set(newTask)
    .catch(error => {
      console.log(error.message);
    });
};

export const completeTask = (taskId, date = undefined) => async dispatch => {
  if (date !== undefined) {
    tasksRef.child(taskId).update({
      isNotCompleted: false,
      completionDate: date,
    });
  }
};

export const undoTask = taskId => async dispatch => {
  tasksRef.child(taskId).update({
    isNotCompleted: true,
    completionDate: '',
  });
};

export const deleteTask = taskId => async dispatch => {
  tasksRef.child(taskId).remove();
};

export const fetchTasks = () => async dispatch => {
  tasksRef.on('value', snapshot => {
    let tasks = Object.values(snapshot.val());
    let ids = Object.keys(snapshot.val());
    let payload = [];
    tasks.map((task, id) => {
      payload.push({id: ids[id], ...task});
      return task;
    });
    dispatch({
      type: FETCH_TASKS,
      payload: payload,
    });
  });
};
