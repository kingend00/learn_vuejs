<template>
  <div id="app">
    <!-- <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-outline-danger" @click="selectedComponent ='appCard'"> Card </button>
          <button class="btn btn-outline-danger" @click="selectedComponent ='appAbout'"> About </button>
          <button class="btn btn-outline-danger" @click="selectedComponent ='appContact'"> Contact</button>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12"> -->
          <!-- <div>
            <p>{{ selectedComponent }}</p>
          </div>
          <app-card cardWords="this is card words">
            <h2 slot="title">Black Cat so cute !</h2>
            <p slot="content">{{ cardTitle }} so nute</p>
          </app-card> -->
          <!-- <keep-alive> giữ cho vòng đời các component k bị destroyed 
            <component :is="selectedComponent"></component>
          </keep-alive>
        </div>
      </div>
    </div> -->
    <app-header :maxItems = "maxItems" :itemCount="items.length"></app-header>
    <app-new-item :items="items" @itemAdded ="addItem" ></app-new-item>
    <app-item-layout @deleteItem ="removeItems" :items="items"></app-item-layout>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert-info">
          Info: Click on a Item to delete It
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue"
import About from "./components/About.vue"
import Contact from "./components/Contact.vue"
import ItemLayout from "./components/ItemsLayout.vue"
import NewItem from "./components/NewItem.vue"
import Header from "./components/Header.vue"
export default {
  data(){
    return {
      cardTitle : 'White Cat',
      newitem:'',
      selectedComponent:"appCard",
      items:[
        'something will write',
        'hoang123',
        'you can say anything in here'
      ],
      maxItems:10
    }
  },
  methods:{
    addItem(event){
      if(this.items.length >= this.maxItems)
        return false;
      this.items.push(event);
      console.log('hoang123');
    },
    removeItems(index){
      this.items.splice(index,1);
    }
  },
  components:{
    appItemLayout: ItemLayout,
    appCard:Card,
    appAbout:About,
    appNewItem:NewItem,
    appContact:Contact,
    appHeader:Header
  }
}
</script>

