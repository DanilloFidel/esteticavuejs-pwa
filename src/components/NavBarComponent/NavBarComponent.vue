<template>
    <div>
      <v-card class="nav-bar"></v-card>
      <v-btn class="primary">ok</v-btn>
    </div>
</template>

<script>
export default {
  name: "NavBarComponent",
  props: {

  }
};
</script>

<style scoped lang="scss">
@import "@/styles/sizes.scss";

.nav-bar{
  width: 100%;
  height: #{$navBarHeight};
}
</style>
