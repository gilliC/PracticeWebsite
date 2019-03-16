import Fire, {databaseRef} from '../../../services/fire';
import {FETCH_TASKS, FETCH_PERMISSION} from '../../../services/constants';

//////////////     TASKS     /////////////
export const addTask = newTask => async dispatch => {
  databaseRef
    .child('tasks')
    .push()
    .set(newTask)
    .catch(error => {
      console.log(error.message);
    });
};

export const completeTask = (taskId, date = undefined) => async dispatch => {
  if (date !== undefined) {
    databaseRef
      .child('tasks')
      .child(taskId)
      .update({
        isNotCompleted: false,
        completionDate: date,
      });
  }
};

export const undoTask = taskId => async dispatch => {
  databaseRef
    .child('tasks')
    .child(taskId)
    .update({
      isNotCompleted: true,
      completionDate: '',
    });
};

export const deleteTask = taskId => async dispatch => {
  databaseRef
    .child('tasks')
    .child(taskId)
    .remove();
};

export const fetchTasksLoggedIn = () => async dispatch => {
  databaseRef.child('tasks').once(
    'value',
    snapshot => {
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
    },
    function(err) {
      console.log(err);
    },
  );
};
export const fetchTasksNotLogged = () => async dispatch => {
  databaseRef
    .child('tasks')
    .child('isNotCompleted')
    .once(
      'value',
      snapshot => {
        console.log(snapshot.val());
      },
      function(err) {
        console.log(err);
      },
    );
};

//////////////     PERMISSIONS     /////////////
export const fetchPermission = user => async dispatch => {
  Fire.auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(val => {
      dispatch({
        type: FETCH_PERMISSION,
        payload: {type: true, error: ''},
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_PERMISSION,
        payload: {type: false, error: error.message},
      });
    });
  return;
};
