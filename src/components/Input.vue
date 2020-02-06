<template>
 <div id="input">
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <input 
        type="text" 
        :id="id" 
        :name="id"
        :maxlength="maxLength" 
        :placeholder="place" 
        :value="dataValue"
        @input="sendValue">
      </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    dataValue: [Number, String],
    label: null,
    place: null,
    maxLength: null
  },
  data() {
    return {
      valueInput: this.dataValue
    }
  },
  methods: {
    sendValue(event) {
      this.$emit('input', event.target.value);
    }
  }
}
</script>