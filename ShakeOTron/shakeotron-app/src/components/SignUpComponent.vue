<template>
  
    <div id="login-container">
      <form @submit.prevent="login" id="login-form">
        <input type="text" id="username" placeholder="Username"/>
        <input type="password" id="password" placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>