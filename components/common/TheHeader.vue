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
          <h1>
            <v-toolbar-title>Kazuma Takanashi</v-toolbar-title>
          </h1>
          <v-spacer></v-spacer>
          <v-btn link nuxt to="#profile">自己紹介</v-btn>
          <v-btn link nuxt to="#history">経歴</v-btn>
          <v-btn link nuxt to="#gallery">ギャラリー</v-btn>
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
