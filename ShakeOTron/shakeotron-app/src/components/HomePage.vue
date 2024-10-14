<template>
    <h1> Welcome! </h1>
    <h2>Here are our top pics</h2>
    <div>
        <h3>White russian</h3>
        <img src="../assets/vitryss.jpeg" alt="White russian">
        <h4>
            Old-fashioned glass <br>
            Pour vodka and coffee liqueur over ice cubes in an old-fashioned glass. Fill with light cream and serve <br>
            Vodka 2 oz <br>
            Coffee liqueur 1 oz <br>
            Light cream <br>
        </h4>
    </div>

    <div>
        <h3>Irma</h3>
        <img src="../assets/irma.jpeg" alt="Irma">
        <h4>
            High-ball glass <br>
            Pour Sour de kyper and vanilla flavoured vodka over ice cubes in an tall glass. Fill with sprite or 7up and serve <br>
            Sour De Kyper 2 oz <br>
            Vanilla vodka 2 oz <br>
            Sprite or 7up <br>
        </h4>
    </div>

    <div>
        <h3>Kossu cola</h3>
        <img src="../assets/kossuCola.jpeg" alt="Kossu Cola">
        <h4>
            High-ball glass <br>
            Koskenkorva 40% over ice cubes in an tall glass. Fill with Coca Cola and serve <br>
            Koskenkorva 40% 4 oz <br>
            Coca Cola <br>
        </h4>
    </div>

</template>

<script>
export default {
        methods: {
            speak(){
                const message = new SpeechSynthesisUtterance("Welcome to shake-o-tron")
                message.lang = "en-US";
                window.speechSynthesis.speak(message);
            }
        },
       mounted(){
        this.speak();
       }
};
</script>

<style scoped>
h2 {
    margin-bottom: 80px;
}
div {
    margin-bottom: 80px;
}
</style>