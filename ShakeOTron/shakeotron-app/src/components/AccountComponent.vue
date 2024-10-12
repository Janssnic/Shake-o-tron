<template>
    <div id="account-container">
        <div id="left-container"></div>
        <div id="right-container">
            <button @click="logout">Logout</button>
            <SettingsPage/>
        </div>
    </div>
</template>

<script>
    import SettingsPage from './SettingsPage.vue';

    export default {
        components: {
            SettingsPage
        },
        methods: {
            logout() {
                this.$emit('logIn', false, "username?")
            }
        }
    }
</script>

<style scoped>
li {
  padding: 10px;
  font-size: x-large;
  color: #3b3b3b;
  cursor: pointer;
}
button {
    margin-top: 20px;
    margin-right: 50px;
}
#right-container {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
}



</style>