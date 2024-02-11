<template>
  <section id="faq">
    <div class="container">
      <div class="title">
        <h2>Ответы на самые популярные вопросы</h2>
      </div>

      <div class="accordions">
        <div
          v-for="(acc, index) in accordions"
          v-bind:key="index"
          class="accordion-item"
        >
          <div class="accordion-menu">
            <h3 v-html="acc.title"></h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <line
                x1="0.5"
                y1="12.0294"
                x2="25.5"
                y2="12.0294"
                stroke="#323232"
                stroke-width="1.5"
              />
              <line
                v-show="!acc.show"
                x1="12.9043"
                y1="25.3481"
                x2="12.9043"
                y2="0.348145"
                stroke="#323232"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-content__wrap">
              <p v-html="acc.content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      accordions: [
        {
          title:
            "1. Сколько продуктов можно одновременно загрузить в&nbsp;коптильню?",
          content:
            "Всё зависит от объёма бака: 10 л рассчитаны на 5 кг мяса или 1 курицу, 20 л — 11 кг мяса или 2 курицы, 30 л — на 25 кг мяса/3 курицы. <span class='br'></span> Если есть необходимость коптить большую рыбу целиком, выбирайте коптильню Bravo 2 на 30 литров.",
          show: false,
        },
        {
          title: "2. Зачем нужен гидрозатвор и как он работает?",
          content: `Гидрозатвор необходим для предотвращения попадания дыма в кухню. Он является одной из составляющих частей системы 
          тройной защиты и вместе с силиконовой прокладкой и 3 зажимами на крышке бака обеспечивает полную герметичность конструкции. 
          В гидрозатвор заливается вода, получается гидрозамок, через который дым не может просочиться наружу и весь остаётся внутри коптильни. `,
          show: false,
        },
        {
          title:
            "3. Как отводить дым при использовании коптильни в&nbsp;квартире?",
          content: `Коптильня снабжена каналом для отвода дыма с гофротрубой и специальным штуцером. Вывести дым можно с 
            помощью шланга в окно, под углом или просто вверх, если это удобно. Шланг не перегнётся и не сломается.`,
          show: false,
        },
        {
          title: "4. Должна ли качественная нержавейка магнититься?",
          content: `Качественная пищевая нержавейка не должна магнититься. Комплектующие коптильни Bravo&nbsp;2 
          выполнены как раз из пищевой нержавеющей стали AISI 304. Она является аустенитной сталью с небольшим содержанием железа. 
          Это качественный материал, специально разработанный для пищевой промышленности. Он безопасен и долговечен.`,
          show: false,
        },
        {
          title:
            "5. Как правильно ухаживать за коптильней, чтобы она долго служила?",
          content: `Коптильня Bravo 2 проста в уходе. Достаточно её мыть после использования с мыльным раствором, тёплой водой и хорошенько просушивать.`,
          show: false,
        },
        {
          title:
            "6. Что делать, если какие-то детали со временем вышли из строя? Можно ли их заменить?",
          content: `Наша компания располагает сервисными центрами, куда вы всегда можете обратиться, если детали вышли из строя, и 
            требуется ремонт. Однако наша продукция настолько надёжна, что мы гарантируем длительный срок службы всех компонентов. 
            Коптильня прошла трёхэтапный контроль качества, тесты и полностью соответствует заявленным качествам.`,
          show: false,
        },
      ],
    };
  },

  methods: {
    createAnimation(element) {
      let menu = element.querySelector(".accordion-menu");
      let box = element.querySelector(".accordion-content");

      this.gsap.set(box, { height: "auto" });
      let animation = this.gsap
        .from(box, {
          height: 0,
          duration: 0.3,
          ease: "power1.inOut",
        })
        .reverse();

      return function (clickedMenu) {
        if (clickedMenu === menu) {
          animation.reversed(!animation.reversed());
        } else {
          animation.reverse();
        }
      };
    },

    changeShow(i) {
      this.accordions.forEach((element, index) => {
        index == i
          ? (element.show = element.show == true ? false : true)
          : (element.show = false);
      });
    },
  },

  mounted() {
    this.$nextTick(function () {
      let groups = this.gsap.utils.toArray(".accordion-item");

      let menus = this.gsap.utils.toArray(".accordion-menu");
      let menuToggles = groups.map(this.createAnimation);
      menus.forEach((menu, i) => {
        menu.addEventListener("click", () => {
          toggleMenu(menu);
          this.changeShow(i);
        });
      });
      function toggleMenu(clickedMenu) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
      }
    });
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#faq {
  @extend %pbt-gray;

  .accordions {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    // filter: drop-shadow(5px 5px 15px 0px rgba(157, 157, 157, 0.15));
    // box-shadow: 5px 5px 15px 0px rgba(157, 157, 157, 0.15);

    @media (max-width: 768px) {
      gap: 20px;
    }
  }

  .accordion-menu {
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    user-select: none;
    min-height: 100px;
    display: flex;
    align-items: center;
    box-shadow: 5px 5px 15px 0px rgba(157, 157, 157, 0.15);

    gap: 15px;
    justify-content: space-between;

    background: #ffffff;
    border-radius: 10px;

    @media (max-width: 768px) {
      padding: 14px;
      min-height: 70px;
    }

    h3 {
      color: #323232;
      font-family: "Lato";
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 123%;

      @include fluidFontSize(22, 26, 993, 1920);

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 21px;
      }
    }

    svg {
      flex-shrink: 0;

      width: 36px;
      height: 36px;

      @media (max-width: 992px) {
        width: 28px;
        height: 28px;
      }
    }
  }

  .accordion-content {
    height: 0;
    overflow: hidden;
    will-change: height;

    &__wrap {
      padding: 20px 0 0;
    }

    p {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 132%;
      color: #323232;
      line-height: 25px;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
}
</style>
