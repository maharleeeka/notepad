<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <h2>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </h2>
  <router-view></router-view>
</template>