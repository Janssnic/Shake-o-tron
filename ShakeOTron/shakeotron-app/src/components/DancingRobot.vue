<template>
    <div>
        <button @click="startDance">Dansa med mig!</button>
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