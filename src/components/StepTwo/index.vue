<template>
  <form onsubmit="return false">
    <div class="form-company" v-for="form in allFormExp" :key="form.id">
      <DefaultLayout>
        <div class="form-information">
          <div class="line-info company">
            <label for="company">
              <select
                v-model="form.nameCompany"
                class="input-line"
                name=""
                id=""
              >
                <option value="Mor software">Mor software</option>
                <option value="MH Solutions">MH Solutions</option>
                <option value="Tech">Tech</option>
              </select>
              <img
                class="icon-remove"
                :src="image"
                alt=""
                srcset=""
                @click="onRemoveForm(form.id)"
              />
            </label>
          </div>
          <div class="line-info">
            <label for="company">
              <div class="title">
                <span class="required">Must</span>
                <span>Vị trí từng làm</span>
              </div>
              <input
                v-model="form.position"
                class="input-line"
                id="company"
                type="text"
                required
              />
            </label>
          </div>
          <div class="line-info">
            <label for="position">
              <div class="title">
                <span class="required">Must</span>
                <span>Thời gian làm việc</span>
              </div>
              <date-picker
                v-model="form.interval"
                range
                placeholder="Thời gian làm việc"
                value-type="DD/MM/YYYY"
                format="DD-MM-YYYY"
              ></date-picker>
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
            {{ form.describeWork.length }} / 1000
          </div>
        </div>
      </DefaultLayout>
    </div>
    <ButtonBase
      :className="'next-btn add-form'"
      :nameButton="'Thêm công ty'"
      :type="'button'"
      @onHandle="onAddNewForm"
    />
    <div class="button-box">
      <ButtonBase
        :className="'next-btn'"
        :nameButton="'Tiếp tục'"
        :type="'submit'"
        @onHandle="onSubmitInfo"
        :buttonStatus="status"
      />
      <ButtonBase
        :className="'next-btn'"
        :nameButton="'Quay lại'"
        :type="'submit'"
        @onHandle="onPrevInfo"
      />
    </div>
  </form>
</template>

<script>
import DatePicker from "vue2-datepicker";
import DefaultLayout from "../DefaultLayout/index.vue";
import ButtonBase from "../ButtonBase/index.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import RemoveIcon from "../../assets/images/Trash.png";
export default {
  name: "StepTwo",
  data() {
    return {
      status: true,
      exp: {
        nameCompany: "",
        position: "",
        interval: "",
        describeWork: "",
      },
      allFormExp: [],
      image: RemoveIcon,
      time1: null,
      time2: null,
      time3: null,
    };
  },
  components: { DefaultLayout, ButtonBase, DatePicker },
  created() {
    this.allFormExp.push({ ...this.exp, id: (Math.random() * 100).toFixed(3) });
  },
  computed: {
    ...mapGetters(["experience", "infomationUser"]),
  },
  methods: {
    ...mapMutations(["setExp"]),
    ...mapActions(["updateExperience"]),
    onPrevInfo(e) {
      e.preventDefault();
      this.$emit("handlePrevStep");
    },
    onSubmitInfo() {
      this.updateExperience(this.allFormExp);
      this.$emit("handleNextStep");
    },
    onAddNewForm() {
      this.allFormExp = [
        ...this.allFormExp,
        { ...this.exp, id: (Math.random() * 100).toFixed(3) },
      ];
    },
    onRemoveForm(id) {
      if (this.allFormExp.length > 1) {
        this.allFormExp = this.allFormExp.filter((item) => item.id !== id);
      }
    },
    changeStatusBtn() {
      for (let i = 0; i < this.allFormExp.length; i++) {
        if (
          this.allFormExp[i].position.length > 0 &&
          this.allFormExp[i].interval.length > 0
        ) {
          this.status = false;
        } else {
          this.status = true;
        }
      }
    },
  },
  watch: {
    allFormExp: {
      handler() {
        this.changeStatusBtn();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.form-company {
  padding-bottom: 25px;
}
.company {
  padding: 10px 16px;
  background: #f8f8f8;
}
.company label {
  display: flex;
  column-gap: 16px;
}
.company label .icon-remove {
  width: 32px;
  height: 32px;
}
.add-form {
}
</style>
