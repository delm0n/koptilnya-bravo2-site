<template>
  <section id="made">
    <div class="container">
      <div class="title">
        <h2>Вы заказываете коптильню напрямую с завода!</h2>
      </div>

      <div class="made-wrapper">
        <div class="made-wrapper__list">
          <div class="container-list">
            <h3>Для вас это означает:</h3>

            <ul>
              <li
                v-for="(item, index) in madelist"
                :key="index"
                v-html="item"
              ></li>
            </ul>
          </div>
        </div>

        <div class="made-wrapper__slider">
          <div class="swiper-wrapper">
            <div
              v-for="(item, index) in slider"
              :key="index"
              class="swiper-slide"
            >
              <my-image
                :alt="item.alt"
                :sorce="'build/images/made/' + item.src"
                :media="577"
              />
            </div>
          </div>
          <div class="made-navigation">
            <div class="made-button-prev">
              <slider-button :white="true" />
            </div>
            <div class="made-current slider-current">
              <div class="this">{{ madeIndex }} /</div>
              <div ref="all" class="all">{{ madelist.length }}</div>
            </div>
            <div class="made-button-next">
              <slider-button :white="true" :rotate="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { Swiper, Navigation } from "swiper";
import SliderButton from "../UI/SliderButton.vue";

export default {
  components: { MyImage, SliderButton },
  data() {
    return {
      madeIndex: 1,
      madelist: [
        "Без посредников и наценок",
        "Коптильни всегда в наличии, отправка <br> будет&nbsp;незамедлительно",
        "Вся продукция проходит трёхэтапный контроль качества —&nbsp;брак&nbsp;исключён",
        `Мы работаем в соответствии с российским законодательством, все наши <br> гарантии 
           зафиксированны в&nbsp;<a class='links-to' target="_blank" href="uploadupdate/oferta-rus.pdf">договоре</a>`,
      ],

      slider: [
        {
          src: "made-1",
          alt: "Закажите Коптильню с завода",
        },
        {
          src: "made-2",
          alt: "Коптильню без брака",
        },
        {
          src: "made-1",
          alt: "Быстрая доставка коптилен",
        },

        {
          src: "made-2",
          alt: "Коптильня дёшево",
        },
      ],
    };
  },

  mounted() {
    let context = this;
    let myMadeSwiper;
    const madeSwiper = () => {
      myMadeSwiper = new Swiper(".made-wrapper__slider", {
        centeredSlides: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,

        loop: true,
        navigation: {
          nextEl: ".made-button-next",
          prevEl: ".made-button-prev",
        },
        modules: [Navigation],

        on: {
          slideChange: function () {
            context.madeIndex = this.realIndex + 1;
          },
          init: function () {
            context.madeIndex = this.realIndex + 1;
          },
        },
      });
    };

    addEventListener("resize", (event) => {
      myMadeSwiper.destroy(true, true);
      madeSwiper();
    });
    madeSwiper();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#made {
  @extend %pbt-gray;
  overflow: hidden;

  .made-wrapper {
    display: grid;
    grid-template-columns: minmax(469px, 55%) auto;
    align-items: center;

    @media (max-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    &__slider {
      overflow: hidden;
      position: relative;

      .made-navigation {
        @media (max-width: 992px) {
          @include navigation() {
            margin: 20px auto;
          }
        }

        .made-button-next,
        .made-button-prev {
          @media (min-width: 993px) {
            position: absolute;
            z-index: 5;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        .made-button-next {
          right: 10px;
        }
        .made-button-prev {
          left: 10px;
        }
      }

      .swiper-slide {
        opacity: 0;
        transition: opacity 0.2s 0s;
        &-active {
          opacity: 1;
        }
        .img-wrap {
          @media (min-width: 993px) {
            width: 88.5%;
          }
          margin: 0 auto;

          @media (max-width: 992px) {
            picture {
              justify-content: center;
            }
          }

          @include aspect() {
            aspect-ratio: 548/503;
            width: 100%;

            @media (max-width: 576px) {
              aspect-ratio: 274/253;
              max-width: 274px;
            }
          }
        }
      }
    }

    &__list {
      .container-list {
        max-width: 654px;
        padding-right: 10px;
        width: 100%;

        @media (max-width: 992px) {
          margin-bottom: 20px;
        }
      }

      h3 {
        color: #323232;
        font-family: "Lato";
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        margin-bottom: 35px;

        @include fluidFontSize(24, 28, 992, 1920);

        @media (max-width: 992px) {
          margin-bottom: 30px;
        }

        @media (max-width: 768px) {
          text-align: center;
          font-size: 20px;
          font-weight: 400;
          line-height: 27px;
          margin-bottom: 25px;
        }
      }

      .links-to {
        text-decoration-line: underline;
        color: #323232;
      }

      li {
        padding-left: calc(14px + 13px);
        position: relative;
        &:not(:last-child) {
          margin-bottom: 30px;

          @media (max-width: 1366px) {
            margin-bottom: 20px;
          }
          @media (max-width: 992px) {
            margin-bottom: 15px;
          }
        }

        @media (max-width: 375px) {
          br {
            display: none;
          }
        }

        color: #323232;
        font-family: "Inter";
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: 131.818%;

        @include fluidFontSize(20, 22, 992, 1920);

        @media (max-width: 992px) {
          font-size: 16px;
          font-weight: 400;
          line-height: 23px;
        }

        &::before {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          content: "";

          background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNyAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgNy42MTExMUw2IDEyLjVMMTUgMS41IiBzdHJva2U9IiNFMkJDODUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
            no-repeat;
          height: 16px;
          width: 16px;
          background-size: 100%;
          background-position: center;
        }
      }
    }
  }
}
</style>