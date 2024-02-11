<template>
  <form
    action=""
    v-on:submit.prevent
    method="post"
    class="spnForm questions-form"
  >
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

    <p class="decr-bottom">
      Менеджеры свяжутся с вами в ближайшее время, <br />
      для уточнения деталей заказа
    </p>

    <form-helicon />
  </form>
</template>

<style lang="scss">
@import "../../scss/_global.scss";
.questions-form {
  max-width: 410px;
  width: 100%;

  @media (max-width: 992px) {
    margin: 0 auto;
    max-width: 425px;
  }

  @media (max-width: 768px) {
    max-width: 360px;
  }

  .button {
    @extend %button-main;
    margin: 25px 0 40px;

    @media (max-width: 992px) {
      margin: 20px auto;
    }
  }

  .decr-bottom {
    color: #9f9f9f;
    font-family: "Lato";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px; /* 150% */

    @media (max-width: 992px) {
      text-align: center;
    }

    @media (max-width: 425px) {
      br {
        display: none;
      }
    }
  }
}
</style>

<script>
import FormHelicon from "./FormHelicon.vue";

export default {
  components: {
    FormHelicon,
  },
};
</script>