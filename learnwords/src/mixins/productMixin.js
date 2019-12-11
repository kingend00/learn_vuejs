export const productMixin =  {
    data(){
    return {
      products:['iphone','samsung','bphone','nokia','noway','huwei','123'],
      filterProduct:'',
    }
  },
  filters:{
    toLowerCase(text){
      return text.toLowerCase()
    }
  },
    computed:{
    filterProducts(){
      return this.products.filter((element) => {
        return element.match(this.filterProduct)
      })
    }
  },
}