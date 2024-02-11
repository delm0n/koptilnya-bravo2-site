export const storePHP = {
  state: () => ({
    webpSupport: webp,
    test: testVersion,
    year: year,
    formHelicon: hideForm.innerHTML,
    phone: phone,
    modalSuccess: ["", ""],
  }),
  mutations: {
    openModalSuccessManager(state) {
      state.modalSuccess = [
        "Благодарим за обращение!!",
        "Менеджер уже получил Вашу контактную информацию, он свяжется с Вами в течение 10 минут <br> Проверьте свой номер - вдруг Вы ошиблись?",
      ];
    },

    openModalSuccessOrder(state) {
      state.modalSuccess = [
        "Благодарим за заказ!",
        "Менеджер уже получил Ваше обращение, он свяжется с Вами в течение 10 минут <br> Проверьте свой номер - вдруг Вы ошиблись?",
      ];
    },
  },
  getters: {
    getYear(state) {
      return state.year;
    },
    getPhone(state) {
      return state.phone;
    },
    getWebp(state) {
      return state.webpSupport;
    },
    getMetric(state) {
      return state.formHelicon;
    },
    isTest(state) {
      return state.test;
    },
    getModalSuccess(state) {
      return state.modalSuccess;
    },
  },
};
