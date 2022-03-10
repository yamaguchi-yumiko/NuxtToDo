<template>
  <main class="container">
    <div class="container-inner">
      <v-card :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" class="mx-auto fill-width" flat max-width="640">
        <v-card-title class="text-center pa-8">
          <h4 class="fill-width font-weight-bold" style="color:#385184;">会員登録</h4>
        </v-card-title>
        <div class="pt-6 text-center">ソーシャルアカウントで会員登録する</div>
        <div class="px-6 py-8">
          <div style="max-width:344px" class="mx-auto">
            <div>
              <v-btn class="fill-width text-capitalize caption" elevation="2" height="48px" outlined style="border-color:#979797;" rounded>
                <img class="button-logo-img mr-4" src="https://madeby.google.com/static/images/google_g_logo.svg" style="height:24px;" />
                Googleで登録
              </v-btn>
              <v-btn class="fill-width mt-5 text-capitalize caption" elevation="2" color="light-blue" dark depressed height="48px" rounded>
                <img class="button-logo-img mr-4" src style="height:24px;" />
                twitterで登録
              </v-btn>
              <v-btn class="fill-width mt-5 text-capitalize caption" elevation="2" color="#385184" dark depressed height="48px" rounded>
                <img class="button-logo-img mr-4" src style="height:24px;" />
                Facebookで登録
              </v-btn>
            </div>
            <div class="separator separator_login_page">
              <div class="middle_separator">または</div>
            </div>
            <div class="pt-6 text-center">メールアドレスとパスワードで登録する</div>
            <div class="pt-6">
              <div>
                <v-text-field v-model="email" autofocus dense height="48px" outlined placeholder="メールアドレス"></v-text-field>
                <v-text-field v-model="password" :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'" :type="passwordShow ? 'text' : 'password'" dense height="48px" name="input-password" outlined placeholder="パスワード" @click:append="passwordShow = !passwordShow"></v-text-field>
              </div>
            </div>
            <div class="login-btn pb-8">
              <v-btn class="fill-width caption" elevation="2" color="#DD693B" style="color:#fff;" depressed height="48px" rounded>会員登録</v-btn>
            </div>
            <v-divider></v-divider>
            <div class="pt-8 pb-4">
              <span>すでにアカウントをお持ちですか？</span>
              <nuxt-link to="/login">ログインに移動</nuxt-link>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </main>
</template>

<script>
export default {
  layout: "auth",
  components: {
  }
}
</script>

<style lang="scss">
.container-inner {
  padding-top: 100px;
}
</style>
