import { reactive } from 'vue';

const store = reactive({
    apiCall: '',
    searchQuery: '',
    searchedQuery: '',
    noResults: false,
    navbarLinks: [
        {
            text: 'Home',
            link: '#'
        },
        {
            text: 'Series',
            link: '#'
        },
        {
            text: 'Films',
            link: '#'
        },
        {
            text: 'New & Popular',
            link: '#'
        },
        {
            text: 'My List',
            link: '#'
        },
        {
            text: 'Browse By Languages',
            link: '#'
        }
    ]
})

export { store }