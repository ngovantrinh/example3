<template>
  <form onsubmit="return false">
    <div v-for="form in allFormExp" :key="form.id">
      {{ form.id }}
      {{ form.nameCompany }}
      {{ form.position }}
      {{ form.interval }}
      {{ form.describeWork }}
      <DefaultLayout>
        <div class="form-information">
          <div class="line-info">
            <label for="company">
              <p>Tên công ty</p>
              <input
                v-model="form.nameCompany"
                class="input-line"
                id="company"
                type="text"
              />
            </label>
          </div>
          <div class="line-info">
            <label for="company">
              <p>Vị trí từng làm</p>
              <input
                v-model="form.position"
                class="input-line"
                id="company"
                type="text"
              />
            </label>
          </div>
          <div class="line-info">
            <label for="position">
              <p>Thời gian làm việc</p>
              <input
                v-model="form.interval"
                class="input-line"
                type="date"
                id="position"
              />
            </label>
          </div>
          <div class="line-info">
            <label for="description">
              <p>Mô tả về công việc</p>
              <textarea
                v-model="form.describeWork"
                class="input-line"
                id="description"
                cols="30"
                rows="5"
              ></textarea>
            </label>
          </div>
        </div>
      </DefaultLayout>
    </div>
    <div class="button-box">
      <ButtonBase
        :className="'next-btn'"
        :nameButton="'Tiếp tục'"
        :type="'submit'"
        @onHandle="onSubmitInfo"
      />
      <ButtonBase
        :className="'next-btn'"
        :nameButton="'Quay lại'"
        :type="'submit'"
        @onHandle="onPrevInfo"
      />
      <ButtonBase
        :className="'next-btn'"
        :nameButton="'thêm form'"
        :type="'button'"
        @onHandle="onAddNewForm"
      />
    </div>
  </form>
</template>

<script>
import DefaultLayout from "../DefaultLayout/index.vue";
import ButtonBase from "../ButtonBase/index.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "StepTwo",
  data() {
    return {
      exp: {
        id: 1,
        nameCompany: "",
        position: "",
        interval: "",
        describeWork: "",
      },
      allFormExp: [],
    };
  },
  components: { DefaultLayout, ButtonBase },
  created() {
    this.allFormExp.push(this.exp);
    console.log(this.allFormExp);
  },
  computed: {
    ...mapGetters(["experience"]),
  },
  methods: {
    ...mapMutations(["setExp"]),
    ...mapActions(["updateInfoUser"]),
    onPrevInfo(e) {
      e.preventDefault();
      this.$emit("handlePrevStep");
    },
    onSubmitInfo() {
      this.updateInfoUser(this.allFormExp);
      // console.log(e, "submit here");
      console.log(this.allFormExp);
      console.log(this.experience);
      // if (this.infoUser.fullName && this.infoUser.birthday) {
      this.$emit("handleNextStep");
      // }
    },
    onAddNewForm() {
      this.allFormExp = [
        ...this.allFormExp,
        { ...this.exp, id: (Math.random() * 100).toFixed(3) },
      ];
    },
  },
};
</script>

<style></style>
