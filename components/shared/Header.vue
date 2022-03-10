<template>
  <header class="gl-header mb-4 header-content">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="container header-inner">
        <b-navbar-brand href="/" class="font-roboto">To Do List</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" v-if="this.$route.path != '/'"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav v-if="this.$route.path != '/'">
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <TheIconTaskLink />
              <NuxtLink to="/todos" class="task-link font-roboto">Task Page</NuxtLink>
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
@import url("https://fonts.googleapis.com/css2?family=Cabin&family=Roboto+Serif:ital,wght@1,300&family=Roboto+Slab&display=swap");

@mixin sp {
  @media screen and (max-width: 768px) {
    @content;
  }
}

.font-roboto {
  font-family: "Cabin", sans-serif;
}

.container {
  max-width: 900px !important;
}

.header-content {
  position: fixed;
  top: 2;
  left: 0;
  width: 100%;
  z-index: 80;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
}

.header-inner {
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
