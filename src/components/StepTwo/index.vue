<template>
  <form onsubmit="return false">
    <div class="form-company" v-for="form in allFormExp" :key="form.id">
      <DefaultLayout>
        <div class="form-information">
          <div class="line-info company">
            <label for="company">
              <!-- <input
                v-model="form.nameCompany"
                class="input-line"
                id="company"
                type="text"
                placeholder="Tên công ty"
              /> -->
              <select
                v-model="form.nameCompany"
                class="input-line"
                name=""
                id=""
              >
                <!-- <option disabled > dd</option> -->
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
              <!-- <p>Vị trí từng làm</p> -->
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
              <input
                v-model="form.interval"
                class="input-line"
                type="date"
                id="position"
                required
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
import DefaultLayout from "../DefaultLayout/index.vue";
import ButtonBase from "../ButtonBase/index.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import RemoveIcon from "../../assets/images/Trash.png";
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
      image: RemoveIcon,
    };
  },
  components: { DefaultLayout, ButtonBase },
  created() {
    this.allFormExp.push(this.exp);
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
