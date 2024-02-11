<template>
  <div id="dymogenerator-modal">
    <h3>
      Заказать коптильню Bravo&nbsp;2 и <br />
      дымогенератор Merkel&nbsp;2
    </h3>

    <div class="dymogenerator-wrapper">
      <div class="dymogenerator-wrapper__img">
        <my-image
          :alt="'Дымогенератор в комплекте'"
          :sorce="'build/images/src/Dymo'"
          :mobile="false"
        />
      </div>
      <div class="dymogenerator-wrapper__form">
        <form
          action=""
          v-on:submit.prevent
          method="post"
          class="spnForm form-order"
        >
          <div class="user-info">
            <droplist @action-droplist="actionDroplist" :array="getMain" />

            <input
              class="my-input"
              aria-label="Ваше имя"
              type="text"
              name="name"
              autocomplete="off"
              placeholder="Ваше имя"
              required
            />

            <input
              class="my-input"
              aria-label="Ваш номер телефона"
              type="tel"
              name="phone"
              autocomplete="off"
              placeholder="Ваш номер телефона"
              required
            />
          </div>

          <ul class="dops-list">
            <li>
              <label class="checkbox default">
                <input type="checkbox" v-model="getDymo.selected" />
                <div class="box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#323232"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span v-html="getDymo.name"> </span>
              </label>

              <span class="dops-list__price">
                <span
                  class="dops-list__price-new"
                  v-html="getDymo.price + ' ₽'"
                ></span>
                <span
                  class="dops-list__price-old"
                  v-html="getDymo.oldPrice + ' ₽'"
                >
                </span>
              </span>
            </li>
          </ul>

          <div class="form-price">
            <p
              class="form-price__new"
              v-html="getLastPrice.toLocaleString() + ' ₽'"
            ></p>
            <p
              class="form-price__old"
              v-html="getLastOldPrice.toLocaleString() + ' ₽'"
            ></p>
          </div>

          <button type="submit" class="button">Заказать</button>

          <template v-if="getDymo.selected">
            <input type="hidden" name="id[]" :value="getDymo.id" />
            <input
              type="hidden"
              :name="'quantity[' + getDymo.id + ']'"
              value="1"
            />
          </template>

          <form-helicon :main="true" :rassr="true" :dops="false" />
        </form>
        <rassrochka-checkbox />

        <div class="decr">
          <p>
            Менеджеры свяжутся с вами в ближайшее время, для <br />
            уточнения деталей заказа
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import RassrochkaCheckbox from "../UI/RassrochkaCheckbox.vue";
import Droplist from "../UI/Droplist.vue";
import FormHelicon from "./FormHelicon.vue";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { Droplist, RassrochkaCheckbox, FormHelicon, MyImage },
  computed: {
    ...mapGetters(["getMain", "getDymo"]),

    getLastPrice() {
      return (
        this.getMain.find((el) => el.selected).price +
        (this.getDymo.selected ? this.getDymo.price : 0)
      );
    },

    getLastOldPrice() {
      return (
        this.getMain.find((el) => el.selected).oldPrice +
        (this.getDymo.selected ? this.getDymo.oldPrice : 0)
      );
    },
  },

  methods: {
    actionDroplist(id) {
      this.selectMain(id);
    },
    ...mapMutations(["selectMain"]),
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#dymogenerator-modal {
  @extend %modal;
  max-width: 920px;

  padding: 20px 30px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 390px;
  }
  @media (max-width: 375px) {
    padding: 30px 10px 20px;
  }

  @media (min-width: 769px) {
    .my-input,
    .dropdown-hero {
      padding: 16px 23px;
    }
  }

  h3 {
    color: #323232;
    text-align: center;
    font-family: "Lato";
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 37px; /* 123.333% */
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 27px; /* 135% */
      margin-bottom: 15px;
    }
  }

  .decr {
    margin: 30px auto 0;

    p {
      color: #9f9f9f;
      text-align: center;
      font-size: 14px;
      font-family: "Lato";
      font-weight: 400;
      line-height: 21px;
      width: calc(100% + 20px);
      transform: translateX(-10px);

      @media (max-width: 768px) {
        br {
          display: none;
        }
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
  .checkbox.rassrochka {
    margin: 15px auto 0;
  }
  .dymogenerator-wrapper {
    display: flex;
    gap: 30px;

    @media (max-width: 1280px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &__img {
      @media (min-width: 769px) {
        width: 50%;
      }
    }

    &__form {
      max-width: 350px;
      // @media (min-width: 769px) {
      //   width: 41%;
      // }

      .form-price {
        display: flex;
        align-items: center;
        gap: 23px;
        margin-top: 15px;
        justify-content: center;
        p {
          font-family: "Inter";
          text-align: center;
          font-style: normal;
        }

        &__new {
          color: #323232;
          font-size: 35px;
          font-weight: 600;
          line-height: 120%;

          @media (max-width: 768px) {
            font-size: 30px;
            line-height: 37px;
          }
        }

        &__old {
          color: #9f9f9f;
          font-size: 24px;
          font-weight: 400;
          line-height: 129.167%;
          text-decoration-line: strikethrough;

          @media (max-width: 768px) {
            font-size: 21px;
            line-height: 28px;
          }
        }
      }

      .button {
        @extend %button-main;
        margin: 15px auto;
      }
    }
  }

  .dops-list {
    margin: 15px 0;
    li {
      @media (min-width: 769px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .checkbox {
        gap: 20px;
        background-color: #fff;
        z-index: 1;
        position: relative;
        align-items: center;
        padding-right: 5px;

        @media (max-width: 768px) {
          gap: 10px;

          .box {
            transform: translateY(calc(25px / 2));
            position: relative;
            z-index: 2;
          }
        }

        span {
          color: #323232;
          font-family: "Lato";
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 25px; /* 138.889% */
          max-width: 186px;

          max-width: min-content;
          white-space: nowrap;

          @include fluidFontSize(16, 18, 992, 1920);

          @media (max-width: 768px) {
            font-size: 16px;
            line-height: 23px; /* 143.75% */

            br {
              display: none;
            }
          }
        }
      }
    }
    &__price {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-family: "Inter";
      font-style: normal;
      align-items: center;
      gap: 10px;
      background-color: #fff;
      z-index: 1;
      position: relative;
      padding-left: 5px;
      // height: 25px;
      gap: 0;

      @media (max-width: 768px) {
        padding-left: 30px;
        flex-direction: row;
        gap: 5px;
        z-index: 0;
      }

      &-new {
        color: #323232;
        font-size: 22px;
        font-weight: 600;
        line-height: 131.818%;

        @include fluidFontSize(20, 22, 992, 1920);
      }

      &-old {
        color: #9f9f9f;
        font-size: 16px;
        font-weight: 400;
        line-height: 143.75%;
        text-decoration-line: strikethrough;

        @include fluidFontSize(14, 16, 992, 1920);
      }
    }
  }
}
</style>
