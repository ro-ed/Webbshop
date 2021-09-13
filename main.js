




























var app = new Vue(
    {

    el: '#app',
    data: {
        typeOfPage: ""
    },
    methods: {
        showStart: function() {
            this.typeOfPage = "start"
        },
        showProduct: function() {
            this.typeOfPage = "product"
        },
        showCart: function() {
            this.typeOfPage = "cart"
        }
    }
        
})