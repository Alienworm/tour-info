<template>
  <div class="college-list">
    <BaseHeader title="华南农业大学-导师信息"></BaseHeader>
    <div class="college-list-container">
      <div class="mostly-customized-scrollbar">
        <div class="college-info" v-for="(college, index) in collegeList" :key="index" @click="toTourList(college)">
          <span>{{college.name}}</span>
          <span><font-awesome-icon icon="fa-solid fa-arrow-right-long" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseHeader from "../components/BaseHeader";
  export default {
    name: "CollegeList",
    components: {BaseHeader},
    data() {
      return {
        collegeList: [
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
          {name: 'alienworm', url: 'alienworm.top'},
        ]
      }
    },
    methods: {
      toTourList(college) {
        this.$router.push({ name: 'TourList', params: college})
      }
    }
  }
</script>

<style scoped lang="scss">
  .college-list {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    header {
      z-index: 2;
    }
    .college-list-container {
      position: absolute;
      left: 0;
      right: 0;
      top: 60px;
      min-height: calc(100vh - 60px);
      .mostly-customized-scrollbar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100vh - 60px);
        overflow-x: hidden;
        padding: 15px 15px 0 15px;
        .college-info {
          position: relative;
          width: 100%;
          height: 40px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 5px;
          @include set_box_shadow('');
          @include set_background_color("card_color");
          overflow: hidden;
          padding: 0 15px;
          span {
            font-size: 16px;
            svg {
              path {
                @include set_fill_color('button_color_1');
              }
            }
          }
          &:hover {
            filter: brightness(0.8);
          }
          transition: all 0.3s;
          cursor: pointer;
        }
      }
    }
  }
</style>
