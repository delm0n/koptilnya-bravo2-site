<template>
  <section id="feedback">
    <div class="container">
      <div class="title">
        <h2>Отзывы наших клиентов</h2>
      </div>
      <div class="feedback-wrapper__container">
        <div class="row">
          <div class="feedback-wrapper">
            <div class="swiper-wrapper">
              <div v-for="(feed, i) in feedbacks" :key="i" class="swiper-slide">
                <div class="feedback-item">
                  <div class="feedback-item__img">
                    <my-image
                      :alt="'Отзыв клиента на коптильню браво'"
                      :sorce="'build/images/feedback/' + feed.img"
                      :media="993"
                    />
                  </div>

                  <div class="feedback-item__btn">
                    <div class="link-inline" @click="readFeedback(feed.text)">
                      Прочитать отзыв
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="feedback-navigation">
              <div class="feedback-button-prev">
                <slider-button />
              </div>
              <div class="feedback-current slider-current">
                <div class="this">{{ feedIndex }} /</div>
                <div ref="all" class="all">{{ feedbacks.length }}</div>
              </div>
              <div class="feedback-button-next">
                <slider-button :rotate="true" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="feedback-button">
        <button :disabled="getReview" @click="openModalFeedback()">
          {{ getReview ? "Отзыв отправлен" : "Написать отзыв" }}
        </button>
      </div>
    </div>

    <div v-if="modalContent" id="feedback-modal" style="display: none">
      <p v-html="modalContent"></p>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation } from "swiper";
