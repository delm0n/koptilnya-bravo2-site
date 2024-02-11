<template>
  <section id="dishes">
    <div class="container">
      <div class="title">
        <h2>Вкусные деликатесы — не&nbsp;значит долго&nbsp;и&nbsp;дорого</h2>
        <p class="subtitle">
          Блюда из коптильни получаются вкуснее, натуральнее и дешевле,
          чем&nbsp;в&nbsp;магазине
        </p>
      </div>
      <div class="dishes-wrapper">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in dishes"
            :key="index"
            class="swiper-slide"
          >
            <div class="dishes-item">
              <my-image
                class="dishes-item__img"
                :alt="item.title"
                :sorce="'build/images/dishes/' + item.img"
                :media="577"
              />

              <h3 v-html="item.title"></h3>

              <div class="price">
                <p>
                  Цена в магазине: <span>{{ item.priceShop }} ₽</span>
                </p>
                <p>
                  Цена домашнего копчения: <span>{{ item.priceHome }} ₽</span>
                </p>
              </div>

              <div class="recipe">
                <p
                  @click="openModal(item.title, item.recipe)"
                  class="recipe-button"
                >
                  Посмотреть рецепт
                </p>
                <div class="recipe-time">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 8.78613V12.7861H9M20 12.7861C20 17.2044 16.4183 20.7861 12 20.7861C7.58172 20.7861 4 17.2044 4 12.7861C4 8.36785 7.58172 4.78613 12 4.78613C16.4183 4.78613 20 8.36785 20 12.7861Z"
                      stroke="#9F9F9F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p v-html="item.time"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dishes-navigation">
          <div class="dishes-button-prev">
            <slider-button />
          </div>
          <div class="dishes-current slider-current">
            <div class="this">{{ dishesIndex }} /</div>
            <div ref="all" class="all">{{ dishes.length }}</div>
          </div>
          <div class="dishes-button-next">
            <slider-button :rotate="true" />
          </div>
        </div>
      </div>
    </div>

    <div id="dishes-modal">
      <h3 v-html="modal.title"></h3>
      <p v-html="modal.text"></p>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation } from "swiper";
import SliderButton from "../UI/SliderButton.vue";
import MyImage from "../UI/MyImage.vue";

