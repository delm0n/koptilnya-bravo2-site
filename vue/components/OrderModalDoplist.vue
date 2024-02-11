<template>
  <div class="modal-order-doplist">
    <ul class="dops-list">
      <li
        v-for="(dop, index) in dops"
        :key="index"
        v-show="!mobile || index < 4 || showMore"
      >
        <label class="checkbox default">
          <input type="checkbox" v-model="dop.selected" />
          <div class="box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke="#323232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span v-html="dop.nameSpecialModal ? dop.nameSpecialModal : dop.name">
          </span>
        </label>

        <span class="dops-list__price">
          <span class="dops-list__price-new" v-html="dop.price + ' ₽'"></span>
          <span class="dops-list__price-old" v-html="dop.oldPrice + ' ₽'">
          </span>
        </span>
      </li>
    </ul>

    <p class="button__showMore" @click="showMore = !showMore">
      {{ !showMore ? "Показать всё" : "Скрыть" }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
    };
  },
  props: {
    mobile: Boolean,
    dops: Array,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.modal-order-doplist {
  .dops-list {
    @media (max-width: 786px) {
      margin-top: 20px;
    }

    li {
      &:not(:last-child) {
        margin-bottom: 15px;

        @media (max-width: 786px) {
          margin-bottom: 10px;
        }
      }

      position: relative;
      @media (min-width: 769px) {
        display: flex;
        justify-content: space-between;

        &:before {
          border-bottom: 2px dotted #9f9f9f;
          top: 23px;
          content: "";
          position: absolute;
          right: 0;
          width: 99%;
          z-index: 0;
        }
      }
    }

    &__price {
      display: flex;
      text-align: center;
      font-family: "Inter";
      font-style: normal;
      align-items: center;
      gap: 10px;
      background-color: #fff;
      z-index: 1;
      position: relative;
      padding-left: 5px;
      height: 25px;

      @media (max-width: 768px) {
        padding-left: 30px;
        z-index: 0;
      }

      &-new {
        color: #323232;
        font-size: 22px;
        font-weight: 600;
        line-height: 131.818%;

        @include fluidFontSize(20, 22, 992, 1920);
      }

      &-old {
        color: #9f9f9f;
        font-size: 16px;
        font-weight: 400;
        line-height: 143.75%;
        text-decoration-line: strikethrough;

        @include fluidFontSize(14, 16, 992, 1920);
      }
    }

    .checkbox {
      gap: 20px;
      background-color: #fff;
      z-index: 1;
      position: relative;
      align-items: center;
      padding-right: 5px;

      @media (max-width: 768px) {
        gap: 10px;

        .box {
          transform: translateY(calc(25px / 2));
          position: relative;
          z-index: 2;
        }
      }

      span {
        color: #323232;
        font-family: "Lato";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px; /* 138.889% */
        max-width: 186px;

        max-width: min-content;
        white-space: nowrap;

        @include fluidFontSize(16, 18, 992, 1920);

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px; /* 143.75% */

          br {
            display: none;
          }
        }
      }
    }
  }

  .button__showMore {
    display: none;
    @media (max-width: 786px) {
      display: block;
      cursor: pointer;
      color: #e2bc85;
      font-family: "Lato";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 138.889% */
      text-decoration-line: underline;
      transition: all 0.4s;

      &:hover {
        color: #c8a066;
      }
    }
  }
}
</style>
