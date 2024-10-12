<template>
    <ul>
        <li @click="navAccount">Account</li>
        <li>Notifications</li>
        <li @click="toggleDark">Appearance</li>
        <li>Privacy</li>
        <li>Support</li>
    </ul>

</template>

<script>
export default {
methods: {
    toggleDark() {
      const isDark = document.documentElement.classList.toggle("dark")
      
      console.log(isDark ? "dark mode enabled" : "dark mode disabled")
      console.log('Dark mode toggled:', document.documentElement.classList);
    },
    navAccount() {
        console.log('Account clicked')
        this.$emit('navClicked', "account")
}
}
}
</script>


<style>
.triggered {
  color: #fff;
  background-color: #333;
}

</style>


<style scoped>
li {
  padding: 15px;
  font-size: x-large;
  color: #3b3b3b;
  cursor: pointer;
}




</style>