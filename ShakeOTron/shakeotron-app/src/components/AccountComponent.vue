<template>
    <div id="textA">
        <h1>Account / Settings</h1>
    </div>
    <div id="account-container">
        <div id="left-container">
            <div>
            <p>Username: {{ username }}</p>
            
            </div>
            
            <div>
            <p>Email: {{ email }}</p>
            </div>
            
            <p>Your favourite cocktail is: </p>
            <p>{{ favCocktail }}</p> <br>
            <input type="text" placeholder="change username"> <br> <br>
            <input type="text" placeholder="change favourite cocktail">
        </div>
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
        data(){
            return {
                username: '',
                password: '',
                email: '',
                favCocktail: 'home-made Apple Wine',
            }
        },
        mounted() {
            if (localStorage.getItem('user') !== null) {
                this.username = JSON.parse(localStorage.getItem('user'))[0]
                this.email = JSON.parse(localStorage.getItem('user'))[1]
                this.password = JSON.parse(localStorage.getItem('user'))[2]
                this.favCocktail = JSON.parse(localStorage.getItem('user'))[3]
            }
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
#account-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#left-container{
    margin-top: 60px;
    margin-left: 33%;
}
button {
    margin-top: 20px;
    margin-right: 50px;
}
#right-container {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 33%;
    margin-top: 60px;
    justify-content: center;
}



</style>