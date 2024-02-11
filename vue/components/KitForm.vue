<template>
  <form action="" v-on:submit.prevent method="post" class="form-container">
    <div class="form-box">
      <h3>Оформление заказа</h3>

      <div class="box">
        <div class="form-container__name">
          <my-image
            :alt="''"
            :sorce="'build/images/kit/form-img'"
            :mobile="false"
          />
          <p>Коптильня Bravo 2</p>
        </div>

        <div class="form-container__tabs">
          <div
            v-for="(item, index) in getMain"
            :key="index"
            :class="['tab', item.selected ? 'tab--active' : '']"
            @click="selectMain(item.id)"
          >
            {{ item.volume }}
          </div>
        </div>

        <div class="form-container__price">
          <p class="price-title">Итого к оплате:</p>
          <p class="price-len">
            {{ getLastPrice.toLocaleString() + " ₽" }}
          </p>
        </div>
      </div>

      <div class="user-info">
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

      <p class="decr">
        Менеджеры свяжутся с вами в ближайшее время, для уточнения деталей
        заказа
      </p>

      <button type="submit" @click="openModal()" class="button">
        Заказать
      </button>

      <rassrochka-checkbox />
    </div>
    <form-helicon :main="true" :rassr="true" />
  </form>
</template>

<script>
import RassrochkaCheckbox from "../UI/RassrochkaCheckbox.vue";
import FormHelicon from "./FormHelicon.vue";
import { mapGetters, mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { RassrochkaCheckbox, FormHelicon, MyImage },

  computed: mapGetters(["getMain", "getLastPrice"]),

  methods: {
    ...mapMutations(["openModalSuccessOrder", "selectMain"]),

    openModal() {
      this.openModalSuccessOrder();
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.form-container {
  .form-box {
    padding: 33px 13px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
      gap: 15px;
      padding: 20px 15px;
    }
  }

  .box {
    & > * {
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }

  &__name {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;

    .img-wrap {
      @include aspect() {
        width: 55px;
        aspect-ratio: 55/65;
      }
    }

    p {
      color: #323232;
      font-family: "Lato";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 131.818%;
      white-space: nowrap;

      @include fluidFontSize(18, 22, 992, 1920);

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
      }
    }
  }

  &__tabs {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    .tab {
      border-radius: 20px;
      border-radius: 20px;
      border: 1px solid #9f9f9f;
      background: #fff;
      transition: all 0.2s;
      color: #323232;
      text-align: center;
      font-family: "Inter";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 143.75%;
      padding: 7px;
      max-width: 81px;
      width: 100%;
      cursor: pointer;

      @media (max-width: 768px) {
        font-size: 16px;
        padding: 10px;
        line-height: 23px;
        border-radius: 5px;
      }

      &.tab--active {
        background: #e2bc85;
        border: 1px solid #e2bc85;
        font-weight: 600;
        color: #fff;
      }
    }
  }

  &__price {
    border: 1px solid #9f9f9f;
    border-left: none;
    border-right: none;
    padding: 10px 0 7px;

    .price-title {
      color: #323232;
      text-align: center;
      font-family: "Lato";
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 126.923%;
      margin-bottom: 12px;

      @media (max-width: 768px) {
        font-size: 20px;
        line-height: 27px;
      }
    }

    .price-len {
      color: #323232;
      text-align: center;
      font-family: "Inter";
      font-size: 35px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;

      @media (max-width: 768px) {
        font-size: 28px;
        line-height: 35px;
      }
    }
  }

  h3 {
    color: #323232;
    text-align: center;
    font-family: "Lato";
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 126.923%;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 27px;
    }
  }

  .decr {
    color: #9f9f9f;
    text-align: center;
    font-family: "Lato";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .my-input {
    @media (min-width: 769px) {
      padding: 16px 23px;
    }
  }

  .button {
    @extend %button-main;
    margin: 0 auto;
  }

  .rassrochka {
    margin: 0 auto;
  }
}
</style>