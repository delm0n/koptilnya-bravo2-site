<template>
  <section id="models">
    <div class="container">
      <div class="title">
        <h2>Выберите свою домашнюю коптильню Bravo&nbsp;2</h2>
        <p class="subtitle">Коптите быстро и просто: мясо, рыбу, птицу</p>
      </div>
      <div class="models-wrapper">
        <!-- <div class="swiper-wrapper">
          <div
            v-for="(item, index) in getMain"
            :key="index"
            class="swiper-slide"
          > -->
        <div v-for="(item, index) in getMain" :key="index" class="models-item">
          <h3 v-html="item.name"></h3>

          <my-image
            class="model-img"
            :alt="item.name"
            :mobile="false"
            :sorce="'build/images/models/' + item.img"
          />

          <div class="collapse-section">
            <collapse :when="item.modelMobileToggle || !getMobile">
              <p class="model-decr" v-html="item.modelDecr"></p>

              <div class="model-char">
                <p><b>Вместимость:</b> <span v-html="item.modelVol"></span></p>

                <p><b>Высота:</b> <span v-html="item.modelHeight"></span></p>
              </div>
            </collapse>

            <div
              class="button__showMore"
              :style="item.modelMobileToggle ? 'padding-top: 20px' : ''"
              @click="item.modelMobileToggle = !item.modelMobileToggle"
            >
              {{ !item.modelMobileToggle ? "Характеристики" : "Скрыть" }}
            </div>
          </div>

          <div class="model-price">
            <div class="new" v-html="item.price + ' ₽'"></div>

            <div class="old" v-html="item.oldPrice + ' ₽'"></div>

            <div class="discont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="21"
                viewBox="0 0 48 21"
                fill="none"
              >
                <path
                  d="M0.5 0.786133H47.5L39.5 11.4287L47.5 20.7861H0.5V0.786133Z"
                  fill="#FF4F4F"
                />
              </svg>

              <span v-html="item.discont"> </span>
            </div>
          </div>

          <button @click="openModal(item.id)" class="model-button">
            Заказать
          </button>
        </div>
        <!-- </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";
import { Collapse } from "vue-collapsed";

export default {
  components: { MyImage, Collapse },
  computed: mapGetters(["getMain", "getMobile"]),
  methods: {
    ...mapMutations(["selectMain"]),

    openModal(id) {
      this.selectMain(id);

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#order-modal",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#models {
  @extend %pbt;

  .models-wrapper {
    display: flex;
    justify-content: center;
    gap: 25px;

    @media (max-width: 1145px) and (min-width: 769px) {
      flex-direction: column;
    }

    @media (max-width: 768px) {
      align-items: flex-start;
      flex-wrap: wrap;

      .button__showMore {
        display: block !important;
        cursor: pointer;
        color: #e2bc85;
        font-family: "Lato";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px;
        text-decoration-line: underline;
        transition: all 0.4s;
        text-align: center;

        &:hover {
          color: #c8a066;
        }
      }
    }

    .button__showMore {
      display: none;
    }
  }

  .models-item {
    border-radius: 20px;
    background: #fff;
    box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.15);
    padding: 20px;
    max-width: 335px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 1145px) and (min-width: 769px) {
      display: grid;
      grid-template-columns: minmax(245px, 1.3fr) repeat(2, 1fr);
      max-width: 920px;
      width: 100%;

      .model-img {
        grid-row: 1/3;
        grid-column: 1/2;
        transform: translateY(40px);
      }

      .collapse-section {
        grid-row: 1/3;
        grid-column: 2/4;
      }

      .model-button {
        grid-row: 3/4;
        grid-column: 3/4;
        margin-left: auto;
      }

      .model-price {
        grid-row: 3/4;
        grid-column: 2/3;
        margin: 0 0 auto 0 !important;
      }

      h3 {
        grid-row: 3/4;
        grid-column: 1/2;
        align-self: flex-end;
      }
    }

    @media (min-width: 769px) {
      flex: 1 1 0;
      gap: 30px;

      @media (max-width: 1440px) {
        gap: 20px;
      }
    }

    .model-img {
      picture {
        justify-content: center;
      }
      @include aspect() {
        aspect-ratio: 290/221;
      }
    }

    .model-price {
      display: grid;
      grid-template-columns: auto auto;
      gap: 5px 20px;
      max-width: 150px;
      margin: 0 auto;
      font-family: "Inter";
      font-style: normal;
      .new {
        color: #323232;
        font-size: 32px;
        white-space: nowrap;
        font-weight: 600;
        line-height: 39px; /* 121.875% */
        grid-column: 1/3;
      }

      .old {
        color: #9f9f9f;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px; /* 138.889% */
        text-decoration: line-through;
        white-space: nowrap;
      }

      .discont {
        position: relative;
        span {
          position: absolute;
          left: 3px;
          top: 1px;
          color: #fff;
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          line-height: 19px; /* 158.333% */
        }
      }
    }

    .model-button {
      @extend %button-main;
      margin: 0 auto;
    }

    h3 {
      color: #323232;
      text-align: center;
      font-family: "Lato";
      font-size: 26px;
      font-style: normal;
      font-weight: 600;
      line-height: 126.923%;
    }

    .model-decr {
      color: #323232;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 25px; /* 138.889% */
      margin-bottom: 15px;
    }

    .model-char {
      p {
        font-weight: 400;

        &:not(:last-child) {
          margin-bottom: 15px;
        }

        * {
          color: #323232;
          font-family: "Inter";
          font-size: 20px;
          font-style: normal;
          line-height: 135%;
        }

        b {
          font-weight: 600;
        }

        span {
          font-weight: 300;
        }
      }
    }
  }
}
</style>
