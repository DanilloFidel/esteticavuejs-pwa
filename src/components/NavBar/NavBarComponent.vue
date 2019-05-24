<template>
  <v-card class="nav-bar" color="primary">
    <v-container fluid class="pa-0" justify-space-between>
      <v-layout>
        <v-flex lg2>
          <div class="nav-bar__logo-wrapper pl-4">
            <v-icon>image</v-icon>
          </div>
        </v-flex>
        <v-flex lg6>
          <v-tabs color="primary" slider-color="accent" class="ml-5">
            <v-tab :ripple="false" v-for="(option, idx) in navBarOptions" :key="idx">{{ option }}</v-tab>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "NavBarComponent",
  data: ()=> ({
    navBarOptions: ["Inicio","Serviços","Promoções","Fale Conosco"],
  }),
  props: {}
};
</script>

<style scoped lang="scss">
@import "@/styles/sizes.scss";

.nav-bar {
  width: 100%;
  height: #{$navBarHeight};
  &__logo-wrapper {
    display: flex;
    height: 100%;
  }
}
</style>
