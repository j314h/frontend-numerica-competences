<template>
  <div class="box_input_frame">
    <!-- box btn add input for entity -->
    <div class="box_btn_add_input">
      <!-- label for entity multiple -->
      <label class="label-input-multiple stxm-m" :class="themeColor.label">{{ textLabel }}</label>

      <!-- btn for add input -->
      <button class="btn_add_input" @click.prevent="addInputSector">
        <svg class="addbtn" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM10 18.7499C5.16751 18.7499 1.25 14.8324 1.25 9.99994C1.25 5.16745 5.16751 1.24994 10 1.24994C14.8325 1.24994 18.75 5.16745 18.75 9.99994C18.75 12.3206 17.8281 14.5462 16.1872 16.1871C14.5462 17.8281 12.3206 18.7499 10 18.7499ZM10.625 9.37493H15.1063C15.4515 9.37493 15.7313 9.65475 15.7313 9.99993C15.7313 10.3451 15.4515 10.6249 15.1063 10.6249H10.625V15.1062C10.625 15.4514 10.3452 15.7312 10 15.7312C9.65487 15.7312 9.37505 15.4514 9.37505 15.1062V10.6249H4.8938C4.54862 10.6249 4.2688 10.3451 4.2688 9.99993C4.2688 9.65475 4.54862 9.37493 4.8938 9.37493H9.37505V4.89368C9.37505 4.5485 9.65487 4.26868 10 4.26868C10.3452 4.26868 10.625 4.5485 10.625 4.89368V9.37493Z"
            fill="#4c39e9"
          />
        </svg>
      </button>
    </div>

    <!-- many input of entity -->
    <div class="input_sector" v-for="(input, i) in nbrInputSectors" :key="i">
      <input-sample :placeholder="placeholder" :required="false" :type="'text'" v-model="sectors[i]"></input-sample>
      <!--<input class="input" placeholder="Nom du secteur" />-->

      <!-- btn delete input -->
      <button class="box_delete_input" @click.prevent="deleteSector(i)">
        <svg
          class="btn_delete_input"
          width="20"
          height="20"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.9999 2.22217C10.1815 2.22217 2.22217 10.1815 2.22217 19.9999C2.22217 29.8183 10.1815 37.7777 19.9999 37.7777C29.8183 37.7777 37.7777 29.8183 37.7777 19.9999C37.7777 15.285 35.9047 10.7631 32.5707 7.42916C29.2367 4.09518 24.7149 2.22217 19.9999 2.22217ZM19.9999 35.5555C11.4088 35.5555 4.44438 28.591 4.44438 19.9999C4.44438 11.4089 11.4088 4.44439 19.9999 4.44439C28.591 4.44439 35.5555 11.4089 35.5555 19.9999C35.5555 24.1255 33.9166 28.0822 30.9994 30.9994C28.0821 33.9166 24.1255 35.5555 19.9999 35.5555ZM13.3333 18.8888H26.6666C27.2803 18.8888 27.7777 19.3863 27.7777 19.9999C27.7777 20.6136 27.2803 21.1111 26.6666 21.1111H13.3333C12.7196 21.1111 12.2222 20.6136 12.2222 19.9999C12.2222 19.3863 12.7196 18.8888 13.3333 18.8888Z"
            fill="#DB0000"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import InputSample from "./InputSample.vue";
export default {
  components: { InputSample },
  name: "InputFrameAddMultiple",
  props: {
    placeholder: String,
    themeColor: Object,
    textLabel: String,
    //for see input add sector and variable for correct functioning of the component
    sendData: Array,
    isAddEntity: Boolean, //bool false default
  },
  data() {
    return {
      countSectors: 0,
      nbrInputSectors: [],
      sectors: this.sendData,
    };
  },
  computed: {},
  watch: {
    //if isAddEntity change, reset variable of input and mutation isAddEntity
    isAddEntity(value) {
      if (value) {
        this.countSectors = 0;
        this.nbrInputSectors = [];
        this.sectors = this.sendData;
      }
      this.$emit("update:isAddEntity", false);
    },
  },
  methods: {
    //count in fack tab for simulate loop in template for created input for sectors
    //+ insert new input in template (in DOM)
    addInputSector() {
      this.countSectors += 1;
      this.nbrInputSectors.push(this.countSectors);
    },
    //delete input in template and delete value and fack value in array
    deleteSector(i) {
      this.nbrInputSectors.splice(i, 1);
      this.sectors.splice(i, 1);
    },
  },
};
</script>

<style></style>
