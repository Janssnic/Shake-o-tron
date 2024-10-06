<template>
 <h1>{{ name }}</h1>
 <div>
<ul>
  <p>drinks</p>
</ul>
<ul>
  <p>profile</p>
</ul>
<ul>
  <p>archive</p>
</ul>
  
  
  

</div>

</template>

<script>

export default {
    name: 'navigation-menu',
    props: ['name'],
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: sticky;
  bottom: 0;
  overflow: hidden;
  background-color: #333;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 1%;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>