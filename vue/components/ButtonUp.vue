<template>
  <button
    aria-label="Наверх"
    ref="up"
    type="button"
    class="button-up hide"
    v-on:click="srollToTop"
  ></button>
</template>  

<script>
export default {
  methods: {
    srollToTop() {
      this.gsap.to(window, {
        duration: 2,
        scrollTo: 0,
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1000) {
        this.$refs.up.classList.replace("hide", "show");
      } else {
        this.$refs.up.classList.replace("show", "hide");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.button-up {
  z-index: 200;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 66px;
  height: 66px;
  padding: 0;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTA0MyAxOC44MzY5QzQuOTA0MyAxOS4yNTExIDUuMjQwMDggMTkuNTg2OSA1LjY1NDMgMTkuNTg2OUM2LjA2ODUxIDE5LjU4NjkgNi40MDQzIDE5LjI1MTEgNi40MDQzIDE4LjgzNjlINC45MDQzWk02LjE4NDYzIDAuOTgzMjc0QzUuODkxNzMgMC42OTAzODIgNS40MTY4NiAwLjY5MDM4MiA1LjEyMzk3IDAuOTgzMjc0TDAuMzUwOTk2IDUuNzU2MjVDMC4wNTgxMDI2IDYuMDQ5MTQgMC4wNTgxMDI2IDYuNTI0MDEgMC4zNTA5OTYgNi44MTY5MUMwLjY0Mzg4OSA3LjEwOTggMS4xMTg3NiA3LjEwOTggMS40MTE2NiA2LjgxNjkxTDUuNjU0MyAyLjU3NDI2TDkuODk2OTQgNi44MTY5MUMxMC4xODk4IDcuMTA5OCAxMC42NjQ3IDcuMTA5OCAxMC45NTc2IDYuODE2OTFDMTEuMjUwNSA2LjUyNDAxIDExLjI1MDUgNi4wNDkxNCAxMC45NTc2IDUuNzU2MjVMNi4xODQ2MyAwLjk4MzI3NFpNNi40MDQzIDE4LjgzNjlMNi40MDQzIDEuNTEzNjFINC45MDQzTDQuOTA0MyAxOC44MzY5SDYuNDA0M1oiIGZpbGw9IiMzMjMyMzIiLz4KPC9zdmc+Cg==);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 18px;
  background-color: #e2bc85;
  cursor: pointer;
  outline: none;
  border: none;
  transition: opacity 300ms, transform 0.6s ease, background-color 500ms;
  border-radius: 100%;
  box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #c8a066;
  }

  &:active {
    transform: translateY(3px);
  }

  &.show {
    opacity: 1;
  }

  &.hide {
    opacity: 0;
    pointer-events: none;
  }

  @media (max-width: 992px) {
    right: 15px;
    bottom: 25px;
    width: 45px;
    height: 45px;
    background-size: 16px;
  }
}
</style>
