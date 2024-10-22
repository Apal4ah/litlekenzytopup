function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.add("mystyle");
}

alert('HARAP REFRESH SAMPAI HARGA MUNCUL !!');

document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            // game
            // mobile legend
            { id: 1, name: '5 Diamond', img: '7.jpg', price: 2000 },
            { id: 2, name: '10 Diamond', img: '7.jpg', price: 4500 },
            { id: 3, name: '14 Diamond', img: '7.jpg', price: 5500 },
            { id: 4, name: '19 Diamond', img: '7.jpg', price: 7000 },
            { id: 5, name: '28 Diamond', img: '7.jpg', price: 9000 },
            { id: 6, name: '36 Diamond', img: '7.jpg', price: 11000 },
            { id: 7, name: '44 Diamond', img: '7.jpg', price: 13000 },
            { id: 8, name: '59 Diamond', img: '7.jpg', price: 16500 },
            { id: 9, name: '74 Diamond', img: '7.jpg', price: 20500 },
            { id: 10, name: '85 Diamond', img: '7.jpg', price: 23000 },
            { id: 11, name: '140 Diamond', img: '7.jpg', price: 37000 },
            { id: 12, name: '185 Diamond', img: '7.jpg', price: 48500 },
            { id: 13, name: '222 Diamond', img: '7.jpg', price: 58000 },
            { id: 14, name: '240 Diamond', img: '7.jpg', price: 62000 },
            { id: 15, name: '258 Diamond', img: '7.jpg', price: 67000 },
            { id: 16, name: '355 Diamond', img: '7.jpg', price: 90000 },
            { id: 17, name: '429 Diamond', img: '7.jpg', price: 110000 },
            { id: 18, name: '514 Diamond', img: '7.jpg', price: 130000 },
            { id: 19, name: '706 Diamond', img: '7.jpg', price: 180000 },
            { id: 20, name: '875 Diamond', img: '7.jpg', price: 213500 },
            { id: 21, name: '966 Diamond', img: '7.jpg', price: 236500 },
            { id: 22, name: '1050 Diamond', img: '7.jpg', price: 258000 },
            { id: 23, name: '1443 Diamond', img: '7.jpg', price: 351000 },
            { id: 24, name: '1704 Diamond', img: '7.jpg', price: 415000 },
            { id: 25, name: '2010 Diamond', img: '7.jpg', price: 462000 },
            { id: 26, name: '2195 Diamond', img: '7.jpg', price: 510000 },
            { id: 27, name: '2625 Diamond', img: '7.jpg', price: 615000 },
            { id: 28, name: '3453 Diamond', img: '7.jpg', price: 815000 },
            { id: 29, name: '3688 Diamond', img: '7.jpg', price: 870000 },
            { id: 30, name: '4020 Diamond', img: '7.jpg', price: 915000 },
            { id: 31, name: '4588 Diamond', img: '7.jpg', price: 1080000 },
            { id: 32, name: 'Coupon Pass Mobile Legend', img: '7.jpg', price: 71000 },
            { id: 33, name: 'Twilight Pass', img: '7.jpg', price: 140000 },
            { id: 34, name: 'Starlight via gift (berteman 7 hari)', img: '7.jpg', price: 45000 },
            { id: 35, name: 'Starlight langsung (berupa diamond)', img: '7.jpg', price: 90000 },

            // freefire
            { id: 36, name: '5 Diamond', img: 'freefire.jpg', price: 1500 },
            { id: 37, name: '20 Diamond', img: 'freefire.jpg', price: 4000 },
            { id: 38, name: '50 Diamond', img: 'freefire.jpg', price: 8000 },
            { id: 39, name: '70 Diamond', img: 'freefire.jpg', price: 11000 },
            { id: 40, name: '100 Diamond', img: 'freefire.jpg', price: 15000 },
            { id: 41, name: '140 Diamond', img: 'freefire.jpg', price: 20000 },
            { id: 42, name: '210 Diamond', img: 'freefire.jpg', price: 29000 },
            { id: 43, name: '355 Diamond', img: 'freefire.jpg', price: 47000 },
            { id: 44, name: '500 Diamond', img: 'freefire.jpg', price: 66000 },
            { id: 45, name: '720 Diamond', img: 'freefire.jpg', price: 93000 },
            { id: 46, name: '1075 Diamond', img: 'freefire.jpg', price: 140000 },
            { id: 47, name: '1440 Diamond', img: 'freefire.jpg', price: 185000 },
            { id: 48, name: '2000 Diamond', img: 'freefire.jpg', price: 255000 },
            { id: 49, name: '4000 Diamond', img: 'freefire.jpg', price: 515000 },
            { id: 50, name: 'Level Up Pass', img: 'freefire.jpg', price: 16500 },
            { id: 51, name: 'Member Mingguan', img: 'freefire.jpg', price: 29500 },
            { id: 52, name: 'Member Bulanan', img: 'freefire.jpg', price: 85000 },
            { id: 53, name: 'Bp Card', img: 'freefire.jpg', price: 44000 },

            //honor of king
            { id: 54, name: '16+1 Token', img: 'hok.jpg', price: 4000 },
            { id: 55, name: '80+8 Token', img: 'hok.jpg', price: 13000 },
            { id: 56, name: '240+17 Token', img: 'hok.jpg', price: 41000 },
            { id: 57, name: '400+32 Token', img: 'hok.jpg', price: 68000 },
            { id: 58, name: '560+45 Token', img: 'hok.jpg', price: 92000 },
            { id: 59, name: '800+95 Token', img: 'hok.jpg', price: 115500 },
            { id: 60, name: '1200+153 Token', img: 'hok.jpg', price: 185000 },
            { id: 61, name: '2400+324 Token', img: 'hok.jpg', price: 410000 },
            { id: 62, name: '4000+580 Token', img: 'hok.jpg', price: 670000 },
            { id: 63, name: '8000+1160 Token', img: 'hok.jpg', price: 1140000 },
            { id: 64, name: 'Weekly card', img: 'hok.jpg', price: 13000 },
            { id: 65, name: 'Weekly card plus', img: 'hok.jpg', price: 39000 },

            // ewallet
            // dana
            { id: 66, name: 'Dana 5.000', img: 'dana.png', price: 7000 },
            { id: 67, name: 'Dana 10.000', img: 'dana.png', price: 12000 },
            { id: 68, name: 'Dana 15.000', img: 'dana.png', price: 17500 },
            { id: 69, name: 'Dana 20.000', img: 'dana.png', price: 22000 },
            { id: 70, name: 'Dana 25.000', img: 'dana.png', price: 27500 },
            { id: 71, name: 'Dana 30.000', img: 'dana.png', price: 32000 },
            { id: 72, name: 'Dana 35.000', img: 'dana.png', price: 37500 },
            { id: 73, name: 'Dana 40.000', img: 'dana.png', price: 42000 },
            { id: 74, name: 'Dana 45.000', img: 'dana.png', price: 47500 },
            { id: 75, name: 'Dana 50.000', img: 'dana.png', price: 52000 },
            { id: 76, name: 'Dana 55.000', img: 'dana.png', price: 57500  },
            { id: 77, name: 'Dana 60.000', img: 'dana.png', price: 62000 },
            { id: 78, name: 'Dana 65.000', img: 'dana.png', price: 67500  },
            { id: 79, name: 'Dana 70.000', img: 'dana.png', price: 72000 },
            { id: 80, name: 'Dana 75.000', img: 'dana.png', price: 77500  },
            { id: 81, name: 'Dana 100.000', img: 'dana.png', price: 102000 },
            { id: 82, name: 'Dana 105.000', img: 'dana.png', price: 107500 },

            // gopay
            { id: 82, name: 'Gopay 10.000', img: 'gopay.jpg', price: 12000 },
            { id: 82, name: 'Gopay 20.000', img: 'gopay.jpg', price: 22000 },
            { id: 82, name: 'Gopay 30.000', img: 'gopay.jpg', price: 32000 },
            { id: 82, name: 'Gopay 40.000', img: 'gopay.jpg', price: 42000 },
            { id: 82, name: 'Gopay 50.000', img: 'gopay.jpg', price: 52000 },
            { id: 82, name: 'Gopay 60.000', img: 'gopay.jpg', price: 62000 },
            { id: 82, name: 'Gopay 70.000', img: 'gopay.jpg', price: 72000 },
            { id: 82, name: 'Gopay 80.000', img: 'gopay.jpg', price: 82000 },
            { id: 82, name: 'Gopay 90.000', img: 'gopay.jpg', price: 92000 },
            { id: 82, name: 'Gopay 100.000', img: 'gopay.jpg', price: 102000 },
            
            //token PLN
            { id: 83, name: 'Token PLN 20.000', img: '1.png', price: 22000 },
            { id: 84, name: 'Token PLN 50.000', img: '1.png', price: 52000 },
            { id: 85, name: 'Token PLN 100.000', img: '1.png', price: 102000 },
            { id: 86, name: 'Token PLN 200.000', img: '1.png', price: 205000 },
            { id: 87, name: 'Token PLN 500.000', img: '1.png', price: 510000 },
            { id: 88, name: 'Token PLN 1.000.000', img: '1.png', price: 1200000 },

            // // Paket data
            // tri
            { id: 89, name: 'Tri Data Happy 3GB/30 Hari', img: 'download (5).jpg', price: 17000 },
            { id: 90, name: 'Tri Data Happy 7GB/30 Hari', img: 'download (5).jpg', price: 32000 },
            { id: 91, name: 'Tri Data Happy 11GB/30 Hari', img: 'download (5).jpg', price: 47000 },
            { id: 92, name: 'Tri Data Happy 18GB/30 Hari', img: 'download (5).jpg', price: 65000 },
            { id: 93, name: 'Tri Data Happy 30GB/30 Hari', img: 'download (5).jpg', price: 75000 },
            { id: 94, name: 'Tri Data Happy 30GB/30 Hari', img: 'download (5).jpg', price: 75000 },
            { id: 95, name: 'Tri Data Happy 42GB/30 Hari', img: 'download (5).jpg', price: 93000 },
            { id: 96, name: 'Tri Data Happy 55GB/30 Hari', img: 'download (5).jpg', price: 120000 },
            { id: 97, name: 'Always On 2.5 GB', img: 'download (5).jpg', price: 20000 },
            { id: 98, name: 'Always On 3.5 GB', img: 'download (5).jpg', price: 23000 },
            { id: 99, name: 'Always On 6 GB', img: 'download (5).jpg', price: 32000 },
            { id: 100, name: 'Always On 9 GB', img: 'download (5).jpg', price: 46000 },
            { id: 101, name: 'Always On 12 GB', img: 'download (5).jpg', price: 58500 },
            { id: 102, name: 'Always On 6GB + Unlimited 20GB', img: 'download (5).jpg', price: 79500 },
            { id: 103, name: 'Always On 40GB', img: 'download (5).jpg', price: 108000 }

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
