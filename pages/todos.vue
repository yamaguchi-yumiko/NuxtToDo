<template>
  <main class="container mb-4">
    <div class="card">
      <div class="card-body">
        <div class="card-top">
          <h1 class="h1">Task List</h1>
          <button class="mb-3 btn btn-success" @click="onModel">タスクを作成</button>
        </div>
        <transition name="vif">
          <div v-if="isAddShow" class="alert alert-warning text-center" role="alert">タスクを追加しました。</div>
          <div v-if="isEditShow" class="alert alert-warning text-center" role="alert">タスクを編集しました。</div>
        </transition>
        <div class="text-center"></div>
        <li class="my-3 py-3 shadow list-group-item" :class="{ done: todo.done }" v-for="todo in todos" :key="todo.id">
          <span v-if="todo.deadlineDate">
            <div class="row">
              <div class="col-1">
                <div class="pretty p-svg p-curve">
                  <input type="checkbox" @checked="todo.done" @change="toggle(todo)" :checked="todo.done" />
                  <div class="state p-success">
                    <TheIconCheck />
                    <label></label>
                  </div>
                </div>
              </div>
              <div class="col-9">
                <span>
                  <p class="h5">{{todo.task}}</p>
                </span>
                <p>
                  <span class="h6 deadline_date">締め切り日:{{todo.deadlineDate.toDate() | dateFilter}}</span>
                </p>
              </div>
            </div>
            <div class="btn-inner">
              <button class="btn btn-primary" @click="todoEdit(todo.id)">
                <TheIconEdit />
              </button>
              <button class="btn btn-danger" @click="remove(todo.id)">
                <TheIconDelete />
              </button>
            </div>
          </span>
        </li>
        <div v-if="isSearch">
          <li class="my-3 py-3 shadow list-group-item text-center">
            <div class="search-error">
              <p>キーワードに一致するタスクがありません。</p>
              <v-icon>mdi-emoticon-cry-outline</v-icon>
            </div>
          </li>
        </div>
        <transition>
          <div class="overlay" v-if="isModel">
            <div class="panel">
              <form @submit.prevent="edit(todoId)" v-if="isEdit">
                <h2 class="h5">タスクを編集</h2>
                <div class="group">
                  <label for="l_text" class="mt-3 h6">
                    <TheIconTask />
                  </label>
                  <div class="form-control-feedback" v-show="errors.has('task')">
                    <p class="alert alert-danger">{{ errors.first('task') }}</p>
                  </div>
                  <input id="l_text" placeholder="タスクを入力してください" data-vv-as="タスク" type="text" :name="'task'" v-model="todoListData.task" v-validate="'required'" />
                  <div class="text_underline"></div>
                  <label for="l_text" class="mt-3 h6">
                    <TheIconDetail />
                  </label>
                  <div class="form-control-feedback" v-show="errors.has('detail')">
                    <p class="alert alert-danger">{{ errors.first('detail') }}</p>
                  </div>
                  <input id="l_text" placeholder="詳細を入力してください" data-vv-as="詳細" type="text" :name="'detail'" v-model="todoListData.detal" v-validate="'required'" />
                  <div class="text_underline"></div>
                  <label for="l_text" class="mt-3 h6">
                    <TheIconCalendar />
                  </label>
                  <div class="form-control-feedback" v-show="errors.has('deadline')">
                    <p class="alert alert-danger">{{ errors.first('deadline') }}</p>
                  </div>
                  <date-picker placeholder="期限を設定してください" format="yyyy/MM/dd" data-vv-as="期限" :name="'deadline'" :language="ja" v-model="todoListData.deadlineDate" v-validate="'required'" />
                  <div class="text_underline"></div>
                </div>
                <div class="mt-3 text-right">
                  <button class="mt-2 ml-2 btn btn-success">編集</button>
                  <button type="button" class="mt-2 btn btn-dark" @click="onClose">閉じる</button>
                </div>
              </form>
              <form @submit.prevent="add" v-else>
                <h2 class="h5">タスクを作成</h2>
                <div class="group">
                  <label for="l_text" class="mt-3 h6">
                    <TheIconTask />
                  </label>
                  <div class="form-control-feedback" v-show="errors.has('task')">
                    <p class="alert alert-danger">{{ errors.first('task') }}</p>
                  </div>
                  <input id="l_text" placeholder="タスクを入力してください" data-vv-as="タスク" type="text" :name="'task'" v-model="task" v-validate="'required'" />
                  <div class="text_underline"></div>
                  <label for="l_text" class="mt-3 h6">
                    <TheIconDetail />
                  </label>
                  <div class="form-control-feedback" v-show="errors.has('detail')">
                    <p class="alert alert-danger">{{ errors.first('detail') }}</p>
                  </div>
                  <input id="l_text" placeholder="詳細を入力してください" data-vv-as="詳細" type="text" :name="'detail'" v-model="detail" v-validate="'required'" />
                  <div class="text_underline"></div>
                  <label for="l_text" class="mt-3 h6">
                    <TheIconCalendar />
                  </label>
                  <div class="form-control-feedback" v-show="errors.has('deadline')">
                    <p class="alert alert-danger">{{ errors.first('deadline') }}</p>
                  </div>
                  <date-picker placeholder="期限を設定してください" format="yyyy/MM/dd" data-vv-as="期限" :name="'deadline'" :language="ja" v-model="deadlineDate" v-validate="'required'" />
                  <div class="text_underline"></div>
                </div>
                <div class="mt-3 text-right">
                  <button class="mt-2 ml-2 btn btn-success">追加</button>
                  <button type="button" class="mt-2 btn btn-dark" @click="onClose">閉じる</button>
                </div>
              </form>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </main>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import moment from 'moment'
