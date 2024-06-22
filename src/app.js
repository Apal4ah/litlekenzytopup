document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: '5 dm', img: '7.jpg', price: 2000 },
            { id: 2, name: '10 dm', img: '7.jpg', price: 4000 },
            { id: 3, name: '14 dm', img: '7.jpg', price: 5500 },
            { id: 4, name: '19 dm', img: '7.jpg', price: 7000 },
            { id: 5, name: '28 dm', img: '7.jpg', price: 9000 },
            { id: 6, name: '36 dm', img: '7.jpg', price: 11000 },
        ],
    }));
});