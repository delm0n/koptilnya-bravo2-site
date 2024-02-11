<template>
  <section id="how-work">
    <div class="container">
      <div class="title">
        <h2>Как работает коптильня Bravo&nbsp;2</h2>
        <p class="subtitle">Получится вкусно с первого раза</p>
      </div>
      <div class="how-wrapper">
        <div class="how-wrapper__img">
          <my-image
            :alt="'Шаги копчения'"
            :sorce="'build/images/how/test'"
            :media="577"
          />
        </div>
        <div class="how-wrapper__text">
          <h3>Вертикальное копчение</h3>
          <p
            v-for="(item, i) in text"
            :key="i"
            :class="['text-p ', i == text.length - 1 ? 'text-p--last' : '']"
            v-html="item"
          ></p>

          <collapse :when="mobile ? mobileShow : true">
            <h4>Простая система</h4>
            <ul>
              <li
                v-for="(item, i) in list"
                :key="i"
                class="text-li"
                v-html="item"
              ></li></ul
          ></collapse>

          <div
            v-if="mobile"
            class="showmore-mobile"
            @click="mobileShow = !mobileShow"
            :style="
              mobileShow
                ? 'transform: translateY(10px)'
                : 'transform: translateY(0)'
            "
          >
            <p>{{ mobileShow ? "Скрыть" : "Подробнее" }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { Collapse } from "vue-collapsed";

export default {
  components: { MyImage, Collapse },

  data() {
    return {
      mobile: window.innerWidth < 1281,
      mobileShow: false,

      text: [
        `Вертикально коптят продукты на <span> профессиональном оборудовании <span>. Благодаря нашим крючкам с регулировкой 
            вы тоже сможете получать качественные, вкусные копчёности дома.`,

        `Крючки позволяют развешивать кусочки мяса, тушки рыб и другие продукты на расстоянии.
             Они не соприкасаются в процессе приготовления, а значит, <span> прокоптятся равномерно </span>.`,

        `За счёт регулировки крючков можно <span> разместить продукты на нужной высоте</span> и заполнить коптильню <span> большим их количеством</span>.`,
      ],

      list: [
        `1. Подготовьте продукты`,
        `2. Насыпьте щепу в нижний поддон и установите поддон для жира`,
        `3. Развесьте продукты на крючках`,
        `4. Закройте коптильню, установите гидрозатвор`,
        `5. Поставьте коптильню на плиту, выведите дым с помощью шланга в окно и начинайте коптить. Уже через 40 минут у вас будут готовы домашние ароматные копчёности!`,
      ],
    };
  },

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 1280px)");
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
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#how-work {
  overflow: hidden;
  @extend %pbt;

  .how-wrapper {
    display: flex;
    gap: 60px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1280px) {
      gap: 30px;
    }

    @media (max-width: 992px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
    &__img {
      flex-shrink: 0;

      @include aspect() {
        aspect-ratio: 509/646;
        width: 100%;

        @media (max-width: 1280px) {
          max-width: 442px;
        }

        @media (max-width: 576px) {
          aspect-ratio: 298/185;
        }
      }

      @media (min-width: 577px) {
        @media (max-width: 1280px) {
          width: 43%;
        }
        @media (max-width: 768px) {
          max-width: 442px;
          width: 100%;
        }
      }
    }

    &__text {
      flex-grow: 1;

      max-width: 811px;

      @media (max-width: 768px) {
        max-width: 440px;
        width: 100%;
      }

      h3 {
        color: #323232;
        font-family: "Lato";
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 131.818%;
        @include fluidFontSize(20, 22, 992, 1920);

        margin-bottom: 20px;

        @media (max-width: 768px) {
          margin-bottom: 10px;
          font-size: 18px;
          line-height: 25px;
        }
      }

      .text-p {
        color: #323232;
        font-family: "Inter";
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: 138.889%;
        margin-bottom: 20px;

        @include fluidFontSize(16, 18, 992, 1920);

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 21px;
          margin-bottom: 5px;
        }

        &--last {
          margin-bottom: 40px !important;

          @media (max-width: 1280px) {
            margin-bottom: 20px !important;
          }

          @media (max-width: 768px) {
            margin-bottom: 15px !important;
          }
        }

        span {
          font-weight: 600;
        }
      }

      h4 {
        color: #323232;
        font-family: "Inter";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 138.889%;
        margin-bottom: 15px;

        @include fluidFontSize(16, 18, 992, 1920);

        @media (max-width: 768px) {
          margin-bottom: 5px;
          font-size: 14px;
          line-height: 21px; /* 150% */
        }
      }

      .showmore-mobile {
        cursor: pointer;
        color: #ae874e;
        font-family: "Inter";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        text-decoration-line: underline;
        transition: color 0.4s;

        &:hover {
          color: #c8a066;
        }
      }

      .text-li {
        color: #323232;
        font-family: "Inter";
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: 138.889%;

        @include fluidFontSize(16, 18, 992, 1920);

        &:not(:last-child) {
          margin-bottom: 10px;

          @media (max-width: 768px) {
            margin-bottom: 3px;
          }
        }

        @media (max-width: 768px) {
          font-size: 12px;
          line-height: 19px;
        }
      }
    }
  }
}
</style>