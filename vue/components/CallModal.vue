<template>
  <div id="call-modal">
    <form action="" v-on:submit.prevent class="spnForm order-form">
      <h3>Заказать обратный звонок</h3>

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

      <button type="submit" class="button">Заказать звонок</button>

      <div class="decr">
        <p>Мы свяжемся с вами в течение 10 минут</p>
      </div>

      <form-helicon />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FormHelicon from "./FormHelicon.vue";

export default {
  components: { FormHelicon },
  computed: mapGetters(["getMainPrices"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#call-modal {
  @extend %modal;
  max-width: 480px;
  padding: 20px 30px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 390px;
  }
  @media (max-width: 375px) {
    padding: 30px 10px 20px;
  }

  .order-form > *:not(:last-child) {
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
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 27px; /* 135% */
      margin-bottom: 15px;
    }
  }

  .user-info {
    @media (max-width: 576px) {
      max-width: 360px;
      margin: 0 auto;
    }
  }

  .button {
    @extend %button-main;
    margin-left: auto;
    margin-right: auto;
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
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
}
</style>