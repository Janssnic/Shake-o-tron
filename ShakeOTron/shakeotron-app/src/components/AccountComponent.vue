<template>
    <div id="account-container">
        <div id="left-container">
            <div>
            <p>Username: {{ username }}</p>
            <input type="text" placeholder="change username">
            </div>
            
            <div>
            <p>Email: {{ email }}</p>
            </div>
            
            <p>Your favourite cocktail is: </p>
            <p>{{ favCocktail }}</p>
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
    padding: 15px;
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