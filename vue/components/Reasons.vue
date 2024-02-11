<template>
  <section id="reasons">
    <div class="container">
      <div class="title">
        <h2>6 причин выбрать коптильню Bravo&nbsp;2</h2>
      </div>

      <div class="reason-wrapper">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in reasons"
            :key="index"
            class="swiper-slide"
          >
            <reasons-item
              @update-slider="updateSlider"
              :item="item"
              :number="index + 1"
              :reverse="index % 2 != 0"
            >
              <my-image
                class="reason-img"
                :alt="item.title"
                :sorce="'build/images/reasons/' + item.img"
                :mobile="false"
              />
            </reasons-item>
          </div>
        </div>

        <div class="reason-navigation">
          <div class="reason-button-prev">
            <slider-button />
          </div>
          <div class="reason-current slider-current">
            <div class="this">{{ reasonIndex }} /</div>
            <div ref="all" class="all">{{ reasons.length }}</div>
          </div>
          <div class="reason-button-next">
            <slider-button :rotate="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { Swiper, Navigation } from "swiper";
import SliderButton from "../UI/SliderButton.vue";
import ReasonsItem from "./ReasonsItem.vue";
import { mapMutations } from "vuex";

export default {
  components: { MyImage, SliderButton, ReasonsItem },
  data() {
    return {
      reasons: [
        {
          title: "Правильное вертикальное копчение",
          subtitle: "Крючки уже в комплекте, докупать не нужно",
          decr: `<span> Вертикальное копчение </span>  практикуется во всех промышленных профессиональных камерах. Продукт не соприкасается с 
          металлом и друг с другом, <span> коптится равномерно</span>  и не имеет металлического привкуса.`,
          decrHidden: `Нет необходимости мыть противни и другие элементы. <span> Крючки регулируются</span> , продукты можно развешивать
           на разной высоте. Поддон для сбора жира всегда можно разместить рядом с продуктом. Поэтому <span> жир не расплескается</span> 
            и не запачкает стенки коптильни.`,
          showHidden: false,
          img: "reasons-1",
        },

        {
          title: "Без горечи и канцерогенов",
          subtitle:
            "Купольная крышка выводит конденсат в гидрозатвор, а не на продукты",
          decr: `Копчёные продукты могут горчить, если в процессе приготовления на них попадает конденсат. Коптильня
           Bravo 2 оснащена крышкой в виде купола. По ней конденсат стекает по стенкам и попадает в гидрозатвор, минуя продукты. 
           <span> Дым полностью обрабатывает продукт</span>  и выходит через специальный шланг.`,
          decrHidden: `Коптильня Bravo 2  — единственная коптильня, оснащённая <span> регулировкой поддонов по высоте</span> ,
           что позволяет размещать их далеко от очага нагрева. Они не перегреваются и не будут выделять опасные канцерогены.
            Вы получаете <span> чистый безопасный продукт</span> .`,
          showHidden: false,
          img: "reasons-2",
        },

        {
          title: "Конструкция без ошибок",
          subtitle:
            "Шланг не перегнется! Коптите прямо в квартире без задымления",
          decr: `Шланг для отвода дыма <span> не перегнётся</span> . Он <span> оборудован гофротрубой </span>. 
          Вывести его в окно или в вентиляцию можно под каким угодно углом. Никаких заломов! Делайте, как вам удобно.  `,
          decrHidden: `Тройная защита от дыма гарантирует его <span> вывод исключительно по каналу</span> . Внутри коптильни создаётся правильное давление,
           которое препятствует образованию водяной пробки в гидрозатворе, а, значит, дым будет выходить только по шлангу.`,
          showHidden: false,
          img: "reasons-3",
        },

        {
          title: "Коптите как хотите",
          subtitle: "Горячее и холодное копчение",
          decr: `Для приготовления блюд <span> горячего копчения</span>  в коптильне предусмотрен
          <span> поддон для щепы</span>. Она нагревается на плите и тлеет, отдавая свой аромат продукту.
          С дымогенератором, который вы можете приобрести отдельно, коптильня Bravo 2 превращается в камеру
           и <span> может готовить мясо и рыбу холодного копчения</span>  с точным соблюдением температурного режима. Под дымогенератор предусмотрен специальный штуцер.`,
          decrHidden: `
          Закажите выгодный комплект с дымогенератором «Merkel 2». Дымогенератор имеет тройную систему очистки дыма, автономное питание и тонкую точную настройку. Коптите дома и на природе даже без электричества.
          `,
          button:
            "<a data-fancybox class='button' href='#dymogenerator-modal'>Заказать  дымогенератор в комплекте</a>",
          showHidden: false,
          img: "reasons-4",
        },

        {
          title: "Ручка останется чистой и холодной",
          subtitle: "Удобство превыше всего",
          decr: `Съёмная ручка на стойке для извлечения поддонов оснащена специальным разъёмом. Ею <span> легко пользоваться</span> 
           и не обязательно оставлять на месте во время нагревания коптильни. Она всегда останется <span> безопасно холодной и чистой</span> . 
           В других коптильнях ручки пачкаются и нагреваются, что создаёт дополнительные неудобства. Мы сделали конструкцию максимально
            удобной и безопасной.`,
          img: "reasons-5",
        },

        {
          title: "Копчение ещё вкуснее, проще и быстрее",
          subtitle: "Коптите курочку идеально со специальной насадкой",
          decr: `Насадка Bravo поможет быстрее и проще приготовить курочку целиком. Она будет <span>  надёжно зафиксирована на стойке </span>, 
          не потеряет форму во время копчения, не упадёт и не завалится.  `,
          decrHidden: `Насадка для коптильни Bravo 2 выполнена из пищевой нержавеющей стали AISI 304. Она <span> безопасна для здоровья</span> , 
          устойчива к коррозии и сохранит свой внешний вид и качества даже после нескольких лет использования. Приобрести её можно
           дополнительно при заказе коптильни — по очень приятной цене!`,
          showHidden: false,
          img: "reasons-6",
        },
      ],
      reasonIndex: 1,
      myReasonSwiper: null,
    };
  },

  methods: {
    updateSlider() {
      setTimeout(() => {
        this.myReasonSwiper.update();
      }, 100);
    },

    ...mapMutations(["selectDymo"]),

    initReasonSwiper() {
      let context = this;

      this.myReasonSwiper = new Swiper(".reason-wrapper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        autoHeight: true,
        grabCursor: true,
        allowTouchMove: false,
        loop: true,
        navigation: {
          nextEl: ".reason-button-next",
          prevEl: ".reason-button-prev",
        },
        modules: [Navigation],
        on: {
          slideChange: function () {
            context.reasonIndex = this.realIndex + 1;
            // context.reasons[this.realIndex].showHidden = false;
          },
          init: function () {
            context.reasonIndex = this.realIndex + 1;
          },
        },
      });
    },
  },

  mounted() {
    this.initReasonSwiper();

    const ReasonSwiperbreakpoint = window.matchMedia("(min-width: 993px)");
    const breakpointChecker = () => {
      if (!ReasonSwiperbreakpoint.matches) {
        return this.initReasonSwiper();
      } else {
        if (this.myReasonSwiper) {
          return this.myReasonSwiper.destroy(true, true);
        }
      }
    };

    ReasonSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();

    //кнопка с дымогенератором
    document
      .querySelector('a[href="#dymogenerator-modal"]')
      .addEventListener("click", () => {
        this.selectDymo();
      });
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#reasons {
  @extend %pbt;
  overflow: hidden;
  .reason-wrapper {
    @media (min-width: 993px) {
      .swiper-wrapper {
        display: block;
        box-sizing: border-box;

        .swiper-slide {
          height: auto;
          &:not(:last-child) {
            margin-bottom: 60px;
          }
        }
      }
    }

    .reason-navigation {
      display: none;
    }

    @media (max-width: 992px) {
      @media (min-width: 577px) {
        max-width: 90%;
      }

      margin: 0 auto;
      position: relative;

      .swiper-slide {
        opacity: 0;
        // height: auto;
        transition: opacity 0.2s 0s;
        &-active {
          opacity: 1;
        }
      }

      .reason-navigation {
        display: block;

        @media (min-width: 769px) {
          .reason-current {
            display: none;
          }

          .reason-button-prev,
          .reason-button-next {
            position: absolute;
            top: 340px;
            transform: translateY(-50%);
            z-index: 5;
          }
        }
        .reason-button-prev {
          left: 10px;

          @media (max-width: 768px) {
            left: 0;
          }
        }

        .reason-button-next {
          right: 10px;
          @media (max-width: 768px) {
            right: 0;
          }
        }

        @media (max-width: 768px) {
          @include navigation() {
            margin: 30px auto 15px;
          }
        }
      }
    }
  }

  .reason-img {
    @include aspect() {
      aspect-ratio: 665/391;
      opacity: 0;
    }
  }
}
</style>
