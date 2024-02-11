<template>
  <div :class="['reason-item', reverse ? 'reverse' : '']">
    <div class="reason-item__media">
      <slot></slot>
    </div>
    <div class="reason-item__text">
      <div class="bg-number">{{ number }}</div>
      <p class="text-title" v-html="item.title"></p>
      <p class="text-subtitle" v-html="item.subtitle"></p>

      <p class="text-decr" v-html="item.decr"></p>

      <template v-if="item.decrHidden">
        <collapse :when="getMobile ? item.showHidden : true">
          <p class="text-decr" v-html="item.decrHidden"></p>

          <div v-if="item.button" v-html="item.button"></div>
        </collapse>

        <p
          @click="
            item.showHidden = !item.showHidden;
            updateSwiperMobile();
          "
          class="show-button"
        >
          {{ item.showHidden ? "Скрыть" : "Подробнее" }}
        </p>
      </template>
    </div>
  </div>
</template>

<script>
import { Collapse } from "vue-collapsed";
import { mapGetters } from "vuex";

export default {
  components: { Collapse },
  computed: mapGetters(["getMobile"]),
  props: {
    item: Object,
    number: Number,
    reverse: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    updateSwiperMobile() {
      this.$emit("update-slider");
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.reason-item {
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    max-width: calc(100% - 88px - 40px);
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    max-width: 450px;
  }

  @media (min-width: 993px) {
    &.reverse {
      flex-direction: row-reverse;
    }
  }

  &__media {
    width: calc(100% / 2 - 20px);
    @media (max-width: 992px) {
      width: 100%;
    }
  }

  &__text {
    position: relative;
    width: calc(100% / 2 - 20px);
    @media (max-width: 1024px) {
      width: calc(100% / 2);
    }

    @media (max-width: 992px) {
      width: 100%;
    }

    .bg-number {
      display: none;
      @media (min-width: 993px) {
        display: block;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        color: rgba(226, 188, 133, 0.4);
        text-align: center;
        font-family: "Inter";
        font-size: 250px;
        font-style: normal;
        font-weight: 600;
        line-height: 102.8%;
        @include fluidFontSize(180, 250, 993, 1920);
      }
    }

    p {
      color: #323232;
      font-style: normal;
      position: relative;
      z-index: 3;
    }

    .show-button {
      display: none;

      @media (max-width: 768px) {
        cursor: pointer;
        display: block;
        margin-top: 15px;
        color: #ae874e;
        font-family: "Inter";
        font-size: 14px;
        font-weight: 500;
        line-height: 21px; /* 150% */
        text-decoration-line: underline;
      }
    }

    .text-title {
      font-family: "Lato";
      font-size: 28px;
      font-weight: 600;
      line-height: 125%;
      margin-bottom: 20px;

      @include fluidFontSize(24, 28, 993, 1920);

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px; /* 138.889% */
        margin-bottom: 10px;
      }
    }

    .text-subtitle {
      font-family: "Lato";
      font-size: 24px;
      font-weight: 400;
      line-height: 129.167%;
      margin-bottom: 25px;

      @include fluidFontSize(20, 24, 993, 1920);

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 23px;
        margin-bottom: 15px;
      }
    }

    .text-decr {
      font-family: "Inter";
      font-size: 18px;
      font-weight: 300;
      line-height: 138.889%;

      @include fluidFontSize(16, 18, 993, 1920);

      &:not(:last-child) {
        margin-bottom: 15px;

        @media (max-width: 768px) {
          margin-bottom: 5px;
        }
      }

      span {
        font-weight: 600;
      }

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 21px;
      }
    }

    .button {
      @extend %button-main;
      white-space: nowrap;
      max-width: max-content;
      padding: 15px 10px;

      @media (max-width: 768px) {
        padding: 11px 9px;
        margin-top: 20px;
        font-size: 16px;
        line-height: 23px;
      }
    }
  }
}
</style>
