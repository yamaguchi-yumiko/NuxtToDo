import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore();
const todosRef = db.collection('todos');

export const state = () => ({
  todos: []
})

export const actions = {
  init: firestoreAction(({
    bindFirestoreRef
  }) => {
    bindFirestoreRef('todos', todosRef)
  }),
  add: firestoreAction((context, {
    todoTask,
    todoDetal,
    todoDeadlineDate
  }) => {
    if (todoTask.trim() && todoDetal.trim()) {
      todosRef.add({
        task: todoTask,
        detal: todoDetal,
        deadlineDate: todoDeadlineDate,
        done: false,
        updaate: null,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    todosRef.doc(id).delete();
  }),
  edit: firestoreAction((context, {
    todoId,
    todoTask,
    todoDetal,
    todoDeadlineDate
  }) => {
    todosRef.doc(todoId).update({
      task: todoTask,
      detal: todoDetal,
      deadlineDate: todoDeadlineDate,
      updaate: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  toggle: firestoreAction((context, todo) => {
    todosRef.doc(todo.id).update({
      done: !todo.done
    })
  })
}

export const getters = {
  orderdTodos: state => {
    return _.sortBy(state.todos, 'deadlineDate');
  },
}
