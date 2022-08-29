<template>
  <div class="hello">
    <h1>Đơn ứng tuyển</h1>
    <div class="steps">
      <div class="box-step">
        <div class="step active-step">
          <span class="num-step">1</span>
        </div>
        <p>Thông tin cá nhân</p>
      </div>
      <div class="box-step">
        <div class="step">
          <span class="num-step">2</span>
        </div>
        <p>Kinh nghiệm làm việc</p>
      </div>
      <div class="box-step">
        <div class="step">
          <span class="num-step">3</span>
        </div>
        <p>Xác nhận thông tin</p>
      </div>
    </div>
    <StepOne />
  </div>
</template>

<script>
import StepOne from "../components/StepOne/index.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    StepOne,
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
}
.box-step {
  text-align: center;
  text-align: -webkit-center;
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
</style>
