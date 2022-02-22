<template>
  <div class="tour-list">
    <BaseHeader :title="params.name"></BaseHeader>
    <div class="tour-list-container">
      <div class="mostly-customized-scrollbar">
        <div class="tour-info" v-for="(tour, index) in tourList" :key="index" @click="toTourInfo(tour)">
          <div class="photo-container">
            <div class="photo-container-inner">
              <img :src="tour.base_info.photo" alt="logo" />
            </div>
          </div>
          <div class="base-information-container">
            <div class="section section-1">
              <span><font-awesome-icon icon="fa-solid fa-address-card" /> {{tour.base_info.name}}</span>
            </div>
            <div class="section section-2">
              <span><span class="height-light">研究领域</span>：{{tour.info.研究领域}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseHeader from "../components/BaseHeader";
  import { getTourList } from "../api/blog";
  export default {
    name: "TourList",
    components: {BaseHeader},
    data() {
      return {
        params: this.$route.params,
        tourList: [],
        tourInfo: {}
      }
    },
    mounted() {
      this.$nextTick(() => {
        if (localStorage.getItem('tour_list') === null)
          this.getTourList();
        else {
          this.tourList = JSON.parse(localStorage.getItem('tour_list'));
          this.params.name = localStorage.getItem('name');
        }
      });
    },
    methods: {
      async getTourList() {
        const result = await getTourList({'college_url': this.params.url});
        this.tourList = result.tour_list;
        localStorage.setItem('tour_list', JSON.stringify(this.tourList));
        localStorage.setItem('name', this.params.name);
      },
      toTourInfo(tour) {
        localStorage.removeItem('tour');
        this.$router.push({ name: 'Resume', params: tour})
      }
    }
  }
</script>

<style scoped lang="scss">
  .tour-list {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    header {
      z-index: 2;
    }
    .tour-list-container {
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
        .tour-info {
          position: relative;
          width: 100%;
          height: 120px;
          margin-bottom: 15px;
          border-radius: 5px;
          @include set_box_shadow('');
          @include set_background_color("card_color");
          overflow: hidden;
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
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          .photo-container {
            position: relative;
            width: 100px;
            height: 100px;
            border-radius: 5px;
            @include set_box_shadow('inset');
            @include set_background_color('background_color');
            .photo-container-inner {
              position: absolute;
              top: 10px;
              left: 10px;
              right: 10px;
              bottom: 10px;
              border-radius: 2.5px;
              @include set_background_color('card_color');
              @include set_box_shadow('');
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                @include set_filter_shadow();
              }
            }
          }
          .base-information-container {
            position: relative;
            width: calc(100% - 110px);
            height: 100px;
            overflow: hidden;
            .section {
              position: relative;
              width: 100%;
              min-height: 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              span {
                font-size: 12px;
                svg {
                  path {
                    @include set_fill_color('button_color_1');
                  }
                }
              }
              margin-bottom: 10px;
              .height-light {
                @include set_text_color('button_color_1');
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
</style>
