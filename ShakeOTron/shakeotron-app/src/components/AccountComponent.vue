<template>
    <div id="textA">
        <h1>Account / Settings</h1>
    </div>
    <div id="account-container">
        <div id="left-container">
            <h2 @click="editProfile">Profile{{profile}}</h2>
            <p>Username: {{ username }}</p>
            <div v-if="editingProfile">
            <input type="text" placeholder="change username" v-model="newUsername">
            <button @click="changeUsername">save</button>
            </div>
            
            <p>Email: {{ email }}</p>
            <div v-if="editingProfile">
            <input type="email" placeholder="change email" v-model="newEmail">
            <button @click="changeEmail">save</button>
            </div>
            
            <p>Your favourite cocktail is: </p>
            <p id="favourite-cocktail">{{ favCocktail }}</p>
            <div v-if="editingProfile">
            <input type="text" placeholder="new favourite?" v-model="newFavCocktail">
            <button @click="changeFavCocktail">save</button>
            </div>
            <p class="link" @click="passwordChange = !passwordChange" v-if="!succes && editingProfile ">change password?</p>
            <p class="succes" v-if="succes">Passoword changed successfully!</p>
            <div v-if="passwordChange" id="password-container">
                <p>old password</p>
                <input type="password" placeholder="old password" v-model="oldPassword">
                <p>new password</p>
                <input type="password" placeholder="new password" v-model="newPassword">
                <p>confirm new password</p>
                <input type="password" placeholder="confirm new password" v-model="confirmPassword">
                <button @click="changePassword">save</button>
                <p v-if="error" class="error">there was an error</p>
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
                passwordChange: false,
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
                error: false,
                succes: false,
                newUsername: '',
                newEmail: '',
                newFavCocktail: '',
                profile: '- click to edit',
                editingProfile: false,



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
            editProfile() {
                if (this.editingProfile == false) {
                    this.editingProfile = true;
                    this.profile = '- click to stop editing';
                }
                else {
                    this.editingProfile = false;
                    this.profile = '- click to edit'
                }
            },
            changePassword() {
                if (this.oldPassword == this.password && this.newPassword == this.confirmPassword) {
                    this.password = this.newPassword
                    let user = [this.username, this.email, this.password, this.favCocktail]
                    let userData = JSON.stringify(user)
                    localStorage.setItem('user', userData)
                    this.passwordChange = !this.passwordChange
                    this.oldPassword = ''
                    this.newPassword = ''
                    this.confirmPassword = ''
                    this.succes = true
                    setTimeout(() => {
                        this.succes = false
                        }, 5000)
                    }
                
                else {
                    this.displayError()
                }
            },
            changeUsername() {
                if (this.newUsername.trim() !== '' ) {
                    this.username = this.newUsername
                    let user = [this.username, this.email, this.password, this.favCocktail]
                    let userData = JSON.stringify(user)
                    localStorage.setItem('user', userData)
                    }
            },
            changeEmail() {
                if(this.newEmail.includes("@")) {
                    this.email = this.newEmail
                    let user = [this.username, this.email, this.password, this.favCocktail]
                    let userData = JSON.stringify(user)
                    localStorage.setItem('user', userData)
                }
            },
            changeFavCocktail() {
                if(this.newFavCocktail.trim() !== '') {
                    this.favCocktail = this.newFavCocktail
                    let user = [this.username, this.email, this.password, this.favCocktail]
                    let userData = JSON.stringify(user)
                    localStorage.setItem('user', userData)
                }
            },  
            displayError() {
                this.error = true
                setTimeout(() => {
                    this.error = false
                }, 5000)
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
.succes {
    color: green;
}
h2:hover {
    color: #0080ff;
    cursor: pointer;
}



</style>