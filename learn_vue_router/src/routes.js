// Define routes to component
import Home from "./components/HelloWorld"

import User from "./components/user/User.vue"
import User01 from "./components/user/User1.vue"
import User02 from "./components/user/User2.vue"
import UserDetails from "./components/user/UserDetails.vue"
import UserPathmatch from "./components/user/UserPathmatch.vue"
import ChildUserDetail from "./components/user/ChilUserDetails.vue"

const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }
export const routes = [
    {
        path :'/',
        name:'homepage',
        component:Home
    },
    {
        path :'/user',
        name:'user',
        components:{
            default:User,
            user01: User01,
            user02: User02
        },
        // redirect:'/'
    },
    {
        path:'*',
        redirect:'/404'
    },
    {
        path :'/user/:id',
        name:'userDetails',
        component:UserDetails,
        props: (route) => ({ query: route.query.q }),
        children:[
            {
                path:"child",
                component:ChildUserDetail
            }
        ]
    },
    {
        path:'/user-*',
        name:'userPathmatch',
        component : UserPathmatch
    }
    
]