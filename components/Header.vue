<template>
  <header class="gl-header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-info mb-3">
      <div class="container">
        <h1>
          <a class="navbar-brand" href="/">To Do List</a>
        </h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" navigation>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NuxtLink to="/todos" class="task-link">Task Page</NuxtLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
.task-link {
  color: #fff;
  transition: all .4s;
}

.task-link:hover {
  color:rgb(255,255,255, 0.8);
}
</style>
