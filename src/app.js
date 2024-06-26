document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: '5 dm', img: '7.jpg', price: 2000 },
            { id: 2, name: '10 dm', img: '7.jpg', price: 4000 },
            { id: 3, name: '14 dm', img: '7.jpg', price: 5500 },
            { id: 4, name: '19 dm', img: '7.jpg', price: 7000 },
            { id: 5, name: '28 dm', img: '7.jpg', price: 9000 },
            { id: 6, name: '36 dm', img: '7.jpg', price: 11000 },
            { id: 7, name: 'Tri Data Happy 3GB/30 Hari', img: 'download (5).jpg', price: 17000},
            { id: 8, name: 'Tri Data Happy 7GB/30 Hari', img: 'download (5).jpg', price: 32000},
            { id: 9, name: 'Tri Data Happy 11GB/30 Hari', img: 'download (5).jpg', price: 47000},
            { id: 10, name: 'Tri Data Happy 18GB/30 Hari', img: 'download (5).jpg', price: 65000},
            { id: 11, name: 'Tri Data Happy 30GB/30 Hari', img: 'download (5).jpg', price: 75000},
            { id: 12, name: 'Tri Data Happy 30GB/30 Hari', img: 'download (5).jpg', price: 75000},
            { id: 13, name: 'Tri Data Happy 42GB/30 Hari', img: 'download (5).jpg', price: 93000},
            { id: 14, name: 'Tri Data Happy 55GB/30 Hari', img: 'download (5).jpg', price: 120000},
            { id: 15, name: 'Always On 2.5 GB', img: 'download (5).jpg', price: 20000},
            { id: 16, name: 'Always On 3.5 GB', img: 'download (5).jpg', price: 23000},
            { id: 17, name: 'Always On 6 GB', img: 'download (5).jpg', price: 32000},
            { id: 18, name: 'Always On 9 GB', img: 'download (5).jpg', price: 46000},
            { id: 19, name: 'Always On 12 GB', img: 'download (5).jpg', price: 58500},
            { id: 20, name: 'Always On 6GB + Unlimited 20GB', img: 'download (5).jpg', price: 79500},
            { id: 20, name: 'Always On 40GB', img: 'download (5).jpg', price: 108000}
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // cek apakah item sudah ada di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // kalau belum ada/cart masih kosong
            if (!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            } else {
                // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart  
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        // jika brang sudah ada, tambah jumlah dan quantity dan totalnya  
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id) {
            // ambil item yang mau di remove berdasarkan id 
            const cartItem = this.items.find((item) => item.id === id);

            // jika item lebih dari 1
            if (cartItem.quantity > 1) {

                // telusuri 1 1
                this.items = this.items.map((item) => {
                    // jika bukan barang yang diklik
                    if (item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1) {
                // jika barang sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        },
    });
});

// form validation
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');

form.addEventListener('keyup', function () {
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].value.length !== 0) {
            checkoutButton.classList.remove('disabled');
            checkoutButton.classList.add('disabled');
        } else {
            return false;
        }
    }
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
});

// kirim data ketika tombol checkout diklik
checkoutButton.addEventListener('click', async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    const message = formatMessage(objData);
    window.open('http://wa.me/6282395928309?text=' + encodeURIComponent(message));

    // minta transaksi token menggunakan ajax/fetch
    try {
        const response = await fetch('php/placeOrder.php', {
            method: 'POST',
            body: data,
        });
        const token = await response.text();
        // console.log(token);
        window.snap.pay(token);
    } catch (err) {
        console.log(err.message);
    }

});

// format pesan di whatsapp
const formatMessage = (obj) => {
    return `Data Customer
    Nama: ${obj.name}
    Email: ${obj.email}
    No HP: ${obj.phone}
    Data Pesanan
    ${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`)}
    TOTAL: ${rupiah(obj.total)}
    Terima Kasih.`;
};


// konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
};