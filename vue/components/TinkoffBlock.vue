<template>
  <section id="tinkoff">
    <div class="container">
      <div class="title">
        <h2>Не откладывайте покупку на завтра!</h2>
        <p class="subtitle">
          Рассрочка от банка Тинькофф на 4 месяца без процентов и&nbsp;переплат
        </p>
      </div>

      <div class="tinkoff-wrapper">
        <div class="tinkoff-wrapper__content">
          <div class="features-box">
            <div
              v-for="(feature, i) in features"
              :key="i"
              class="features-box__item"
            >
              <p>
                {{ feature.title }}
              </p>
              <p>
                {{ feature.text }}
              </p>
            </div>
          </div>

          <div v-if="mobile" class="tinkoff-wrapper__img">
            <my-image
              :alt="'Рассрочка на самогонный аппарат'"
              :sorce="'build/images/tinkoff/tinkoff@05x'"
              :mobile="false"
            />
          </div>

          <div class="step-box">
            <div v-for="(step, i) in steps" :key="i" class="step-box__row">
              <p>Шаг {{ i + 1 }}</p>
              <p>{{ step }}</p>
            </div>
          </div>

          <div class="offer-box">
            <div class="new">
              от {{ Math.floor(getMainPrices[0] / 4).toLocaleString() }} ₽ /
              мес.
            </div>
            <div class="old">{{ getMainPrices[1].toLocaleString() }} ₽</div>
          </div>

          <button @click="orderModalOpen">Купить в рассрочку</button>
        </div>

        <div v-if="!mobile" class="tinkoff-wrapper__img">
          <my-image
            :alt="'Рассрочка на самогонный аппарат'"
            :sorce="'build/images/tinkoff/tinkoff'"
            :mobile="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  methods: {
    ...mapMutations(["changeUserRassrochka"]),

    orderModalOpen() {
      this.changeUserRassrochka(true);
      Fancybox.show([
        {
          src: "#order-modal",
        },
      ]);
    },
  },
  computed: mapGetters(["getMainPrices"]),
  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 1180px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.mobile = false;
      } else {
        this.mobile = true;
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
  data() {
    return {
      mobile: window.innerWidth < 1181,
      steps: [
        "Нажмите кнопку «Купить в рассрочку»",
        "В появившемся окне выберите нужную комплектацию",
        "Нажмите кнопку «Заказать»",
      ],

      features: [
        {
          title: "Без",
          text: "первоначального взноса",
        },
        {
          title: "Без",
          text: "процентов",
        },
        {
          title: "Первый платеж",
          text: "через месяц",
        },
      ],
    };
  },
  components: { MyImage },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#tinkoff {
  @extend %pbt-gray;

  .container {
    @media (max-width: 1180px) {
      max-width: 800px;
    }
  }

  .title {
    background: #ffd600;
    padding: 15px 10px;
    margin-bottom: 40px;
    border-radius: 30px;
    gap: 30px;
    @media (max-width: 992px) {
      gap: 20px;
    }
    @media (max-width: 768px) {
      background: none;
      gap: 15px;
      padding: 0;
    }
  }

  .tinkoff-wrapper {
    border-radius: 30px;
    display: flex;
    align-items: stretch;
    gap: 25px;

    padding: 20px 20px 0;

    background: #ffffff;
    box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.15);

    &__img {
      align-self: flex-end;

      @media (min-width: 1181px) {
        max-width: 43%;
      }
    }

    &__content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 20px;
      padding-bottom: 20px;

      @media (max-width: 1180px) {
        display: block;

        & > * {
          &:not(:last-child) {
            margin-bottom: 30px;
          }
        }
      }

      @media (max-width: 992px) {
        picture {
          justify-content: center;
        }
        .tinkoff-wrapper__img {
          @include aspect() {
            aspect-ratio: 555/541;
            max-width: 555px;
            width: 100%;
          }
        }
      }

      .step-box {
        display: flex;
        flex-direction: column;

        &__row {
          display: flex;
          gap: 14px;
          align-items: start;
          &:not(:last-child) {
            margin-bottom: 25px;

            @media (max-width: 768px) {
              margin-bottom: 15px;
            }
          }

          p {
            font-family: "Inter";
            font-style: normal;
            color: #323232;
            font-size: 20px;
            line-height: 135%;
            &:first-child {
              font-weight: 600;

              white-space: nowrap;
              @include fluidFontSize(16, 20, 992, 1920);

              @media (max-width: 768px) {
                font-size: 18px;
                font-weight: 600;
                line-height: 25px;
              }
            }

            &:last-child {
              font-weight: 400;

              @include fluidFontSize(16, 20, 992, 1920);

              @media (max-width: 768px) {
                font-size: 16px;
                line-height: 23px;
              }
            }
          }
        }
      }

      .features-box {
        display: flex;
        gap: 20px;
        @media (max-width: 1366px) {
          gap: 12px;
        }

        @media (max-width: 768px) {
          align-items: center;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }

        &__item {
          padding: 19px 0px;
          max-width: 235px;
          flex: 1 1 0;
          background: #ffffff;

          /* 1 */
          box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.15);

          border-radius: 20px;
          @media (max-width: 768px) {
            width: 100%;
            flex: none;
            min-width: 235px;
          }

          p {
            font-style: normal;
            text-align: center;
            color: #323232;

            &:first-child {
              font-family: "Lato";

              white-space: nowrap;
              margin-bottom: 5px;

              font-size: 26px;
              font-weight: 600;
              line-height: 119.231%;

              @include fluidFontSize(20, 26, 992, 1920);

              @media (max-width: 768px) {
                font-size: 22px;
                line-height: 29px;
                margin-bottom: 0;
              }
            }

            &:last-child {
              font-size: 18px;
              line-height: 139%;

              font-family: "Inter";
              font-size: 18px;
              font-weight: 300;

              @include fluidFontSize(14, 18, 992, 1920);

              @media (max-width: 768px) {
                font-size: 18px;
                line-height: 25px;
              }
            }
          }
        }
      }

      .offer-box {
        display: flex;
        gap: 22px;
        align-items: center;

        @media (max-width: 576px) {
          flex-direction: column;
          gap: 15px;
        }

        .new {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 47px;
          color: #323232;

          @media (max-width: 768px) {
            font-size: 28px;
            font-weight: 600;
            line-height: 35px; /* 125% */
          }
        }

        .old {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          text-decoration-line: line-through;
          color: #a8a8a8;
          font-size: 30px;
          line-height: 37px;

          @media (max-width: 768px) {
            font-size: 20px;
            font-weight: 400;
            line-height: 27px;
          }
        }
      }

      button {
        @extend %button-yellow;
        @media (max-width: 768px) {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
