<template>
    <button @click="startDance">Dance with me!</button>
    <div>
        
        <img v-if="dance" src="../assets/dance.gif" alt="Dancing GIF">
    </div>
</template>

<script>
export default {
    data(){
        return{
            dance: false
        };
    },
    methods:{
        startDance(){
            this.dance = true;
            setTimeout(() => {
                this.dance = false;
            }, 3000); //dansar i 3 sekunder
        }
    }
}
</script>