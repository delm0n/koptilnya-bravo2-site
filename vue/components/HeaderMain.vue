<template>
  <div id="header-main">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-wrapper__title">
          <h1>
            Коптильня Bravo&nbsp;2
            <span> Ароматное мясо и рыба всего <b> за 40 минут </b> </span>
          </h1>
        </div>
        <div class="header-wrapper__img">
          <my-image
            :lazyLoad="false"
            :media="577"
            :alt="'Коптильня браво 2'"
            :sorce="'build/images/header/hero'"
          />
        </div>
        <div class="header-wrapper__features">
          <div
            v-for="(item, index) in features"
            :key="index"
            class="features-item"
          >
            <p class="features-item__title" v-html="item.title"></p>
            <p class="features-item__text" v-html="item.text"></p>
          </div>

          <a
            href="https://youtu.be/As48Al52sh4"
            data-fancybox
            class="features-video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="66"
              height="65"
              viewBox="0 0 66 65"
              fill="none"
            >
              <circle
                opacity="0.7"
                cx="33.0529"
                cy="32.0725"
                r="23.5197"
                fill="#E2BC85"
              />
              <circle
                opacity="0.5"
                cx="32.625"
                cy="32.5"
                r="32"
                stroke="#AE874E"
              />
              <path
                d="M39.0488 31.0476C40.3822 31.8174 40.3822 33.7419 39.0488 34.5117L32.2199 38.4544C30.8865 39.2242 29.2199 38.262 29.2199 36.7224L29.2199 28.837C29.2199 27.2974 30.8865 26.3351 32.2199 27.1049L39.0488 31.0476Z"
                fill="#AE874E"
              />
            </svg>
            <p>
              Посмотреть видео <br />
              о коптильне
            </p>
          </a>
        </div>
        <div class="header-wrapper__offer">
          <div class="prices">
            <div class="new">от {{ getMainPrices[0].toLocaleString() }} ₽</div>
            <div class="old">{{ getMainPrices[1].toLocaleString() }} ₽</div>
          </div>
          <button @click="openModal()">Заказать с подарками</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { mapGetters } from "vuex";

export default {
  components: { MyImage },
  data() {
    return {
      features: [
        {
          title: "Коптите прямо на кухне",
          text: "Тройная защита от дыма",
        },

        {
          title: "10 лет эксплуатации без поломок",
          text: "Заводская гарантия 1 год",
        },

        {
          title: "Аппарат 2 в 1 — разнообразие блюд",
          text: "Горячее и холодное копчение",
        },

        {
          title: "До 20 кг готового продукта",
          text: "За 1 копчение",
        },

        {
          title: "+5 подарков",
          text: "жгут, щепа для копчения, купон на 1000&nbsp;руб., книга рецептов, нитритная соль",
        },
      ],
    };
  },
  computed: mapGetters(["getMainPrices"]),

  methods: {
    openModal() {
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#order-modal",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#header-main {
  margin-top: 140px;
  @media (max-width: 768px) {
    margin-top: 90px;
  }
  overflow: hidden;
  .header-wrapper {
    display: grid;
    grid-template-columns: 594px auto;

    @media (max-width: 1280px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 0 30px;
    }

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 0;
    }

    &__title {
      padding-bottom: 30px;
      @media (max-width: 1280px) and (min-width: 993px) {
        grid-column: 1/3;
        grid-row: 1/2;
      }

      @media (max-width: 576px) {
        padding-bottom: 20px;
      }

      h1 {
        color: #323232;
        font-family: "Lato";
        font-size: 60px;
        font-style: normal;
        font-weight: 500;
        line-height: 111.667%;
        margin-bottom: 15px;

        @media (max-width: 992px) {
          text-align: center;
          @include fluidFontSize(44, 60, 768, 992);
        }

        @media (max-width: 576px) {
          font-size: 24px;
          margin-bottom: 10px;
          line-height: 31px;
        }

        span {
          font-size: 28px;
          font-weight: 400;
          line-height: 125%;
          display: block;

          @media (max-width: 992px) {
            @include fluidFontSize(20, 28, 768, 992);
          }

          @media (max-width: 576px) {
            font-size: 18px;
            line-height: 25px;
          }

          b {
            font-weight: 400;
            color: #e2bc85;
          }
        }
      }
    }

    &__features {
      .features-item {
        margin-bottom: 20px;
        max-width: 400px;
        color: #323232;
        font-style: normal;

        @media (max-width: 992px) {
          text-align: center;
          margin: 0 auto 20px;
        }

        &__title {
          font-family: "Lato";
          font-size: 20px;
          font-weight: 600;
          line-height: 27px; /* 135% */
          margin-bottom: 5px;

          @media (max-width: 576px) {
            font-size: 18px;
            line-height: 25px;
          }
        }

        &__text {
          font-family: "Inter";
          font-size: 18px;
          font-weight: 300;
          line-height: 25px; /* 138.889% */
          @media (max-width: 576px) {
            font-size: 16px;
            line-height: 23px; /* 143.75% */
          }
        }
      }

      .features-video {
        cursor: pointer;
        display: flex;
        gap: 15px;
        align-items: center;

        @media (max-width: 992px) {
          justify-content: center;
        }

        p {
          color: #323232;
          font-family: "Lato";
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 27px; /* 135% */

          @media (max-width: 576px) {
            font-size: 18px;
            line-height: 25px; /* 138.889% */
          }
        }

        svg {
          * {
            transition: all 0.3s;
          }
        }

        &:hover circle {
          &:first-child {
            fill: #c8a066;
          }
        }
      }
    }

    &__img {
      margin-left: auto;
      grid-row: 1/4;
      align-self: center;
      grid-column: 2/3;

      .img-wrap {
        max-width: 572px;
        width: 100%;
      }

      @media (max-width: 1280px) {
        grid-column: 2/3;
        align-self: flex-start;
        grid-row: 2/4;
      }

      @media (max-width: 992px) {
        grid-column: 1/2;
        grid-row: 2/3;
        margin: 0 auto 30px;
        max-width: 475px;
      }
    }

    &__offer {
      display: flex;
      flex-direction: row-reverse;
      gap: 20px;
      align-items: center;
      padding: 40px 0;
      flex-wrap: wrap;
      justify-content: start;

      @media (max-width: 992px) {
        flex-direction: column;
        justify-content: center;
        padding: 25px 0;
      }

      button {
        @extend %button-main;
      }

      .prices {
        display: flex;
        gap: 15px;
        align-items: center;
        font-family: "Inter";
        font-style: normal;

        .new {
          color: #323232;
          font-size: 35px;
          font-weight: 600;
          line-height: 42px; /* 120% */
          white-space: nowrap;

          @media (max-width: 576px) {
            font-size: 30px;
            line-height: 37px;
          }
        }

        .old {
          white-space: nowrap;
          color: #9f9f9f;
          font-size: 24px;
          font-weight: 300;
          line-height: 31px; /* 129.167% */
          text-decoration: line-through;

          @media (max-width: 576px) {
            font-size: 20px;
            line-height: 27px;
          }
        }
      }
    }
  }
}
</style>