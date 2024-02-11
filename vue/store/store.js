import { createStore } from "vuex";
import { storePHP } from "./storePHP.js";

export default createStore({
  modules: {
    storePHP,
  },
  state() {
    return {
      modalFeedback: false,
      modalSuccess: "",
      review: false,

      user: {
        name: "",
        phone: "",
        rassrochka: false,
      },

      mobile: window.innerWidth < 768,

      main: [
        {
          id: goods.bravo10,
          price: goodsJson[goods.bravo10].price,
          oldPrice: goodsJson[goods.bravo10].oldPrice,
          discont: "-00 %",
          name: "Bravo 2, 10 л",
          volume: "10 л",
          selected: true,

          img: "bravo-10",

          modelMobileToggle: false,

          modelDecr:
            "Подойдёт для приготовления семейного ужина, станет прекрасным подарком рыбаку или охотнику. В комплекте 6 крючков с винтами.",
          modelVol:
            "5&nbsp;кг мяса или 1 курица, рыба целиком — до 10&nbsp;см в&nbsp;длину",
          modelHeight: "300&nbsp;мм",
        },

        {
          id: goods.bravo20,
          price: goodsJson[goods.bravo20].price,
          oldPrice: goodsJson[goods.bravo20].oldPrice,

          discont: "-00 %",
          name: "Bravo 2, 20 л",
          volume: "20 л",
          selected: false,

          img: "bravo-20",

          modelMobileToggle: false,

          modelDecr:
            "Коптите для себя и для друзей. Дарите коптильню любителям больших уловов и мясных деликатесов. В комплекте 12 крючков с винтами.",
          modelVol:
            "11&nbsp;кг мяса или 2 курицы, рыба целиком — до 15&nbsp;см в&nbsp;длину",
          modelHeight: "460&nbsp;мм",
        },

        {
          id: goods.bravo30,
          price: goodsJson[goods.bravo30].price,
          oldPrice: goodsJson[goods.bravo30].oldPrice,

          discont: "-00 %",
          name: "Bravo 2, 30 л",
          volume: "30 л",
          selected: false,

          img: "bravo-30",

          modelMobileToggle: false,

          modelDecr:
            "Идеальна для большой компании, семейного производства копчёностей. В комплекте 18 крючков с винтами.",
          modelVol:
            "25&nbsp;кг мяса или 3 курицы, рыба целиком — до 20&nbsp;см в&nbsp;длину",
          modelHeight: "620&nbsp;мм",
        },
      ],

      dymo: {
        selected: false,
        name: "Дымогенератор Merkel 2",
        id: goods.merkel,
        price: goodsJson[goods.merkel].price,
        oldPrice: goodsJson[goods.merkel].oldPrice,
      },

      dops: [
        {
          id: goods.naspro,
          price: goodsJson[goods.naspro].price,
          oldPrice: goodsJson[goods.naspro].oldPrice,
          name: "Комплект «Насадка+Противень»",
          nameSpecialModal: "Комплект <br> «Насадка+Противень»",
          selected: false,

          icon: "naspro-icon",
          kit: "naspro-kit",

          kitModal: {
            text: [
              `Специальный противень с фиксирующими винтами можно установить на любой высоте и удобно разложить продукты. 
            Насадка для курицы также снабжена фиксирующими винтами и позволяет закрепить её там, где необходимо.
            <br><br>
            Материал: сталь AISI 304.
            `,
            ],
          },
        },

        {
          id: goods.pro,
          price: goodsJson[goods.pro].price,
          oldPrice: goodsJson[goods.pro].oldPrice,
          name: "Дополнительный противень",
          nameSpecialModal: "Дополнительный <br> противень",
          selected: false,

          icon: "pro-icon",
          kit: "pro-kit",

          kitModal: {
            text: [
              `Дополнительный противень с фиксирующими винтами поможет закоптить больше кусков мяса, фруктов, сыра и других продуктов 
            небольшого размера. Вы сможете расположить внутри бака не 1, а 2 или 3 противня.
            <br><br>
            Материал: сталь AISI 304.
            `,
            ],
          },
        },

        {
          id: goods.schepa_ol,
          price: goodsJson[goods.schepa_ol].price,
          oldPrice: goodsJson[goods.schepa_ol].oldPrice,
          name: "Щепа ольхи",
          selected: false,

          icon: "schepa_ol-icon",
          kit: "schepa_ol-kit",

          kitModal: {
            text: [
              `Универсальная щепа для любого продукта. Подойдёт для копчения мяса, рыбы, птицы. Блюда приобретают золотистую корочку, приятный слегка терпкий аромат.
            
            <br><br>
            Вес упаковки: 200 г.
            `,
            ],
          },
        },

        {
          id: goods.schepa_7,
          price: goodsJson[goods.schepa_7].price,
          oldPrice: goodsJson[goods.schepa_7].oldPrice,
          name: "Набор щепы (7 видов)",
          selected: false,

          icon: "schepa_7-icon",
          kit: "schepa_7-kit",

          kitModal: {
            text: [
              `Набор из 7 лиственных пород. С его помощью вы сможете попробовать закоптить любой продукт: мясо, рыбу, птицу, сыр и даже фрукты. 
            Каждый вид щепы придаёт оригинальный аромат и вкус блюдам. Базовым компонентом копчения считается ольха, для сыров и свинины подходит 
            абрикос. Вишню добавляют в основе, если коптят овощи. Щепу можно комбинировать. Экспериментируйте!
            <br><br>
            Общий вес: 1400 г<br>
            Комплект: 7 пакетов по 200 г<br>
            Виды щепы: ольха, яблоня, бук, груша, вишня, абрикос, слива.
            
            `,
            ],
          },
        },

        {
          id: goods.schepa_meet,
          price: goodsJson[goods.schepa_meet].price,
          oldPrice: goodsJson[goods.schepa_meet].oldPrice,
          name: "Набор щепы для мяса",
          selected: false,

          icon: "schepa_meet-icon",
          kit: "schepa_meet-kit",

          kitModal: {
            text: [
              `Набор содержит несколько видов щепы: ольха, абрикос, слива, груша, яблоня. Это идеальное сочетание ароматов и вкусов для горячего и холодного копчения мяса. «Правильные» опилки подобраны по составу и качественно высушены.
            <br><br>
            Вес упаковки: 1 кг.
            `,
            ],
          },
        },

        {
          id: goods.schepa_meetbird,
          price: goodsJson[goods.schepa_meetbird].price,
          oldPrice: goodsJson[goods.schepa_meetbird].oldPrice,
          name: "Набор щепы для мяса птицы",
          nameSpecialModal: "Набор щепы <br> для мяса&nbsp;птицы",
          selected: false,

          icon: "schepa_meetbird-icon",
          kit: "schepa_meetbird-kit",

          kitModal: {
            text: [
              `В наборе сочетается щепа ольхи, сливы, абрикоса, груши и вишни. Соблюдены точные пропорции для сбалансированного вкуса и аромата конечного продукта. Птица получается нежной, мягкой, с насыщенной корочкой.
            <br><br>
            Вес упаковки: 1 кг.
            `,
            ],
          },
        },

        {
          id: goods.jgut,
          price: goodsJson[goods.jgut].price,
          oldPrice: goodsJson[goods.jgut].oldPrice,
          name: "Льняной жгут 50 м",
          selected: false,

          icon: "jgut-icon",
          kit: "jgut-kit",

          kitModal: {
            text: [
              `Натуральный шпагат из льна для подвешивания продуктов. Не выделяет вредных веществ во время копчения, не влияет на вкус мяса и рыбы.
            <br><br>
            Длина: 50 м<br>
            Толщина нити: 1,25 мм<br>
            Прочность: 13,5 на разрыв.
            `,
            ],
          },
        },
      ],
    };
  },
  mutations: {
    writeReview(state) {
      state.review = true;
    },

    showModalFeedback(state) {
      state.modalFeedback = true;
    },

    changeUserRassrochka(state, value) {
      state.user.rassrochka = value;
    },

    selectDymo(state) {
      state.dymo.selected = true;
    },

    selectMain(state, id) {
      state.main.forEach((element) => {
        element.id == id
          ? (element.selected = true)
          : (element.selected = false);
      });
    },

    setMobile(state, value) {
      state.mobile = value;
    },
  },
  getters: {
    getMainId(state) {
      return state.main.find((el) => el.selected).id;
    },

    getMainItem(state) {
      return state.main.find((el) => el.selected);
    },

    getDymo(state) {
      return state.dymo;
    },

    getMain(state) {
      return state.main;
    },

    getMobile(state) {
      return state.mobile;
    },

    getUser(state) {
      return state.user;
    },
    getUserRassrochka(state) {
      return state.user.rassrochka;
    },

    getModalFeedback(state) {
      return state.modalFeedback;
    },
    getReview(state) {
      return state.review;
    },

    getMainPrices(state) {
      return [state.main[0].price, state.main[0].oldPrice];
    },

    getDops(state) {
      return state.dops;
    },

    getLastPrice(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.price : sum;
      }, state.main.find((el) => el.selected).price);
    },

    getLastOldPrice(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.oldPrice : sum;
      }, state.main.find((el) => el.selected).oldPrice);
    },
  },
});
