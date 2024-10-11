<template>
    <ul>
        <li>Account</li>
        <li>Notifications</li>
        <li @click="toggleDark">Appearance</li>
        <li>Privacy</li>
        <li>Support</li>
    </ul>

</template>

<script>
export default {
methods: {
    toggleDark(ev) {
      const isDark = document.documentElement.classList.toggle("dark")
      ev.target.classList.toggle("triggered")
      console.log(isDark ? "dark mode enabled" : "dark mode disabled")
    }
}
}
</script>

<style scoped>
li {
  padding: 15px;
  font-size: x-large;
  color: #3b3b3b;
  cursor: pointer;
}

.triggered {
    color: #fff;
    background-color: #333;
}


</style>