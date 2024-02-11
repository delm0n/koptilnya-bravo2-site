<template>
  <section id="compare">
    <div class="container">
      <div class="title">
        <h2>Коптильня Bravo 2 — выбирайте&nbsp;лучшее</h2>
        <p class="subtitle">Сравните функционал и практичность</p>
      </div>
      <div class="desktop-title">
        <p>Другая коптильня</p>
        <p>Коптильня Bravo 2</p>
      </div>
      <div class="compare-wrapper">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in compares"
            :key="index"
            class="swiper-slide"
          >
            <div class="compare-row">
              <div class="compare-item">
                <div class="mobile-title">Другая коптильня</div>

                <my-image
                  :alt="'#'"
                  :sorce="'build/images/compare/' + item.another.img"
                  :mobile="false"
                  class="compare-item__img"
                />
                <div class="compare-item__title">
                  <h3 v-html="item.another.title"></h3>
                </div>
                <div class="compare-item__text">
                  <p v-html="item.another.text"></p>
                </div>
              </div>

              <div class="compare-item">
                <div class="mobile-title">Коптильня Bravo 2</div>

                <my-image
                  :alt="'#'"
                  :sorce="'build/images/compare/' + item.bravo.img"
                  :mobile="false"
                  class="compare-item__img"
                />
                <div class="compare-item__title">
                  <h3 v-html="item.bravo.title"></h3>
                </div>
                <div class="compare-item__text">
                  <p v-html="item.bravo.text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="compare-navigation">
          <div class="compare-button-prev">
            <slider-button />
          </div>
          <div class="compare-current slider-current">
            <div class="this">{{ compareIndex }} /</div>
            <div ref="all" class="all">{{ compares.length }}</div>
          </div>
          <div class="compare-button-next">
            <slider-button :rotate="true" />
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
      compares: [
        {
          another: {
            title: "Гидрозатвор",
            img: "test",
            text: `Плохо работает, если крышка закрывается не плотно. При скоплении конденсата в шланге дым сможет пройти через гидрозатвор в помещение.`,
          },

          bravo: {
            title: "Тройная система защиты от дыма",
            img: "bravo-1",
            text: `
            <ul> 
              <li> гидрозатвор;</li>
               <li> силиконовая прокладка;</li>
              <li>  4 зажима.</li>
            </ul> 
            `,
          },
        },

        {
          another: {
            title: "Металлические ручки",
            img: "test",
            text: `Обычные металлические ручки нагреваются вместе с корпусом коптильни. Это не безопасно для эксплуатации.`,
          },

          bravo: {
            title: "Термостойкие ручки",
            img: "bravo-2",
            text: `Не нагреваются в процессе работы коптильни. Её можно переносить и снимать с плиты, не обжигаясь.`,
          },
        },

        {
          another: {
            title: "Плоская крышка  ",
            img: "test",
            text: `Конденсат в коптильне скапливается на крышке и капает на продукт, увлажняя его. Это приводит к изменению вкуса копчёностей и преждевременной порче.`,
          },

          bravo: {
            title: "Купольная крышка",
            img: "bravo-3",
            text: `Крышка в форме купола не даёт конденсату капать на продукт. Влага стекает по стенкам аппарата и попадает в поддон для жира. Продукт обрабатывается исключительно дымом, коптится правильно и будет храниться положенное время, согласно срокам.`,
          },
        },

        {
          another: {
            title: "Противни",
            img: "test",
            text: `Ограничивают количество продуктов, которые поместятся в коптильню, не дают им коптиться равномерно и со всех сторон. `,
          },

          bravo: {
            title: "Вертикальное копчение",
            img: "bravo-4",
            text: `Крючки для вертикального копчения позволяют соблюдать технологию, обрабатывать продукт дымом со всех сторон, развешивать его на любой высоте, не соприкасая друг с другом.`,
          },
        },

        {
          another: {
            title: "Биметаллический термометр",
            img: "another-6",
            text: `Имеет погрешность и не даёт точного определения температуры, быстро выходит из строя.`,
          },

          bravo: {
            title: "Электронный термометр",
            img: "bravo-6",
            text: `Позволяет точно определять температуру на протяжении всего времени приготовления продукта, надёжен и прост в эксплуатации.`,
          },
        },

        {
          another: {
            title: "Ребристый поддон",
            img: "another-5",
            text: `Не удобно раскладывать продукты, на них могут оставаться следы от рёбер. Мясо и рыба могут прилипнуть к ним.`,
          },

          bravo: {
            title: "Правильный поддон",
            img: "bravo-5",
            text: `16 горизонтальных прорезей-дымоводов не оставляют следов на кусках мяса или рыбы. Продукт сохраняет форму и хорошо пропитывается дымом. Готовится быстрее и проще. Большая ровная площадь позволяет разложить его, как удобно.`,
          },
        },
      ],
      compareIndex: 1,
    };
  },

  mounted() {
    let context = this;
    let myCompareSwiper;
    const compareSwiper = () => {
      myCompareSwiper = new Swiper(".compare-wrapper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        autoHeight: true,
        grabCursor: true,
        allowTouchMove: false,
        loop: true,
        navigation: {
          nextEl: ".compare-button-next",
          prevEl: ".compare-button-prev",
        },
        modules: [Navigation],
        on: {
          slideChange: function () {
            context.compareIndex = this.realIndex + 1;
          },
          init: function () {
            context.compareIndex = this.realIndex + 1;
          },
        },
      });
    };

    const compareSwiperbreakpoint = window.matchMedia("(min-width: 1025px)");
    const breakpointChecker = () => {
      if (!compareSwiperbreakpoint.matches) {
        return compareSwiper();
      } else {
        if (myCompareSwiper) {
          return myCompareSwiper.destroy(true, true);
        }
      }
    };

    compareSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#compare {
  @extend %pbt-gray;
  overflow: hidden;

  .desktop-title {
    display: none;

    @media (min-width: 1025px) {
      display: flex;
      margin-bottom: 30px;

      p {
        width: 50%;
        color: #323232;
        text-align: center;
        font-family: "Lato";
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        line-height: 33px; /* 126.923% */
      }
    }
  }

  .compare-wrapper {
    @media (min-width: 1025px) {
      .swiper-wrapper {
        display: flex;
        flex-direction: column;
        gap: 25px;
      }

      .compare-navigation {
        display: none;
      }
    }

    @media (max-width: 1024px) {
      position: relative;

      @media (min-width: 769px) {
        max-width: 90%;
        margin: 0 auto;
      }
      .compare-navigation {
        display: block;

        @media (min-width: 769px) {
          .compare-current {
            display: none;
          }

          .compare-button-prev,
          .compare-button-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 5;
          }
        }
        .compare-button-prev {
          left: 10px;

          @media (max-width: 768px) {
            left: 0;
          }
        }

        .compare-button-next {
          right: 10px;
          @media (max-width: 768px) {
            right: 0;
          }
        }

        @media (max-width: 768px) {
          @include navigation() {
            margin: 30px auto 15px;
          }
        }
      }

      .swiper-slide {
        opacity: 0;
        // height: auto;
        transition: opacity 0.2s 0s;
        &-active {
          opacity: 1;
        }
      }
    }
  }

  .compare-row {
    display: flex;
    gap: 40px;

    @media (max-width: 1366px) {
      gap: 30px;
    }

    @media (max-width: 1024px) {
      max-width: calc(100% - 44px * 2 - 20px * 2);
      margin: 0 auto;
      gap: 20px;

      display: grid;
      grid-template-rows: 1fr 1fr;
      height: 100%;
    }

    @media (max-width: 768px) {
      max-width: 475px;
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 576px) {
      max-width: 335px;
    }

    .compare-item {
      border-radius: 20px;
      background: #fff;
      padding: 20px;
      box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.15);

      width: calc((100% - 40px) / 2);
      display: grid;
      grid-template-columns: 40% auto;
      grid-template-rows: 1fr auto auto 1fr;
      gap: 0px 30px;

      @media (max-width: 1366px) {
        width: calc((100% - 16px) / 2);
        gap: 0px 16px;
      }

      @media (max-width: 1024px) {
        width: 100%;
        grid-template-rows: auto 1fr auto auto 1fr;

        &:last-child {
          grid-row: 1/2;
        }
      }

      @media (max-width: 768px) {
        padding: 15px;
      }

      @media (max-width: 576px) {
        grid-template-columns: 1fr;
        border-radius: 10px;
        grid-template-rows: auto;
      }

      &__img {
        grid-column: 1/2;
        grid-row: 1/5;
        align-self: center;

        @include aspect() {
          aspect-ratio: 252/163;
          opacity: 0;

          @media (max-width: 576px) {
            aspect-ratio: 257/166;
            max-width: 257px;
          }
        }

        @media (max-width: 1024px) {
          grid-row: 2/6;
        }

        @media (max-width: 576px) {
          picture {
            justify-content: center;
          }
          grid-row: 2/3;
          margin-bottom: 15px;
        }
      }

      &__title {
        grid-row: 2/3;
        margin-bottom: 20px;

        @media (max-width: 1024px) {
          grid-row: 3/4;
        }
        @media (max-width: 768px) {
          margin-bottom: 10px;
        }
        @media (max-width: 576px) {
          grid-row: 3/4;
        }
        h3 {
          color: #323232;
          font-family: "Lato";
          font-size: 22px;
          font-style: normal;
          font-weight: 600;
          line-height: 131.818%;
          @include fluidFontSize(18, 22, 1025, 1920);

          @media (max-width: 768px) {
            font-size: 18px;
            line-height: 25px;
          }
        }
      }

      &__text {
        grid-row: 3/4;

        @media (max-width: 1024px) {
          grid-row: 4/5;
        }

        p,
        li {
          color: #323232;
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
        }

        p {
          font-size: 18px;
          line-height: 138.889%;
          @include fluidFontSize(14, 18, 1025, 1920);

          @media (max-width: 768px) {
            font-size: 14px;
            line-height: 21px;
          }
        }

        ul {
          padding-left: 20px;
        }

        li {
          list-style-type: disc;
          font-size: 16px;
          line-height: 143.75%;
          @include fluidFontSize(14, 16, 1025, 1920);
          @media (max-width: 768px) {
            font-size: 14px;
            line-height: 21px;
          }
        }
      }

      .mobile-title {
        display: none;
        @media (max-width: 1024px) {
          grid-row: 1/2;
          grid-column: 1/3;
          display: block;
          color: #323232;
          text-align: center;
          font-family: "Lato";
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 27px; /* 135% */
          margin-bottom: 10px;

          @media (max-width: 576px) {
            grid-column: 1/2;
          }
        }
      }
    }
  }
}
</style>
