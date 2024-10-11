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
        document.documentElement.classList.toggle("dark")
      ev.target.classList.toggle("triggered")
    }
}
}
</script>