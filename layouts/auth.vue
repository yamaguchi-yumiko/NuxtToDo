<template>
  <v-app>
    <TheHeader />
    <v-content style="height: auto;" class="pa-0 fill-height">
      <v-container :class="{ 'pa-0': $vuetify.breakpoint.sm || $vuetify.breakpoint.xs }">
        <nuxt />
      </v-container>
    </v-content>
    <footer style>
      <div class="pa-8 d-flex flex-warp justify-center fill-wdith">
        <nuxt-link to="privacy" class="link-caption mr-8">プライバシーポリシー</nuxt-link>
        <nuxt-link to="tos" class="link-caption mr-8">利用規約</nuxt-link>
      </div>
    </footer>
  </v-app>
</template>
<script>
import TheHeader from '~/components/shared/Header.vue'
export default {
  name: "auth",
  components: {
    TheHeader,
  },
}
</script>

<style lang="scss">
.fill-width {
  width: 100%;
}

.link-caption {
  text-decoration: none;
  color: #666 !important;
  font-size: 0.75rem;
}

.separator {
  margin-top: 30px;
  margin-bottom: 30px;
  height: 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #fff;
  position: relative;
}

.middle_separator {
  position: absolute;
  padding: 0 16px;
  color: #ccc;
  background: #fff;
  font-size: 11px;
  text-shadow: 0 1px 0 #fff;
  text-transform: uppercase;
  top: -7px;
  left: 30%;
}

.middle_separator {
  color: #777;
  font-size: 13px;
  top: -9px;
  left: 41%;
}
</style>
