new Vue({
    el: "#app",

    data: {
        products: [
            {id:1, title:"Clementines", short_text:"Sweet citrus", image:'Clementines.jpg'},
            {id:2, title:"Minneola", short_text:"Juicy Tangelo", image:'minneola.jpg'}
        ],
        product: [],
        cart: [],
        contactFields:{
            name: "",
            email: "",
            companyName: "",
            position: "",
            city: "",
            country: "",
            telephone: "",
            youAre: "",
            otherSpecify: "",
            interested: "",
            capcha: ""
        },
        formVisible: true,
        formSubmitted: false
    },

    mounted() {
        this.getCart();
    },

    methods: {
        getCart() {
            let saved = localStorage.getItem('cart');
            if (saved) {
                this.cart = saved.split(',');
                this.product = this.products.filter(p => this.cart.includes(String(p.id)));
            }
        },

        removeFromCart(id) {
            this.cart = this.cart.filter(item => item != id);
            localStorage.setItem('cart', this.cart.join(','));
            this.getCart();
        },

        makeOrder() {
            this.formVisible = false;
            this.formSubmitted = true;
            localStorage.removeItem('cart');
            this.cart = [];
            this.product = [];
        }
    }
});
