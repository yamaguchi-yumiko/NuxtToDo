<template>
  <header class="gl-header mb-4">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="container header">
        <b-navbar-brand href="/">To Do List</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <TheIconTaskLink />
              <NuxtLink to="/todos" class="task-link">Task Page</NuxtLink>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <div v-if="this.$route.path != '/'" class="keyword">
          <TheSearchForm />
        </div>
      </div>
    </b-navbar>
  </header>
</template>
<script>
import TheSearchForm from '../ui/searchForm'
import TheIconTaskLink from '../atom/iconTaskLink.vue'
export default {
  components: {
    TheSearchForm,
    TheIconTaskLink
  },
}
</script>

<style lang="scss">
@mixin sp {
  @media screen and (max-width: 768px) {
    @content;
  }
}
.header {
  max-width: 1400px;
}

.keyword {
  padding-bottom: 6px;

  @include sp {
    width: 100%;
  }
}

.task-link {
  color: #fff;
  transition: all 0.4s;
}

.task-link:hover {
  color: rgb(255, 255, 255, 0.8);
}
</style>
