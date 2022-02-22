<template>
  <div class="resume">
    <div class="resume-container">
      <div class="mostly-customized-scrollbar">
        <div class="resume-body">
          <header>
            <div class="header-image-container">
              <div class="header-image-container-inner">
                <img :src="tour.base_info.photo" alt="logo" />
              </div>
            </div>
            <div class="base-information-container">
              <div class="section section-1">
                <span><font-awesome-icon icon="fa-solid fa-address-card" /> {{tour.base_info.name}}</span>
                <span><font-awesome-icon icon="fa-solid fa-map-location-dot" /> {{tour.base_info.workplace}}</span>
              </div>
              <div class="section section-2">
                <span><font-awesome-icon icon="fa-solid fa-envelope" /> {{tour.base_info.email}}</span>
              </div>
            </div>
          </header>
          <div class="resume-information-container">
            <BaseResumeCard v-for="(value, key, index) in tour.info" :title="key" :key="index" title-icon="fa-solid fa-circle-info">
              <span class="li ">{{value}}</span>
            </BaseResumeCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseResumeCard from "../components/BaseResumeCard";
  export default {
    name: "Resume",
    components: {BaseResumeCard},
    data() {
      return {
        tour: this.$route.params,
      }
    },
    mounted() {
      if (localStorage.getItem('tour') === null)
        localStorage.setItem('tour', JSON.stringify(this.tour));
      else
        this.tour = JSON.parse(localStorage.getItem('tour'));
    }
  }
</script>

<style scoped lang="scss">
 .resume {
   position: relative;
   width: 100vw;
   min-height: 100vh;
   .resume-container {
     z-index: 1;
     position: absolute;
     left: 0;
     right: 0;
     min-height: 100vh;
     .mostly-customized-scrollbar {
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100vh;
       overflow-x: hidden;
       @include set_background_color("text_color_1");
       .resume-body {
         position: relative;
         margin: 0 auto;
         width: 794px;
         @include set_background_color("background_color");
         padding-bottom: 40px;
         header {
           position: relative;
           width: 100%;
           height: 160px;
           @include set_background_color("card_color");
           box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.1);
           display: flex;
           align-items: center;
           justify-content: space-between;
           padding: 20px;
           .header-image-container {
             position: relative;
             width: 120px;
             height: 120px;
             border-radius: 10px;
             @include set_box_shadow('inset');
             @include set_background_color('background_color');
             .header-image-container-inner {
               position: absolute;
               top: 10px;
               left: 10px;
               right: 10px;
               bottom: 10px;
               border-radius: 5px;
               @include set_background_color('card_color');
               @include set_box_shadow('');
               display: flex;
               align-items: center;
               justify-content: center;
               overflow: hidden;
               img {
                 width: 90%;
                 height: 90%;
                 object-fit: cover;
                 @include set_filter_shadow();
               }
             }
           }
           .base-information-container {
             position: relative;
             width: calc(100% - 140px);
             height: 120px;
             display: flex;
             align-items: center;
             justify-content: space-between;
             flex-direction: column;
             .section {
               position: relative;
               width: 100%;
               height: 50%;
               display: flex;
               align-items: center;
               justify-content: space-between;
               span {
                 font-size: 16px;
                 svg {
                   path {
                     @include set_fill_color('button_color_1');
                   }
                 }
               }
             }
             .section-2 {
               justify-content: unset;
               border-top: dashed 2px rgba(0, 0, 0, 0.2);
               span {
                 margin-right: 40px;
               }
             }
           }
         }
         .resume-information-container {
           position: relative;
           width: 100%;
           padding: 40px 20px 0 20px;
           .li {
             margin-bottom: 10px;
             &:nth-last-child(1) {
               margin-bottom: 0;
             }
             word-break: break-all;
           }
           .base-resume-card {
             &:nth-last-child(1) {
               margin-bottom: 0;
             }
           }
         }
       }
     }
   }
 }

 .heightlight {
   @include set_text_color('button_color_1');
   font-weight: bold;
 }

  span {
    letter-spacing: 0.05rem;
  }

 @media only screen and (max-width: 794px) {
   .resume {
     .resume-container {
       .mostly-customized-scrollbar {
         .resume-body {
           width: 100%;
           margin: 0;
           padding-bottom: 20px;
           header {
             position: relative;
             width: 100%;
             height: 100px;
             @include set_background_color("card_color");
             box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.1);
             display: flex;
             align-items: center;
             justify-content: space-between;
             padding: 10px;
             .header-image-container {
               position: relative;
               width: 80px;
               height: 80px;
               border-radius: 5px;
               @include set_box_shadow('inset');
               @include set_background_color('background_color');
               .header-image-container-inner {
                 position: absolute;
                 top: 5px;
                 left: 5px;
                 right: 5px;
                 bottom: 5px;
                 border-radius: 2.5px;
                 @include set_background_color('card_color');
                 @include set_box_shadow('');
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 overflow: hidden;
                 img {
                   width: 90%;
                   height: 90%;
                   object-fit: cover;
                   @include set_filter_shadow();
                 }
               }
             }
             .base-information-container {
               position: relative;
               width: calc(100% - 90px);
               height: 80px;
               display: flex;
               align-items: center;
               justify-content: space-between;
               flex-direction: column;
               .section {
                 position: relative;
                 width: 100%;
                 height: 50%;
                 display: flex;
                 align-items: center;
                 justify-content: space-between;
                 span {
                   font-size: 12px;
                   word-break: keep-all;
                   svg {
                     path {
                       @include set_fill_color('button_color_1');
                     }
                   }
                 }
               }
               .section-2 {
                 border-top: dashed 2px rgba(0, 0, 0, 0.2);
                 span {
                   margin-right: unset;
                 }
               }
             }
           }
           .resume-information-container {
             position: relative;
             width: 100%;
             padding: 20px 10px 0 10px;
             .li {
               margin-bottom: 10px;
               font-size: 12px;
               &:nth-last-child(1) {
                 margin-bottom: 0;
               }
             }
             .education-info {
               position: relative;
               line-height: 20px;
               width: 100%;
               display: flex;
               align-items: center;
               justify-content: space-between;
               span {
                 position: relative;
                 width: calc(100% / 4);
                 height: 100%;
                 font-weight: bold;
                 display: flex;
                 align-items: center;
                 justify-content: space-between;
                 font-size: 12px;
               }
             }
             .base-resume-card {
               &:nth-last-child(1) {
                 margin-bottom: 0;
               }
             }
           }
         }
       }
     }
   }
 }
</style>
