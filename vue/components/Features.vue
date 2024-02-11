<template>
  <section id="features">
    <div class="features" v-if="!mobile">
      <div class="container">
        <div class="features-wrap">
          <div
            v-for="(item, index) in features"
            :key="index"
            class="features-item"
          >
            <my-image
              class="features-item__img"
              :alt="''"
              :mobile="false"
              :sorce="'build/images/features/' + item.img"
            />

            <div class="features-item__title">
              <p v-html="item.title"></p>
            </div>

            <div class="features-item__decr">
              <p v-html="item.decr"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
  data() {
    return {
      mobile: window.innerWidth < 993,

      features: [
        {
          img: "features-1",
          alt: "Проверенные материалы",
          title: "Проверенные <br> материалы",
          decr: "Медицинская нержавеющая сталь, соответствующая ГОСТ",
        },

        {
          img: "features-2",
          alt: "3-хэтапный контроль качества",
          title: "3-хэтапный <br> контроль качества",
          decr: "Проверка на производстве + на складе + при отправке = 100% защита от брака",
        },

        {
          img: "features-3",
          alt: "Рассрочка на 4 месяца",
          title: "Рассрочка <br> на 4 месяца",
          decr: "Удобные <br> условия покупки",
        },

        {
          img: "features-4",
          alt: "Оплата при получении",
          title: "Оплата <br> при получении",
          decr: "Вы можете проверить товар перед покупкой",
        },

        {
          img: "features-5",
          alt: "9538 довольных покупателей",
          title: "9538 довольных <br> покупателей",
          decr: "По всей России и в странах СНГ. Доставим в любой уголок",
        },
      ],
    };
  },

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 992px)");
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
#features {
  .features {
    padding: 80px 0 0;
    @media (max-width: 992px) {
      padding: 40px 0 0;
    }
    @media (max-width: 768px) {
      padding: 30px 0 0;
    }
  }

  .features-wrap {
    display: flex;
    gap: 50px 30px;
    justify-content: space-between;

    @media (max-width: 1366px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .features-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 250px;
    width: calc(100% / 5);

    @media (max-width: 1366px) {
      width: calc(100% / 3 - 30px);
      max-width: none;
    }

    p {
      color: #323232;
      text-align: center;
      font-style: normal;
    }

    &__img {
      margin: 0 auto 25px;
      width: 80px;

      @include aspect() {
        aspect-ratio: 1/1;
        opacity: 0;
      }
    }

    &__title p {
      font-family: "Lato";
      font-size: 22px;
      font-weight: 600;
      line-height: 131.818%;
      margin-bottom: 10px;
    }

    &__decr p {
      font-family: "Inter";
      font-size: 16px;
      font-weight: 300;
      line-height: 143.75%;
    }
  }
}
</style>