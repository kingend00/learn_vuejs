<template>
  <!-- <div id="app" class="col-sm-8"> -->
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




    <!-- <app-header :maxItems = "maxItems" :itemCount="items.length"></app-header>
    <app-new-item :items="items" @itemAdded ="addItem" ></app-new-item>
    <app-item-layout @deleteItem ="removeItems" :items="items"></app-item-layout>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert-info">
          Info: Click on a Item to delete It
        </div>
      </div>
    </div> -->

  <!-- <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="email" :value="userData.email" @input="userData.email = $event.target.value" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="password" v-model="userData.password" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Age</label>
      <input type="text" class="form-control" id="age" v-model="userData.age" placeholder="Age">
    </div>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="message" v-model="message" rows="3"></textarea>
    </div>
    <div class="form-check">
      <input type="checkbox"  v-model="sendMail" value="sendMail123" class="form-check-input" name = "send_mail" id="send_mail">
      <label class="form-check-label" for="send_mail">Send Mail</label>
    </div>
    <div class="form-check">
      <input type="checkbox"  v-model="sendMail" value="sendInfoMail" class="form-check-input" name = "send_infomail"  id="send_infomail">
      <label class="form-check-label" for="send_infomail">Send Info Mail</label>
    </div>
    <div class="form-check">
      <input type="checkbox" v-model="sendMail" value="CutMail" class="form-check-input" name = "cut_mail" id="cut_mail">
      <label class="form-check-label" for="cut_mail">Cut Mail</label>
    </div>
    <div class="form-check">
      <input type="radio" class="form-check-input" id="male" value="male" v-model="gender">
      <label class="form-check-label" for="exampleCheck1">Male</label>
    </div>
    <div class="form-check">
      <input type="radio" class="form-check-input" id="female" value="female" v-model="gender">
      <label class="form-check-label" for="exampleCheck1">Female</label>
    </div>
    <div class="form-group">
    <label for="exampleFormControlSelect1">Priority</label>
    <select class="form-control" id="priority" v-model="selected">
      <option v-for="(item,key) in priority" :key="key" :value="item">{{item}}</option>
    </select>
  </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Switched</label>
      <app-custom v-model="dataSwitch"></app-custom>
    </div>
    <button type="submit" @click.prevent="submited" class="btn btn-primary">Submit</button>
  </form>
  <div class="row" style="border:1px solid red;margin-top:4%" v-if="isSubmit">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>Your Data</h4>
        </div>
        <div class="panel-body">
          <p> Mail: {{ userData.email }} </p>
          <p> Password: {{ userData.password }} </p>
          <p> Age: {{ userData.age }}</p>
          <p style="white-space:pre"> Message:  {{ message }}</p>
          <p> <strong>Send Mail?</strong>: </p>
          <ul>
            <li v-for="(item,key) in sendMail" :key="key">{{ item }}</li>
          </ul>
          <p> Gender: {{ gender }} </p>
          <p> Priority: {{ selected }} </p>
          <p> Switched: {{dataSwitch}}</p>

        </div>
      </div>
    </div>
  </div> -->
  <!-- </div> -->

  <!-- Session 12 End 
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Default/ Built-in Directives</h1>
        <p v-html="'this paragraph to append'">hihi12313123</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom/ Built-in Directives</h1>
        <p v-html="'this paragraph to append'" v-local-custom:background.delayed="'red'">hihi12313123</p>
      </div>
    </div>
  </div>
  -->
    <!-- End Session 13
  <div class="container">
    <app-list></app-list>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1> Filtet product</h1>
        <input type="text" class="form-control mb-md-3" v-model="filterProduct">
        <div class="card">
          <div class="card-bod">
            <ul>
              <li v-for="(item,index) in filterProducts" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Animation</h1>
        <hr>
        <button class="btn btn-block btn-success" @click="show = !show">
          Show notification
        </button>
        <br>
        <br>
        <transition name="fade">
          <div class="alert alert-success" v-if="show">
          This si some thing about notification 
          </div>
        </transition>     

         <transition name="slide">
          <div class="alert alert-warning" v-if="show">
          This si some thing about notification 
          </div>
        </transition>    
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
import List from "./components/List.vue"
import { productMixin } from "./mixins/productMixin.js"
import custom from "./components/customControl.vue"

export default {

  // data(){
  //   return {
  //     cardTitle : 'White Cat',
  //     newitem:'',
  //     selectedComponent:"appCard",
  //     items:[
  //       'something will write',
  //       'hoang123',
  //       'you can say anything in here'
  //     ],
  //     maxItems:10
  //   }
  // },
  // methods:{
  //   addItem(event){
  //     if(this.items.length >= this.maxItems)
  //       return false;
  //     this.items.push(event);
  //     console.log('hoang123');
  //   },
  //   removeItems(index){
  //     this.items.splice(index,1);
  //   }
  // },
  // components:{
  //   appItemLayout: ItemLayout,
  //   appCard:Card,
  //   appAbout:About,
  //   appNewItem:NewItem,
  //   appContact:Contact,
  //   appHeader:Header
  // }

  // End Session 13
  // data(){
  //   return {
  //     userData:{
  //       email:'',
  //       password:'',
  //       age:0,
  //     },
  //     message:'please hold text something',
  //     sendMail:[],
  //     gender:'',
  //     //filterProduct:'',
  //     selected:'',
  //     dataSwitch:true,
  //     isSubmit:false,
  //     text:'Hello Every One'
  //   }
  // },
  // mixins:[productMixin],
  // // filters:{
  // //   toLowerCase(text){
  // //     return text.toLowerCase()
  // //   }
  // // },
  // // computed:{
  // //   filterProducts(){
  // //     return this.products.filter((element) => {
  // //       return element.match(this.filterProduct)
  // //     })
  // //   }
  // // },
  // components:{
  //   appCustom : custom,
  //   appList : List
  // },
  // methods:{
  //   submited(){
  //     this.isSubmit = true;
  //   }
  // },
  // directives:{
  //   'local-custom':{
  //       bind(el,binding,vnode){
  //       let delay = 0;
  //       if(binding.modifiers['delayed']){
  //         delay=3000;
  //       }
  //       setTimeout(() => {
  //         if(binding.arg == 'background')
  //         {
  //           el.style.backgroundColor=binding.value;
  //         }
  //         else
  //         {
  //           el.style.color=binding.value;
  //         }
  //       },delay)
  //       // el.style.backgroundColor=binding.value;

  //     }
  //   }
  // }
  data(){
    return {
      show:false
    }
  }

}
</script>

<style lang="" scoped>
  #app{
    margin-left: 30px;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    opacity: 1;
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  /* Slide transion effect */

  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    transition: opacity 1s;
    animation: slide-in 1s ease-out forwards;
  }

  .slide-leave{

  }
  .slide-leave-active {
    transition: opacity 1s;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }

  /* key frame */

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>

