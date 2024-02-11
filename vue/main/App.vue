<template>
  <div>
    <header-top :nav-links="navigations" />
    <header-main />
    <features />
    <how-work />
    <complectation />
    <reasons />
    <compare />
    <models />
    <made />
    <!-- <patent /> -->
    <dishes />

    <kit />
    <faq />
    <feedback />
    <tinkoff-block />
    <delivery />
    <photo />
    <questions />
    <my-map />
    <my-footer />

    <feedback-modal />
    <call-modal />
    <order-modal />
    <button-up />
    <dymogenerator-modal />
    <modal-success />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapMutations } from "vuex";
import Features from "../components/Features.vue";
import HowWork from "../components/HowWork.vue";
import Delivery from "../components/Delivery-v2.vue";
import Questions from "../components/Questions.vue";
import HeaderTop from "../components/HeaderTop.vue";
import CallModal from "../components/CallModal.vue";
import OrderModal from "../components/OrderModal.vue";
import HeaderMain from "../components/HeaderMain.vue";
import Complectation from "../components/Complectation.vue";
import Compare from "../components/Compare.vue";
import Reasons from "../components/Reasons.vue";
import DymogeneratorModal from "../components/DymogeneratorModal.vue";
import Kit from "../components/Kit.vue";
import Photo from "../components/Photo.vue";
import ModalSuccess from "../components/ModalSuccess.vue";

export default {
  components: {
    HeaderTop,
    HeaderMain,
    Features,
    HowWork,
    Delivery,
    Questions,
    CallModal,
    OrderModal,
    Compare,
    Complectation,
    Photo,
    Models: defineAsyncComponent(() => import("../components/Models.vue")),

    Dishes: defineAsyncComponent(() => import("../components/Dishes.vue")),
    MyMap: defineAsyncComponent(() => import("../components/Map.vue")),
    Faq: defineAsyncComponent(() => import("../components/FAQ.vue")),
    Feedback: defineAsyncComponent(() => import("../components/Feedback.vue")),
    Patent: defineAsyncComponent(() => import("../components/Patent.vue")),
    FeedbackModal: defineAsyncComponent(() =>
      import("../components/FeedbackModal.vue")
    ),
    TinkoffBlock: defineAsyncComponent(() =>
      import("../components/TinkoffBlock.vue")
    ),
    ButtonUp: defineAsyncComponent(() => import("../components/ButtonUp.vue")),
    MyFooter: defineAsyncComponent(() => import("../components/Footer.vue")),
    Made: defineAsyncComponent(() => import("../components/Made.vue")),
    Reasons,
    DymogeneratorModal,
    Kit,
    ModalSuccess,
  },

  methods: mapMutations(["setMobile"]),
  data() {
    return {
      navigations: [
        {
          name: "Преимущества",
          selector: "#reasons",
        },

        {
          name: "Гарантии",
          selector: "#made",
        },

        {
          name: "Отзывы",
          selector: "#feedback",
        },

        {
          name: "Доставка",
          selector: "#tinkoff",
        },
      ],
    };
  },
  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 768px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.setMobile(false);
      } else {
        this.setMobile(true);
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_fonts.scss";
@import "../../scss/_main.scss";
</style>
