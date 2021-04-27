<template>
  <div class="header">
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <div class="header__inner">
          <h1 class="ttl">
            <v-toolbar-title
              ><router-link to="/"
                >Kazuma Takanashi</router-link
              ></v-toolbar-title
            >
          </h1>
          <v-spacer class="pc-element"></v-spacer>
          <div class="header__button">
            <v-btn depressed link nuxt class="btn"
              ><router-link to="/profile/">自己紹介</router-link></v-btn
            >
            <v-btn depressed link nuxt class="btn"
              ><router-link to="/carrer/">経歴</router-link></v-btn
            >
            <v-btn depressed link nuxt class="btn"
              ><router-link to="/gallery/">ギャラリー</router-link></v-btn
            >
          </div>
        </div>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="600"
      >
      </v-sheet>
    </v-card>
  </div>
</template>