export default {
  data() {
    return {
      dishes: [
        {
          img: "dish-1",
          title: "Копчёная рулька из свинины",
          priceShop: 360,
          priceHome: 95,
          time: "50-80 минут",
          recipe: `
          
          Для нежной рульки вам потребуются:<br><span class='br'></span>
          <span class='li'>рулька — 2 кг;</span>
          <span class='li'>тёмное пиво — 2 л;</span>
          <span class='li'>чеснок — 6 зубчиков;</span>
          <span class='li'>специи по вкусу.</span>
          <br>
          Рульку необходимо отварить в пиве со специями в течение 1,5 часов. Затем остудить, сделать продольные надрезы и нашпиговать её чесноком. Коптить при температуре 80–95 градусов на ольховой щепе в течение 1,5–2 часов. Затем дать проветриться.

          `,
        },

        {
          img: "dish-2",
          title: "Копчёные рёбрышки",
          priceShop: 260,
          priceHome: 80,
          time: "50-80 минут",
          recipe: `
          
          Это самое простое блюдо для копчения.<br><br>
          Предлагаем оригинальный маринад на 2 кг рёбрышек:<br><span class='br'></span>
          <span class='li'>вода — 1 л;</span>
          <span class='li'>соль — 120 г;</span>
          <span class='li'>сахар — 1 ст. л.;</span>
          <span class='li'>чеснок и специи по вкусу;</span> 
          <span class='li'>водка — 50 мл.</span>
          <br>

          В воду добавить все специи и дать рассолу закипеть.Остудить маринад, добавить в него водки и положить рёбрышки. Выдержать продукт в рассоле сутки.
          <br>Копчение производить при температуре 90–95 градусов 1–1,5 часа. Лучше всего использовать щепу ольхи с дубом и буком.

          `,
        },

        {
          img: "dish-3",
          title: "Копчёная курица",
          priceShop: 307,
          priceHome: 55,
          time: "50-80 минут",
          recipe: `
          В коптильне Bravo 2 есть специальная насадка, на которой курочка приготовится быстро и правильно. Она не съедет, не завалится на бок и закоптится равномерно со всех сторон.
          <br>Курицу нужно натереть специями и чесноком, посолить и убрать в холодильник на 2 часа. Затем надеть на насадку и поставить в коптильню. Температура 80–100 градусов на ольховой щепе с добавлением вишни. Достаточно 40–60 минут.
          <br>В коптильне на 10 л вы сможете закоптить 1 курицу, на 20 л поместятся 2 штуки, а на 30 л — целых 3 штуки.
          `,
        },

        {
          img: "dish-4",
          title: "Копчёные окорочка",
          priceShop: 255,
          priceHome: 50,
          time: "50-80 минут",
          recipe: `
          
          Окорочка можно готовить в коптильне на противнях и на крючках, развесив их на нужной высоте. <br><br>
          На 12 штук потребуется:<br><span class='br'></span>
          
          <span class='li'>любая приправа для курицы — 1 пакетик;</span>
          <span class='li'>соевый соус — 7 ст. л.</span>

          <br>
          Мясо обтереть специями и перемешать с соевым соусом и оставить мариноваться на 3 часа. Затем разложить и развесить окорочка и коптить при температуре 90 градусов 60 минут. Щепу лучше использовать ольховую.

          `,
        },
        // <span class='li'></span>
        {
          img: "dish-5",
          title: "Копчёная горбуша",
          priceShop: 340,
          priceHome: 81,
          time: "50-80 минут",
          recipe: `
          Приготовить вкусную сочную горбушу в коптильне Bravo 2 можно целиком и кусочками. <br><br>
          Тушки портошёной рыбы нужно просолить сухим способом: обтереть солью снаружи и внутри. Если нужна золотистая корочка, снаружи дополнительно натереть сахаром. Оставить тушки на просолку на 36 часов в холодильнике. Рыба целиком должна солиться 4 суток. Затем её подсушивают (подвяливают) на воздухе 6 часов. <br><br>
          Копчение происходит при температуре 110 градусов. Целые рыбины коптят 2 часа, для кусочков филе достаточно 40 минут. Рыбка жирная, поэтому обязательно нужно установить поддон для сбора жира, чтобы не испортить вкус и аромат горбуши. Щепа подойдёт ольховая.
          `,
        },

        {
          img: "dish-6",
          title: "Копчёные колбаски",
          priceShop: 600,
          priceHome: 195,
          time: "50-80 минут",
          recipe: `
          В коптильне можно коптить готовые колбаски для гриля, которые продаются в магазине. Развешивать их нужно не плотно. <br>
          Время копчения — 45–60 минут, температура от 80 до 120 градусов.Подойдёт щепа ольхи, дуба или фруктовых деревьев.
          `,
        },
      ],
      dishesIndex: 1,
      modal: {
        title: "",
        text: "",
      },
    };
  },
  components: { SliderButton, MyImage },
  mounted() {
    let context = this;
    let myDishesSwiper;
    const dishesSwiper = () => {
      myDishesSwiper = new Swiper(".dishes-wrapper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        navigation: {
          nextEl: ".dishes-button-next",
          prevEl: ".dishes-button-prev",
        },
        modules: [Navigation],
        on: {
          slideChange: function () {
            context.dishesIndex = this.realIndex + 1;
          },
          init: function () {
            context.dishesIndex = this.realIndex + 1;
          },
        },
      });
    };

    const dishesSwiperbreakpoint = window.matchMedia("(min-width: 769px)");
    const breakpointChecker = () => {
      if (!dishesSwiperbreakpoint.matches) {
        return dishesSwiper();
      } else {
        if (myDishesSwiper) {
          return myDishesSwiper.destroy(true, true);
        }
      }
    };

    dishesSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },

  methods: {
    openModal(title, text) {
      this.modal = {
        title: title,
        text: text,
      };

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#dishes-modal",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";
#dishes {
  overflow: hidden;
  @extend %pbt;

  .dishes-item {
    // @media (max-width: 768px) {
    //   max-width: 420px;

    // }
    // @media (max-width: 576px) {
    //   max-width: 359px;margin: 0 auto;
    // }

    h3 {
      color: #323232;
      font-family: "Lato";
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 125%;
      margin-bottom: 20px;

      @include fluidFontSize(24, 28, 992, 1920);

      @media (max-width: 768px) {
        font-size: 20px;
        line-height: 26px;
        margin-bottom: 15px;
      }
    }

    &__img {
      margin-bottom: 15px;

      @media (min-width: 769px) {
        margin-bottom: 20px;
        img {
          width: 100%;
        }
      }

      @include aspect() {
        aspect-ratio: 420/251;
        width: 100%;

        @media (max-width: 768px) {
          max-width: 420px;
        }

        @media (max-width: 576px) {
          aspect-ratio: 360/239;
        }
      }
    }

    .price {
      margin-bottom: 20px;

      p {
        color: #323232;
        font-family: "Inter";
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: 131.818%;

        @include fluidFontSize(18, 22, 992, 1920);

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 21px;
        }

        &:first-child {
          margin-bottom: 15px;

          @media (max-width: 1280px) {
            margin-bottom: 10px;
          }

          @media (max-width: 768px) {
            margin-bottom: 5px;
          }
        }

        span {
          font-size: 20px;
          font-weight: 600;
          line-height: 27px;
          white-space: nowrap;

          @include fluidFontSize(18, 20, 992, 1920);

          @media (max-width: 768px) {
            font-size: 14px;
            line-height: 21px;
          }
        }
      }
    }

    .recipe {
      display: flex;
      align-items: center;
      gap: 20px;

      @media (max-width: 768px) {
        gap: 15px;
      }

      &-button {
        cursor: pointer;
        color: #ae874e;
        font-family: "Lato";
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 131.818%;
        text-decoration-line: underline;

        @include fluidFontSize(16, 22, 769, 1920);

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
        }

        transition: all 0.4s;

        &:hover {
          color: #c8a066;
        }
      }

      &-time {
        display: flex;
        align-items: center;
        gap: 5px;

        p {
          white-space: nowrap;
          color: #9f9f9f;
          font-family: "Inter";
          font-size: 18px;
          font-style: normal;
          font-weight: 300;
          line-height: 138.889%;

          @include fluidFontSize(16, 18, 992, 1920);

          @media (max-width: 768px) {
            font-size: 14px;
            line-height: 21px;
          }
        }
      }
    }
  }

  .dishes-wrapper {
    .dishes-navigation {
      display: none;
      @media (max-width: 768px) {
        @include navigation() {
          margin: 20px auto;
        }
      }
    }

    @media (max-width: 768px) {
      max-width: 420px;
      margin: 0 auto;
    }

    @media (max-width: 576px) {
      max-width: 358px;
    }

    .swiper-wrapper {
      @media (min-width: 769px) {
        max-width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
        box-sizing: border-box;
        border-radius: 30px;
        background: #fff;
        box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.15);
        padding: 40px;

        @media (max-width: 1440px) {
          gap: 30px;
          padding: 30px;
        }

        @media (max-width: 1366px) {
          gap: 25px;
          padding: 25px;
        }

        @media (max-width: 1280px) {
          max-width: 860px;
          margin: 0 auto;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px 25px;
        }
      }

      .swiper-slide {
        height: auto;
        @media (max-width: 768px) {
          opacity: 0;
          transition: opacity 0.2s 0s;
          &-active {
            opacity: 1;
          }
        }
      }
    }
  }
}

#dishes-modal {
  @extend %modal;
  @extend %modal-text;

  p {
    span.li {
      font-size: 16px;
      line-height: 23px;
      font-weight: 300;
      padding-left: 10px;
      position: relative;
      display: block;

      &:first-child {
        margin-top: 10px;
      }

      &::before {
        content: "•";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    span.br {
      display: block;
      margin-bottom: 4px;
    }
  }
}
</style>