<template>
  <div class="search-content">
    <v-text-field hide-details placeholder="キーワードを入力" dense v-model="search" class="keyword-input" />
    <v-btn @click="$store.dispatch('search/updateDataAction', search)" small elevation="6">検索</v-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    search: ''
  })
}
</script>
<style lang="scss">
@mixin sp {
  @media screen and (max-width: 768px) {
    @content;
  }
}

.keyword-input {
  margin: 0 10px;
}

.search-content {
  display: flex;
  align-items: center;
  @include sp {
    margin-top: 20px;
  }
}
</style>
