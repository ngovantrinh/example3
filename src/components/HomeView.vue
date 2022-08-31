<template>
  <div class="wrapper">
    <h1>Đơn ứng tuyển</h1>
    <div class="steps">
      <div class="box-step">
        <div class="step active-step">
          <span class="num-step">1</span>
        </div>
        <p>Thông tin cá nhân</p>
      </div>
      <div class="box-step">
        <div
          class="step"
          :class="{
            'active-step':
              currentStep === 'StepThree' || currentStep === 'StepTwo',
          }"
        >
          <span class="num-step">2</span>
        </div>
        <p>Kinh nghiệm làm việc</p>
      </div>
      <div class="box-step">
        <div
          class="step"
          :class="{ 'active-step': currentStep === 'StepThree' }"
        >
          <span class="num-step">3</span>
        </div>
        <p>Xác nhận thông tin</p>
      </div>
    </div>
    <component
      :is="currentStep"
      @handleNextStep="onNextStep"
      @handlePrevStep="onPrevStep"
    />
    <!-- <div class="button-box">
      <button
        v-if="currentStep !== 'StepThree'"
        class="next-btn"
        @click="onNextStep"
      >
        Tiếp tục
      </button>
      <button v-else-if="currentStep === 'StepThree'" class="next-btn">
        Hoàn thành
      </button>
      <button
        v-if="currentStep != 'StepOne'"
        class="next-btn"
        @click="onPrevStep"
      >
        Quay lại
      </button>
    </div> -->
  </div>
</template>

<script>
import StepOne from "../components/StepOne/index.vue";
import StepTwo from "./StepTwo/index.vue";
import StepThree from "./StepThree/index.vue";
export const DEFAULT_STEP = "StepOne";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      step: DEFAULT_STEP,
      dataAll: {
        infomation: null,
      },
      currentStep: DEFAULT_STEP,
    };
  },
  components: {
    StepOne,
    StepTwo,
    StepThree,
  },
  methods: {
    onPrevStep() {
      if (this.currentStep === "StepThree") {
        this.currentStep = "StepTwo";
      } else {
        this.currentStep = "StepOne";
      }
    },
    onSubmit() {
      console.log("done");
    },
    onNextStep() {
      if (this.currentStep === "StepOne") {
        this.currentStep = "StepTwo";
      } else {
        this.currentStep = "StepThree";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.steps {
  z-index: 2;
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  position: relative;
  margin: 20px 0;
}
.box-step {
  text-align: center;
  text-align: -webkit-center;
}
.box-step p {
  margin-top: 10px;
}
.step {
  width: 32px;
  height: 32px;
  border-radius: 90px;
  display: flex;
  align-items: center;
  background: #dbdbdb;
  justify-content: center;
  color: white;
}
.step .num-step {
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}
.active-step {
  background: #617d98;
  /* width: 40px; */
  /* height: 40px; */
}
.steps::before {
  content: "";
  position: absolute;
  top: 21%;
  left: 15%;
  width: 72%;
  height: 2px;
  z-index: -1;
  background: #dbdbdb;
}
.button-box {
  display: flex;
  column-gap: 25px;
}
.wrapper .next-btn {
  padding: 8px 12px;
  border: none;
  margin: 25px 0px;
}
</style>
