<template>
  <div class="main">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <div class="inputfield_container">
      <label v-if="active" id="label" for="inputfield">Von</label>
      <input
        placeholder="Von"
        id="inputfield"
        type="text"
        @input="fetchApi"
        v-model="input"
      />
      <button v-if="active" v-on:click="deleteItem(), active = false" id="delete">
        <img class="img" src="./assets/clear.svg"/>
      </button>
      <button id="delete" v-else></button>
    </div>
    <ul id="item_container" v-if="active">
      <li id="item" v-for="item in items" :key="item.name">
        <a v-on:click="selectItem(item.name)"><img id="img" img src="./assets/train.svg" />{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script src="./App.js" />
<style src="./App.css" />
