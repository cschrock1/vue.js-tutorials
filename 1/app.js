const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', isFav: false},
                { title: 'the final empire', author: 'brandon sanderson', isFav: true},
            ]
        }
    },
    methods: {
        toggleshowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleisFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }    
})

app.mount('#app')