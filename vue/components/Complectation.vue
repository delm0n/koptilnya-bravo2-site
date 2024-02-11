<template>
  <section id="complectation">
    <div class="container">
      <div class="title">
        <h2>Полная комплектация</h2>
        <p class="subtitle">Всё необходимое у вас уже будет</p>
      </div>
      <div class="complectation-wrap">
        <div class="complectation-wrap__img">
          <div class="img-container">
            <my-image
              :alt="'комплектация коптильни браво'"
              :sorce="'build/images/complectation/main'"
              :media="993"
            />
          </div>
        </div>
        <div class="complectation-wrap__text">
          <div
            v-for="(item, i) in complectation"
            :key="i"
            class="complectation-item"
            @click="openModal(item.title, item.text)"
          >
            <span class="round">
              {{ i + 1 }}
            </span>
            <p v-html="item.title"></p>
          </div>

          <button class="button" @click="openModalOrder()">Заказать</button>
        </div>
      </div>
    </div>

    <div id="complectation-modal">
      <h3 v-html="modal.title"></h3>
      <p v-html="modal.text"></p>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
  data() {
    return {
      complectation: [
        {
          title: "Съёмная ручка",
          text: `Стойка для продуктов оборудована съёмной ручкой. Быстросъёмное соединение позволяет легко установить ручку и достать копчёности, не пачкаясь и не обжигаясь. Ручка всегда остаётся чистой и холодной.`,
        },

        {
          title: "Крючки для вертикального копчения",
          text: `Крючки с регулировочными винтами предназначены для расположения продуктов вертикально. Благодаря им куски мяса и тушки рыбы не слипаются, прикасаются друг к другу, равномерно и правильно обрабатываются дымом. С помощью крючков можно развесить больше продуктов в коптильне.`,
        },

        {
          title: "Поддон для жира",
          text: `Может быть установлен на разной высоте благодаря специальным винтам. Позволяет собирать весь жир с продуктов. Он не попадает на щепу и не горит, а, значит, продукты получаются без горького привкуса — безопасные и с приятным ароматом.`,
        },

        {
          title: "Поддон для щепы",
          text: `Нижний поддон коптильни. Позволяет равномерно распределить щепу, чтобы она хорошо тлела. Изготовлен из нержавеющей стали.`,
        },

        {
          title: "ПВХ шланг для отвода дыма с зажимом для штуцера",
          text: `text`,
        },

        {
          title: "Бак",
          text: `text`,
        },

        {
          title: "Крышка",
          text: `text`,
        },

        {
          title: "Штуцер канала для отвода дыма",
          text: `Изогнутый штуцер позволяет вывести шланг для отвода дыма вверх и вбок, не перегибая его. У дыма всегда есть доступ к выходу без препятствий.`,
        },

        {
          title: "Штуцер под дымогенератор",
          text: `Служит для присоединения дымогенератора. С его помощью коптильня становится камерой холодного копчения. Штуцер оснащён крышкой и заглушкой, когда аппарат используется для копчения продуктов горячим способом.`,
        },

        {
          title: "Зажимы для крышки",
          text: `text`,
        },

        {
          title: "Электронный термометр",
          text: `text`,
        },

        {
          title: "Льняной жгут",
          text: `text`,
        },
      ],

      modal: {
        title: "",
        text: "",
      },
    };
  },

  methods: {
    openModal(title, text) {
      this.modal = {
        title: title,
        text: text,
      };

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#complectation-modal",
          },
        ]);
      }, 10);
    },

    openModalOrder() {
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

#complectation {
  @extend %pbt-gray;

  .complectation-wrap {
    display: grid;
    grid-template-columns: 60% 1fr;
    gap: 40px;

    @media (max-width: 1366px) {
      gap: 20px;
    }

    @media (max-width: 1280px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .button {
      @extend %button-main;

      @media (max-width: 768px) {
        margin: 30px auto 0;
      }
    }

    &__img {
      @media (min-width: 1281px) {
        .img-container {
          position: sticky;
          top: 120px;
          height: auto;
        }

        padding-top: 100px;

        @media (max-width: 1440px) {
          padding-top: 40px;
        }
      }

      @media (max-width: 1366px) {
        width: 100%;
        margin: 0 auto;
        max-width: 650px;

        picture {
          justify-content: center;
        }
      }

      @include aspect() {
        aspect-ratio: 217/156;
        width: 100%;
        max-width: 868px;

        @media (max-width: 1366px) {
          max-width: 650px;
        }
      }
    }

    &__text {
      @media (max-width: 1280px) {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }
    }
  }

  .complectation-item {
    display: flex;
    align-items: center;
    gap: 15px;

    &:not(:last-child) {
      margin-bottom: 40px;

      @media (max-width: 768px) {
        margin-bottom: 15px;
      }
    }

    span {
      width: 35px;
      height: 35px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      text-align: center;
      font-family: "Inter";
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 130.769%;

      background-color: #e2bc85;
      border-radius: 100%;

      @media (max-width: 768px) {
        width: 25px;
        height: 25px;

        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
      }
    }

    p {
      color: #323232;
      font-family: "Lato";
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 126.923%;
      text-decoration-line: underline;
      cursor: pointer;

      @include fluidFontSize(24, 26, 1281, 1920);

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
      }
    }
  }
}

#complectation-modal {
  @extend %modal;
  @extend %modal-text;
}
</style>