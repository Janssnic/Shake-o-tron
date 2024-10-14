<template>
    <div id="account-container">
        <div id="left-container">
            <h2>Profile</h2>
            <p>Username: {{ username }}</p>
            <div>
            <input type="text" placeholder="change username">
            <button>save</button>
            </div>
            
            <p>Email: {{ email }}</p>
            <div>
            <input type="text" placeholder="change email">
            <button>save</button>
            </div>
            
            <p>Your favourite cocktail is: </p>
            <p id="favourite-cocktail">{{ favCocktail }}</p>
            <div>
            <input type="text" placeholder="new favourite?">
            <button>save</button>
            </div>
            <p class="link" @click="passwordChange = !passwordChange">change password?</p>
            <div v-if="passwordChange" id="password-container">
                <p>old password</p>
                <input type="password" placeholder="old password">
                <p>new password</p>
                <input type="password" placeholder="new password">
                <p>confirm new password</p>
                <input type="password" placeholder="confirm new password">
                <button>save</button>
            </div>
            </div>
            <div id="right-container">
            <button @click="logout" id="logout-button">Logout</button>
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
                favCocktail: '',
                passwordChange: true,
            }
        },
        mounted() {
            if (localStorage.getItem('user') !== null) {
                this.username = JSON.parse(localStorage.getItem('user'))[0]
                this.email = JSON.parse(localStorage.getItem('user'))[1]
                this.password = JSON.parse(localStorage.getItem('user'))[2]
                this.favCocktail = JSON.parse(localStorage.getItem('user'))[3]
                if (this.favCocktail == !null) {
                    this.favCocktail = 'Home-made Apple Wine'
                }
            }
        },
        methods: {
            logout() {
                this.$emit('logIn', false, "username?")
            },
            changePassword() {

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
    align-items: baseline;
}
#left-container{
    padding: 15px;
    margin-left: 20px;
}
#right-container {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
}
#logout-button {
    margin-right: 50px;
}
input {
    margin-right: 10px;
}
#favourite-cocktail {
    color: green;
}
.link {
    cursor: pointer;
    color: #0080ff;
}
#password-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
#left-container p {
    margin: 5px;
    width: fit-content;
}



</style>