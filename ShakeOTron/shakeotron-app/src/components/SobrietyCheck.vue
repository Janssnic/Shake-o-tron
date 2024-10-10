<template>
    <div>
        <h2>Nykterhetstest</h2>
        <p v-if="!gamestarted">Klicka på knappen då den blir grön</p>
        <p v-if="!gamestarted && failed">Du e i fyllon</p>

        <button
        :disabled="!buttonEnabled"
        :style="{backgroundColor: buttonColor}"
        @click="checkReflex">Click me!</button>

        <p v-if="result">{{ result }}</p>
        <button v-if="result" @click="resetGame">Prova igen</button>
    </div>
</template>

<script>
export default {
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
                    this.result = "Du var för långsam"
                    this.failed = true;
                    this.buttonEnabled = false;
                }, 2000);
            }, waitTime);
        },
        checkReflex(){
            if(this.buttonEnabled){
                clearTimeout(this.timeout);
                this.result = "Du är nykter!";
                this.buttonEnabled = false;
            } else {
                this.result = "För tidigt, du är full!"
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