<template>
  <section id="questions">
    <div class="container">
      <div class="questions-wrapper">
        <div class="questions-wrapper__content">
          <h2>Остались вопросы ?</h2>
          <p class="phone">8 800 250 59 32</p>
          <p class="decr">
            Звоните прямо сейчас, и мы ответим. Или оставьте свои данные, и мы
            свяжемся с вами в ближайшее&nbsp;время
          </p>

          <questions-form />
        </div>
        <div class="questions-wrapper__img">
          <my-image
            :alt="'наши операторы всегда на связи'"
            :mobile="false"
            :sorce="'build/images/questions/questions'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import QuestionsForm from "./QuestionsForm.vue";
export default {
  components: { MyImage, QuestionsForm },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#questions {
  @extend %pbt;

  .questions-wrapper {
    display: flex;
    gap: 60px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1366px) {
      gap: 20px;
    }

    @media (max-width: 1125px) {
      justify-content: center;
    }

    &__img {
      // min-width: 576px;
      @media (max-width: 1125px) {
        display: none;
      }
    }

    &__content {
      max-width: 565px;
      width: 100%;

      & > *:not(:last-child) {
        margin-bottom: 25px;
      }

      h2 {
        color: #323232;
        font-size: 55px;
        white-space: nowrap;
        line-height: 115%;

        font-family: "Lato";

        font-style: normal;
        font-weight: 600;

        @include fluidFontSize(46, 55, 992, 1366);

        @media (max-width: 992px) {
          text-align: center;
        }

        @media (max-width: 768px) {
          font-size: 26px;

          line-height: 33px;
          margin-bottom: 30px;
        }
      }

      .phone {
        color: #323232;
        font-size: 28px;
        font-family: "Inter";
        font-weight: 600;
        line-height: 125%;

        // @include fluidFontSize(22, 32, 992, 1920);
        @media (max-width: 992px) {
          text-align: center;
        }

        @media (max-width: 768px) {
          font-size: 22px;
          line-height: 29px;
          margin-bottom: 15px;
        }
      }

      .decr {
        color: #323232;
        font-family: "Lato";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 135%;

        @include fluidFontSize(18, 20, 992, 1920);

        @media (max-width: 992px) {
          text-align: center;
        }

        @media (max-width: 768px) {
          font-size: 18px;
          line-height: 25px;
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>