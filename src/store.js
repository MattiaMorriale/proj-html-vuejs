import { reactive } from 'vue';

export const store = reactive ({

services: [
    {
        img: '../../public/avadabarbers-trimcut-icon-before.png',
        name: 'Trim & Cut',
        description: 'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.',
    },
    {
        img: '../../public/avadabarbers-washndry-icon.png',
        name: 'Wash & Dry',
        description: 'Take a scat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.',
    },
    {
        img: '../../public/avadabarbers-beardtrim-icon.png',
        name: 'Beard Tidy',
        description: 'Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers.',
    },
],

products: [
    {
        img: '../../public/brush_dark.png',
        name: 'Brush',
        price: '$15.00',
    },
    {
        img: '../../public/scissors.png',
        name: 'Scissors',
        price: '$85.00',
    },
    {
        img: '../../public/hot_oil_dark.png',
        name: 'Hot Oil',
        price: '$15.00',
    },
    {
        img: '../../public/straight_razor_dark.png',
        name: 'Straight Razor',
        price: '$30.00',
    }
],

reviews: [
    {
        img: '../../public/avadabarbers-trimcut-gallery6.jpg',
        name: 'John Doe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit nostrum amet laborum itaque voluptate excepturi culpa soluta aut.',
    },
    {
        img: '../../public/avadabarbers-trimcut-gallery7.jpg',
        name: 'Pete Jones',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit nostrum amet laborum itaque voluptate excepturi culpa soluta aut.',
    },
    {
        img: '../../public/avadabarbers-trimcut-gallery3.jpg',
        name: 'Mark Wilson',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit nostrum amet laborum itaque voluptate excepturi culpa soluta aut.',
    },
],

blog: [
    {
        img: '../../public/avadabarbers-second-blog-700x441.jpg',
        name: 'Avada Barbers Now Open',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, facilis.',
    },
    {
        img: '../../public/avadabarbers-choosing-blog-700x441.jpg',
        name: 'Choosing The Right Barber',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, facilis.',
    },
    {
        img: '../../public/avadabarbers-ourservice-blog-700x441.jpg',
        name: 'Quick Service Guide',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, facilis.',
    },
],

socialLinks: [
    {
        icon:`fa-brands fa-facebook-f`,
    },
    {
        icon:`fa-brands fa-twitter`,
    },
    {
        icon:`fa-brands fa-youtube`,
    },
    {
        icon:`fa-brands fa-instagram`,
    },
]
    

});