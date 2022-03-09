<template>
  <header class="gl-header mb-4">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <div class="container">
          <b-navbar-brand href="/">To Do List</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
               <b-nav-item>
                <NuxtLink to="/todos" class="task-link">Task Page</NuxtLink>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
  </header>
</template>

<style>
.task-link {
  color: #fff;
  transition: all 0.4s;
}

.task-link:hover {
  color: rgb(255, 255, 255, 0.8);
}
</style>
