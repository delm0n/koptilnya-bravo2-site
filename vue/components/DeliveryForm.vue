<template>
  <form
    action=""
    v-on:submit.prevent
    method="post"
    class="spnForm delivery-form"
  >
    <h3>Рассчитать стоимость доставки</h3>
    <input type="hidden" name="statePanel" value="calcDelivery" />
    <input
      type="hidden"
      class="comment"
      name="comment"
      value="Рассчитать доставку. "
    />

    <div class="user-info">
      <input
        class="my-input"
        aria-label="Ваш номер телефона"
        type="tel"
        name="phone"
        autocomplete="off"
        placeholder="Ваш номер телефона"
        required
      />
      <input
        class="my-input"
        aria-label="Адрес доставки"
        type="text"
        name="name"
        autocomplete="off"
        placeholder="Адрес доставки"
        required
      />
    </div>

    <button type="submit" @click="openModal()" class="button">
      Рассчитать
    </button>

    <form-helicon :main="true" :dops="false" />
  </form>
</template>

<style lang="scss">
@import "../../scss/_global.scss";
.delivery-form {
  @media (max-width: 576px) {
    max-width: 360px;
    margin: 0 auto;
  }

  h3 {
    font-size: 26px;
    font-family: "Lato";
    font-weight: 600;
    line-height: 33px;
    color: #323232;
    margin-bottom: 30px;
    text-align: center;

    @media (min-width: 1441px) {
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      font-size: 18px;
      // font-weight: 700;
      line-height: 25px;
      margin-bottom: 20px;
      // text-align: left;
    }
  }

  .button {
    @extend %button-main;
    margin: 40px auto 0;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }
}
</style>

<script>
import FormHelicon from "./FormHelicon.vue";
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["openModalSuccessManager"]),

    openModal() {
      this.openModalSuccessManager();
    },
  },
  components: {
    FormHelicon,
  },
};
</script>