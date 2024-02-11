<template>
  <div id="order-modal">
    <h3>
      Заказать коптильню <br />
      Bravo&nbsp;2
    </h3>

    <div class="order-wrapper">
      <div class="order-wrapper__form">
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

          <template v-if="getMobile">
            <order-modal-doplist :dops="getDops" :mobile="getMobile"
          /></template>

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

          <button type="submit" @click="openModal()" class="button">
            Заказать
          </button>

          <form-helicon :main="true" :rassr="true" />
        </form>

        <rassrochka-checkbox />
      </div>
      <template v-if="!getMobile">
        <div class="order-wrapper__dops">
          <p class="dops-title">Добавьте в заказ:</p>

          <order-modal-doplist :dops="getDops" :mobile="getMobile" />
        </div>
      </template>
    </div>

    <div class="decr">
      <p>
        Менеджеры свяжутся с вами в ближайшее время, для уточнения <br />
        деталей заказа
      </p>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
import RassrochkaCheckbox from "../UI/RassrochkaCheckbox.vue";
import Droplist from "../UI/Droplist.vue";
import FormHelicon from "./FormHelicon.vue";
import OrderModalDoplist from "./OrderModalDoplist.vue";

export default {
  components: { Droplist, RassrochkaCheckbox, FormHelicon, OrderModalDoplist },

  computed: mapGetters([
    "getMain",
    "getDops",
    "getLastPrice",
    "getLastOldPrice",
    "getMobile",
  ]),
  methods: {
    actionDroplist(id) {
      this.selectMain(id);
    },

    openModal() {
      this.openModalSuccessOrder();
    },

    ...mapMutations(["selectMain", "openModalSuccessOrder"]),
  },
};
</script>


<style lang="scss">
@import "../../scss/_global.scss";

#order-modal {
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

  & > *:not(:last-child) {
    margin-bottom: 30px;
  }

  h3 {
    color: #323232;
    text-align: center;
    font-family: "Lato";
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 37px; /* 123.333% */
    margin-bottom: 20px !important;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 27px; /* 135% */
      margin-bottom: 15px !important;
    }

    @media (min-width: 426px) {
      br {
        display: none;
      }
    }
  }

  .decr {
    margin-bottom: 0 !important;

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

  .order-wrapper {
    display: flex;
    gap: 40px;

    @media (max-width: 1280px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &__dops {
      flex-grow: 1;
      .dops-title {
        color: #323232;
        font-family: "Lato";
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 131.818%;
        margin-bottom: 15px;

        @include fluidFontSize(20, 22, 992, 1920);
      }
    }

    &__form {
      padding-top: 10px;
      max-width: 350px;
      @media (min-width: 769px) {
        width: 41%;
      }

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

      .checkbox.rassrochka {
        margin: 15px auto 0;
      }
    }
  }
}
</style>