import firebase from 'firebase';
var config = {
  apiKey: 'AIzaSyBJ4I31kIqHp7VnQf7YwpeJO56Qkw9OQTE',
  authDomain: 'mywebsite-a871d.firebaseapp.com',
  databaseURL: 'https://mywebsite-a871d.firebaseio.com',
  projectId: 'mywebsite-a871d',
  storageBucket: 'mywebsite-a871d.appspot.com',
  messagingSenderId: '413309780759',
};
var fire = firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const tasksRef = databaseRef.child('tasks');
export default fire;