import MyImage from "../UI/MyImage.vue";
import SliderButton from "../UI/SliderButton.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { MyImage, SliderButton },
  data() {
    return {
      feedbacks: [
        {
          img: "feedback-1",
          text: `Здраствуйте.да заказывал. первый раз сам коптил. начал с курицы.вкусно👍 коптил горячим способом прямо в квартире. неопытным взглядом скажу коптильня огонь🔥 порадовал комплект крючки, поддон, термометр. Вобщем я доволен!!! Думаю думаю тек то с опытом тоже оценят`,
        },
        {
          img: "feedback-2",
          text: "Добрый день! Я довольна))) Первый раз готовила ребрышки - получилось просто супер👍 Потом готовила курицу целиком, тоже понравилось. Щепу вашу использовала. Очень тонкий аромат выдает. Нравится съемная ручка. Поставил стойку, вынул ручку, ничего не перегревается. Прихватки не нужны. Отлично))) Нужно вытащить мясо - вставил и вытащил. Минусов не нашла.",
        },
        {
          img: "feedback-3",
          text: "Доброго времени суток! да, брал специально для использования на приробе, сразу после рыбалки. Развешивал на крючки - вертикально. Вошло много рыбки. Коптил по холодному, с вашим же дымогенератором меркель. Рыба получилась мягкая, ароматная. 👍 В походных условиях отличная вещь, ручки не греются, можно переставлять без опаски, что обожжешься. Цена огонь, нигде за такую цену такого комплекта не видел. <span class='br'></span> Для дома тоже отличная коптильня. Никакого запаха в квартире не будет.",
        },
        {
          img: "feedback-4",
          text: `Здравствуйте! Да, заказала в подарок мужу. Он любит гриль, мангалы, коптить вкусности). Доставили быстро, пришла в целости. Муж уже испробовал. Все делал дома, рыбу, мясо - никакого дыма. Я боялась, что задымит всю квартиру, но нет. В кухне было чисто, весь дым уходил по каналу. Крышка очень плотно прижимается, плюс гидрозамок с водой. В общем, всё понравилось). <span class='br'></span> да! и спасибо консультантам, что помогли выбрать и заказать. Хорошо работают).`,
        },
        {
          img: "feedback-5",
          text: `Доброго! Да, попробовала. <br>
          взяла с разу с насадкой для курицы и противнем.  <br>
          Давно искала такой комплект, чтобы все сразу вместе 😊 Коптим с мужем прямо дома. Щепа у вас хорошая тоже😊 Все очень вкусное выходит.  <br>
          Спасибо за быструю доставку и подарки!`,
        },
        {
          img: "feedback-6",
          text: `Доброго дня. Коптильней доволен. Плностью соответствует комплекту и описанию. Всё работает. Надеюсь, прослужил долго. На вид она добротная. Доставка была быстрой. Всё супер, не переживайте.
          <span class='br'></span>
          Я ещё дымогенератор у вас присмотрел, хотел бы проконсультироваться. Можно купить его по купону со скидкой?`,
        },

        {
          img: "feedback-7",
          text: `Здравствуйте! Да) Очень довольна. Впечателния от покупки только положительные 😊 Коптильня для дома подходящая. Доставка быстрая, аккуратно упаковано, все приехало целое. Спасибо))))`,
        },
      ],
      modalContent: "",
      feedIndex: 1,
    };
  },

  mounted() {
    let context = this;

    let myFeedbackSwiper;
    const feedbackSwiper = () => {
      myFeedbackSwiper = new Swiper(".feedback-wrapper", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
        loop: true,
        navigation: {
          nextEl: ".feedback-button-next",
          prevEl: ".feedback-button-prev",
        },
        modules: [Navigation],

        breakpoints: {
          1367: {
            spaceBetween: 40,
          },

          769: {
            slidesPerView: 3,
            spaceBetween: 25,
          },

          577: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },

        on: {
          slideChange: function () {
            context.feedIndex = this.realIndex + 1;
          },
          init: function () {
            context.feedIndex = this.realIndex + 1;
          },
        },
      });
    };

    addEventListener("resize", (event) => {
      myFeedbackSwiper.destroy(true, true);
      feedbackSwiper();
    });
    feedbackSwiper();
  },
  computed: mapGetters(["getReview"]),

  methods: {
    ...mapMutations(["showModalFeedback"]),

    readFeedback(text) {
      this.modalContent = text;
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#feedback-modal",
          },
        ]);
      }, 10);
    },

    openModalFeedback() {
      this.showModalFeedback();
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-feedback",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#feedback {
  overflow: hidden;
  @extend %pbt;

  .feedback-current {
    @media (min-width: 577px) {
      display: none;
    }
  }

  .container {
    @media (max-width: 768px) {
      max-width: 684px;
    }
  }

  .feedback-wrapper__container {
    position: relative;
  }

  .row {
    max-width: 1525px;
    margin: 0 auto;
    overflow: hidden;

    @media (min-width: 577px) {
      width: 80%;
      .feedback-button-prev,
      .feedback-button-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 5;
      }

      .feedback-button-prev {
        left: 20px;

        @media (max-width: 768px) {
          left: 0;
        }
      }

      .feedback-button-next {
        right: 20px;
        @media (max-width: 768px) {
          right: 0;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .feedback-navigation {
      @include navigation() {
        margin: 30px auto 15px;
      }
    }
  }

  .feedback-item {
    &__btn {
      margin: 33px auto 0;
      display: flex;
      justify-content: center;

      @media (max-width: 1366px) {
        margin: 22px auto 0;
      }

      .link-inline {
        cursor: pointer;
        color: #323232;
        text-align: center;
        font-family: "Lato";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px; /* 138.889% */
        text-decoration-line: underline;

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
        }
      }
    }

    &__img {
      img {
        width: 100%;
        aspect-ratio: 380/738;
        @media (max-width: 992px) {
          aspect-ratio: 285/554;
          max-width: 224px;
        }
      }

      picture {
        justify-content: center;
      }
    }
  }

  .feedback-button {
    margin-top: 60px;
    @media (max-width: 768px) {
      margin-top: 35px;
    }
    @media (max-width: 576px) {
      margin-top: 15px;
    }
    button {
      @extend %button-gray;
      margin: 0 auto;
    }
  }
}

#feedback-modal {
  @extend %modal;
  max-width: 615px;
  padding: 35px 22px;
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 30px 15px 25px;
    max-width: 520px;

    .is-close {
      top: 10px !important;
      width: 16px;
      height: 16px;
    }
  }

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;

    color: #323232;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
  }
}
</style>
