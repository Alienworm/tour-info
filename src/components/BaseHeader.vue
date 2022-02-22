<template>
  <div class="base-header">
    <div class="title">{{title}}</div>
    <BaseButton class="theme-switch" @click.native="switchTheme">
      <span>
        <font-awesome-icon v-if="currentTheme === 'light'" :icon="['fas', 'moon']" />
        <font-awesome-icon v-else :icon="['fas', 'sun']" />
      </span>
    </BaseButton>
  </div>
</template>

<script>
  import Vue from "vue";
  import BaseButton from "./BaseButton";
  export default {
    name: "BaseHeader",
    components: { BaseButton },
    props: {
      title: String
    },
    data() {
      return {
        currentTheme: localStorage.getItem("theme"),
        keyword: "",
      }
    },
    methods: {
      // 主题切换
      switchTheme() {
        this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
        localStorage.setItem("theme", this.currentTheme);
        Vue.prototype.switchTheme(this.currentTheme);
      }
    }
  }
</script>

<style scoped lang="scss">
  .base-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    @include set_background_color('card_color');
    @include set_box_shadow('');
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    .title {
      font-size: 20px;
    }
    .theme-switch {
      width: 30px;
      height: 30px;
      border-radius: 15px;
    }
  }
</style>
