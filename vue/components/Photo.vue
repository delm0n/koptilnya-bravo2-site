<template>
  <section id="photo">
    <div class="container">
      <div class="title">
        <h2>
          Реальные фото <br />
          коптильни Bravo&nbsp;2
        </h2>
      </div>

      <div v-if="mobile" class="photo-wrapper">
        <div
          v-for="(col, index) in cols"
          :key="index"
          class="photo-wrapper__col"
        >
          <a
            :href="
              'build/images/photo/' +
              col.up +
              '-modal' +
              (getWebp === 'webp' ? '.webp' : '.png')
            "
            data-fancybox="gallery"
            class="photo-wrapper__img"
          >
            <picture>
              <source
                :srcset="img ? 'build/images/photo/' + col.up + '.webp' : ''"
                type="image/webp"
              />
              <img
                :style="'aspect-ratio: ' + col.up_asprat"
                :src="img ? 'build/images/photo/' + col.up + '.png' : ''"
                alt="Фото алхимика"
              />
            </picture>
          </a>

          <a
            :href="
              'build/images/photo/' +
              col.down +
              '-modal' +
              (getWebp === 'webp' ? '.webp' : '.png')
            "
            data-fancybox="gallery"
            class="photo-wrapper__img"
          >
            <picture>
              <source
                :srcset="img ? 'build/images/photo/' + col.down + '.webp' : ''"
                type="image/webp"
              />
              <img
                :style="'aspect-ratio: ' + col.down_asprat"
                :src="img ? 'build/images/photo/' + col.down + '.png' : ''"
                alt="Фото алхимика"
              />
            </picture>
          </a>
        </div>
      </div>

      <div v-if="!mobile" class="photo-slider">
        <div class="swiper-wrapper">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="swiper-slide"
          >
            <a
              :href="
                'build/images/photo/' +
                slide.href +
                (getWebp === 'webp' ? '.webp' : '.png')
              "
              data-fancybox="gallery"
              class="photo-wrapper__img"
            >
              <picture>
                <source
                  :srcset="'build/images/photo/' + slide.img + '.webp'"
                  type="image/webp"
                />
                <img
                  :src="'build/images/photo/' + slide.img + '.png'"
                  alt="Фото алхимика"
                />
              </picture>
            </a>
          </div>
        </div>
        <div class="photo-navigation">
          <div class="photo-button-prev">
            <slider-button />
          </div>
          <div class="photo-current slider-current">
            <div class="this">{{ photoIndex }} /</div>
            <div ref="all" class="all">{{ slides.length }}</div>
          </div>
          <div class="photo-button-next">
            <slider-button :rotate="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { Swiper, Navigation } from "swiper";
import SliderButton from "../UI/SliderButton.vue";

export default {
  components: { SliderButton },
  computed: mapGetters(["getWebp"]),
  data() {
    return {
      img: false,
      mobile: false,
      photoIndex: 1,
      cols: [
        {
          up: "col-1-1",
          down: "col-1-2",
          up_asprat: "335/449",
          down_asprat: "335/216",
        },

        {
          up: "col-2-1",
          down: "col-2-2",
          up_asprat: "335/301",
          down_asprat: "335/364",
        },

        {
          up: "col-3-1",
          down: "col-3-2",
          up_asprat: "335/367",
          down_asprat: "335/297",
        },

        {
          up: "col-4-1",
          down: "col-4-2",
          up_asprat: "335/260",
          down_asprat: "335/405",
        },
      ],
      slides: [
        {
          img: "slide-1",
          href: "col-1-1-modal",
        },

        {
          img: "slide-2",
          href: "col-2-1-modal",
        },

        {
          img: "slide-3",
          href: "col-3-1-modal",
        },

        {
          img: "slide-4",
          href: "col-4-1-modal",
        },

        {
          img: "slide-5",
          href: "col-1-2-modal",
        },

        {
          img: "slide-6",
          href: "col-2-2-modal",
        },

        {
          img: "slide-7",
          href: "col-3-2-modal",
        },

        {
          img: "slide-8",
          href: "col-4-2-modal",
        },
      ],
    };
  },

  mounted() {
    this.gsap.timeline({
      delay: 4,
      scrollTrigger: {
        once: true,
        trigger: "#photo",
        start: "-60% bottom",
        onEnter: this.loadImg,
        onEnterBack: this.loadImg,
      },
    });

    let context = this;
    let myPhotoSwiper;
    const photoSwiper = () => {
      myPhotoSwiper = new Swiper(".photo-slider", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        navigation: {
          nextEl: ".photo-button-next",
          prevEl: ".photo-button-prev",
        },
        modules: [Navigation],

        on: {
          slideChange: function () {
            context.photoIndex = this.realIndex + 1;
          },
          init: function () {
            context.photoIndex = this.realIndex + 1;
          },
        },
      });
    };

    const photoSwiperbreakpoint = window.matchMedia("(min-width: 577px)");
    const breakpointChecker = () => {
      if (!photoSwiperbreakpoint.matches) {
        this.mobile = false;
        setTimeout(() => {
          return photoSwiper();
        }, 10);
      } else {
        this.mobile = true;

        setTimeout(() => {
          if (myPhotoSwiper) {
            return myPhotoSwiper.destroy(true, true);
          }
        }, 10);
      }
    };

    photoSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },

  methods: {
    loadImg() {
      this.img = true;
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#photo {
  @extend %pbt-gray;
  overflow: hidden;

  .title h2 {
    @media (min-width: 577px) {
      br {
        display: none;
      }
    }
  }

  .photo-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;

    gap: 20px;

    @media (max-width: 992px) {
      gap: 10px;
    }

    @media (max-width: 425px) {
      gap: 5px;
    }

    &__col {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      gap: 20px;

      @media (max-width: 992px) {
        gap: 10px;
      }

      @media (max-width: 425px) {
        gap: 5px;
      }
    }

    &__img {
      border-radius: 10px;
      overflow: hidden;
      background: #f8f8f8;
      display: block;
      cursor: zoom-in;
      max-width: max-content;

      img {
        transition: all 0.4s;
        transform: scale(1.01);
        max-width: 100%;
      }

      @media (max-width: 425px) {
        border-radius: 5px;
      }

      &:hover {
        img {
          transform: scale(1.05);
        }
      }
    }
  }

  .photo-slider {
    .photo-wrapper__img {
      margin: 0 auto;
    }

    .photo-navigation {
      display: none;
      @media (max-width: 576px) {
        @include navigation() {
          margin: 20px auto;
        }
      }
    }
  }
}
</style>