import DatePicker from 'vuejs-datepicker/src/components/Datepicker.vue'
import { ja } from 'vuejs-datepicker/dist/locale'
import TheIconTask from '~/components/atom/iconTtask.vue'
import TheIconCheck from '~/components/atom/iconCheck.vue'
import TheIconEdit from '~/components/atom/iconEdit.vue'
import TheIconDelete from '~/components/atom/iconDelete.vue'
import TheIconDetail from '~/components/atom/iconDetail.vue'
import TheIconCalendar from '~/components/atom/iconCalendar.vue'

export default {
  layout: "default",
  components: {
    DatePicker,
    TheIconTask,
    TheIconCheck,
    TheIconEdit,
    TheIconDelete,
    TheIconDetail,
    TheIconCalendar
  },
  data: () => ({
    task: "",
    detail: "",
    deadlineDate: "",
    todoId: "",
    todoListData: {
      deadlineDate: "",
      detal: "",
      task: "",
    },
    ja: ja,
    done: false,
    isModel: false,
    isEdit: false,
    isAddShow: false,
    isEditShow: false,
    isSearch: false,
  }),
  mounted() {
  },
  computed: {
    todos() {
      let todo = this.$store.getters['todos/orderdTodos'];
      let todos = [];
      for (let i in todo) {
        let todoItems = todo[i];
        if (todoItems.task.indexOf(this.$store.state.search.searchMessage) !== -1) {
          todos.push(todoItems);
        }
        if (todos.length == 0) {
          this.isSearch = true;
        } else {
          this.isSearch = false;
        }
      }
      return todos;
    },
  },
  created: function () {
    this.$store.dispatch('todos/init');
  },
  methods: {
    onModel() {
      this.isModel = true;
      this.isEdit = false;
    },
    onClose() {
      this.isModel = false;
      this.task = '';
      this.detail = '';
      this.deadlineDate = '';
    },
    add() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.dispatch('todos/add', { todoTask: this.task, todoDetal: this.detail, todoDeadlineDate: this.deadlineDate });
          this.isModel = false;
          this.isAddShow = true;
          setTimeout(() => {
            this.isAddShow = false;
          }, 1400);
          this.task = '';
          this.detail = '';
          this.deadlineDate = '';
        }
      })
    },
    todoEdit(id) {
      this.isEdit = true;
      this.isModel = true;
      this.todoId = id;
      const db = firebase.firestore();
      const todosRef = db.collection('todos').doc(this.todoId);
      todosRef
        .get()
        .then(doc => {
          const getTodoData = doc.data();
          const todoData = {
            deadlineDate: getTodoData.deadlineDate.toDate(),
            detal: getTodoData.detal,
            task: getTodoData.task,
          }
          this.todoListData = todoData;
        })
    },
    edit(id) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.dispatch('todos/edit', { todoId: id, todoTask: this.todoListData.task, todoDetal: this.todoListData.detal, todoDeadlineDate: this.todoListData.deadlineDate });
          this.isModel = false;
          this.isEditShow = true;
          setTimeout(() => {
            this.isEditShow = false;
          }, 1400);
          this.task = '';
          this.detail = '';
          this.deadlineDate = '';
        }
      })
    },
    remove(id) {
      this.$store.dispatch('todos/remove', id);
    },
    toggle(todo) {
      this.$store.dispatch('todos/toggle', todo);
    }
  },
  filters: {
    dateFilter: function (date) {
      return moment(date).format('YYYY/MM/DD');
    }
  }
}

</script>
<style lang="scss">
@mixin sp {
  @media screen and (max-width: 768px) {
    @content;
  }
}

.card-top {
  display: flex;
  justify-content: space-between;
}

.panel {
  width: 600px;
  height: 600px;
  background: #fff;
  padding: 20px;
}

.list-group-item.done {
  background: $pretty--color-default;
  animation-name: fade;
  animation-duration: 1s;
}

.deadline_date {
  color: $pretty--color-success;
}

input {
  font-size: 16px;
  width: 100%;
  border: none;
  outline: none;
  padding-bottom: 8px;
  box-sizing: border-box;
}

.text_underline {
  border-top: 1px solid #c2c2c2;
}

.btn-inner {
  text-align: right;
}

.btn-danger,
.btn-primary {
  border-radius: 50%;
}

.btn {
  box-shadow: 0px 2px 3px 0px #9e9e9e;
}

.btn-dark {
  color: #fff;
}

.overlay {
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave {
  opacity: 1;
}

.v-leave-active,
.v-enter-active {
  transition: opacity 0.5s;
}

.vif-enter-active,
.vif-leave-active {
  transition: opacity 2s;
}

.vif-enter,
.vif-leave-to {
  opacity: 0;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
