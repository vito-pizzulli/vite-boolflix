import { reactive } from 'vue';

const store = reactive({
    apiCall: '',
    searchQuery: '',
    searchedQuery: '',
    noResults: false,
    searchComplete: false,
    adultContent: false,
    mediaPreviewVisible: false,
    navbarLinks: [
        {
            text: 'Home',
            link: '#'
        },
        {
            text: 'Serie TV',
            link: '#'
        },
        {
            text: 'Film',
            link: '#'
        },
        {
            text: 'Nuovi e popolari',
            link: '#'
        },
        {
            text: 'La mia lista',
            link: '#'
        },
        {
            text: 'Sfoglia per lingua',
            link: '#'
        }
    ]
})

export { store }