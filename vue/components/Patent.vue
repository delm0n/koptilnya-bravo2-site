<template>
  <section id="patent">
    <div class="container">
      <div class="title">
        <h2>Государственная документация Bravo&nbsp;2</h2>
        <p class="subtitle">Для нас имеет значение репутация наших товаров!</p>
      </div>
      <div class="patent-wrap">
        <div class="swiper-wrapper">
          <div v-for="(pat, i) in patents" :key="i" class="swiper-slide">
            <div
              class="patent-item"
              data-fancybox
              :href="
                'build/images/patent/' +
                pat.img +
                (getWebp === 'webp' ? '.webp' : '.png')
              "
            >
              <div class="patent-item__img">
                <my-image
                  :alt="pat.title"
                  :sorce="'build/images/patent/' + pat.img"
                  :mobile="false"
                />
              </div>

              <div class="patent-item__btn">
                <p v-html="pat.title"></p>
              </div>
            </div>
          </div>
        </div>

        <div class="patent-navigation">
          <div class="patent-button-prev">
            <slider-button />
          </div>
          <div class="patent-current slider-current">
            <div class="this">{{ patentIndex }} /</div>
            <div ref="all" class="all">{{ patents.length }}</div>
          </div>
          <div class="patent-button-next">
            <slider-button :rotate="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation } from "swiper";
import MyImage from "../UI/MyImage.vue";
import SliderButton from "../UI/SliderButton.vue";
import { mapGetters } from "vuex";

export default {
  components: { MyImage, SliderButton },
  data() {
    return {
      patentIndex: 1,
      patents: [
        {
          title: "Сертификат соответствия",
          img: "test",
        },

        {
          title: "Свидетельство",
          img: "test",
        },

        {
          title: "Свидетельство",
          img: "test",
        },
      ],
    };
  },
  mounted() {
    let context = this;

    let myPatentSwiper;
    const patentSwiper = () => {
      myPatentSwiper = new Swiper(".patent-wrap", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
        grabCursor: true,
        loop: true,
        navigation: {
          nextEl: ".patent-button-next",
          prevEl: ".patent-button-prev",
        },
        modules: [Navigation],

        breakpoints: {
          1126: {
            spaceBetween: 40,
          },

          769: {
            spaceBetween: 20,
          },

          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },

        on: {
          slideChange: function () {
            context.patentIndex = this.realIndex + 1;
          },
          init: function () {
            context.patentIndex = this.realIndex + 1;
          },
        },
      });
    };

    addEventListener("resize", (event) => {
      myPatentSwiper.destroy(true, true);
      patentSwiper();
    });
    patentSwiper();
  },
  computed: mapGetters(["getWebp"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#patent {
  overflow: hidden;
  @extend %pbt;

  .patent-wrap {
    .img-wrap {
      picture {
        justify-content: center;
      }
    }

    .patent-navigation {
      display: none;
      @media (max-width: 768px) {
        @include navigation() {
          margin: 30px auto 20px;
        }
      }

      @media (max-width: 576px) {
        margin-top: 20px;
      }
    }
  }

  .patent-item {
    &__img {
      @include aspect() {
        aspect-ratio: 433/559;
        width: 100%;

        @media (max-width: 768px) {
          max-width: 442px;
        }
      }
    }
    &__btn p {
      margin-top: 30px;
      color: #323232;
      font-family: "Inter";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 131.818%;
      text-decoration-line: underline;
      text-align: center;
      cursor: pointer;

      @include fluidFontSize(18, 22, 992, 1920);

      @media (max-width: 768px) {
        margin-top: 15px;
        font-size: 16px;
        line-height: 23px;
      }
    }
  }
}
</style>