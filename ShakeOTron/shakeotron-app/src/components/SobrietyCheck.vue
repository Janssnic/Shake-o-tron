<template>
    <div>
        <h1>Sobriety-check</h1>
        <p v-if="gamestarted">Press the button when it turns green</p>
    

        <button
        :disabled="!buttonEnabled"
        :style="{backgroundColor: buttonColor}"
        @click="checkReflex">Click me!</button>

        <p v-if="result">{{ result }}</p>
        <button v-if="result" @click="resetGame">Try again!</button>
        <DancingRobot v-if="failed"></DancingRobot>
    </div>
</template>

<script>
import DancingRobot from './DancingRobot.vue';

export default {
    components: {
        DancingRobot
    },
    data() {
        return {
            gamestarted: false,
            failed: false,
            buttonColor: "red",
            result: "",
            buttonEnabled: false,
        };
    },
    methods: {
        startGame() {
            this.gamestarted = true;
            this.result = "";
            this.failed = false;

            const waitTime = Math.random() *3000 + 2000;

            setTimeout(() => {
                this.buttonColor = "green";
                this.buttonEnabled = true;

                this.timeout = setTimeout(() => {
                    this.result = "Too slow, drink a glass of water or dance with me!"
                    this.failed = true;
                    this.buttonEnabled = false;
                }, 1000);
            }, waitTime);
        },
        checkReflex(){
            if(this.buttonEnabled){
                clearTimeout(this.timeout);
                this.result = "You are sober!";
                this.buttonEnabled = false;
            } else {
                this.result = "Too early!"
                this.failed = true;
            }

        },
        resetGame(){
            this.buttonColor = "red";
            this.buttonEnabled = false;
            this.result = "";
            this.startGame();
        },
    },
    mounted(){
        this.startGame();
    }
}
</script>

<style scoped> 
button{
    margin: 5px;
}
</style>