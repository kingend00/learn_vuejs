// Define routes to component
import Home from "./components/HelloWorld"
import User from "./components/user/User.vue"
import UserDetails from "./components/user/UserDetails.vue"
export const routes = [
    {
        path :'/',
        name:'homepage',
        component:Home
    },
    {
        path :'/user',
        name:'user',
        component:User
    },
    {
        path :'/user/:id',
        name:'userDetails',
        component:UserDetails
    },
    
]