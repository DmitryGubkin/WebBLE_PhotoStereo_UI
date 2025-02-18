<template>
  <div class="container">
    <button 
      :style="{ backgroundColor: buttonColor }" 
      @click="changeColor"
      class="btn"
    >
      Click Me
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const buttonColor = ref("#007bff"); // Default color (Bootstrap Primary)

    // Function to change the button color on click
    const changeColor = () => {
      const colors = ["#007bff", "#28a745", "#dc3545", "#ffc107", "#6610f2"];
      buttonColor.value = colors[Math.floor(Math.random() * colors.length)];
    };

    return { buttonColor, changeColor };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.btn {
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
</style>
