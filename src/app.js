function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.add("mystyle");
}

alert('HARAP REFRESH SAMPAI HARGA MUNCUL !!',
    'Yang baru di web ini : update semua harga, dan ada produk baru'
);

document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            // game
            // mobile legend
            { id: 1, name: '5 Diamond', img: '7.jpg', price: 1500 },
            { id: 2, name: '10 Diamond', img: '7.jpg', price: 3500 },
            { id: 3, name: '14 Diamond', img: '7.jpg', price: 5000 },
            { id: 4, name: '19 Diamond', img: '7.jpg', price: 7000 },
            { id: 5, name: '28 Diamond', img: '7.jpg', price: 9500 },
            { id: 6, name: '36 Diamond', img: '7.jpg', price: 11500 },
            { id: 7, name: '44 Diamond', img: '7.jpg', price: 13500 },
            { id: 8, name: '59 Diamond', img: '7.jpg', price: 17000 },
            { id: 9, name: '74 Diamond', img: '7.jpg', price: 21500 },
            { id: 10, name: '85 Diamond', img: '7.jpg', price: 24000 },
            { id: 11, name: '140 Diamond', img: '7.jpg', price: 39500 },
            { id: 12, name: '185 Diamond', img: '7.jpg', price: 51000 },
            { id: 13, name: '222 Diamond', img: '7.jpg', price: 60500 },
            { id: 14, name: '240 Diamond', img: '7.jpg', price: 64500 },
            { id: 15, name: '257 Diamond', img: '7.jpg', price: 69000 },
            { id: 16, name: '355 Diamond', img: '7.jpg', price: 94000 },
            { id: 17, name: '429 Diamond', img: '7.jpg', price: 114000 },
            { id: 18, name: '514 Diamond', img: '7.jpg', price: 135500 },
            { id: 19, name: '706 Diamond', img: '7.jpg', price: 182500 },
            { id: 20, name: '875 Diamond', img: '7.jpg', price: 223000 },
            { id: 21, name: '966 Diamond', img: '7.jpg', price: 246500 },
            { id: 22, name: '1050 Diamond', img: '7.jpg', price: 269000 },
            { id: 23, name: '1443 Diamond', img: '7.jpg', price: 367500 },
            { id: 24, name: '1704 Diamond', img: '7.jpg', price: 435000 },
            { id: 25, name: '2010 Diamond', img: '7.jpg', price: 482000 },
            { id: 26, name: '2195 Diamond', img: '7.jpg', price: 531500 },
            { id: 27, name: '2578 Diamond', img: '7.jpg', price: 626500 },
            { id: 28, name: '3453 Diamond', img: '7.jpg', price: 848500 },
            { id: 29, name: '3688 Diamond', img: '7.jpg', price: 910000 },
            { id: 30, name: '4830 Diamond', img: '7.jpg', price: 1152000 },
            { id: 31, name: '5398 Diamond', img: '7.jpg', price: 1299000 },
            { id: 32, name: 'Coupon Pass Mobile Legend', img: '7.jpg', price: 71500 },
            { id: 33, name: 'Twilight Pass', img: '7.jpg', price: 146500 },
            { id: 34, name: 'Starlight Membership', img: '7.jpg', price: 83500 },
            { id: 35, name: 'Starlight langsung (berupa diamond)', img: '7.jpg', price: 92000 },

            // Free Fire
            { id: 36, name: '5 Diamonds', img: 'freefire.jpg', price: 1000 },
            { id: 37, name: '20 Diamonds', img: 'freefire.jpg', price: 7345 },
            { id: 38, name: '50 Diamonds', img: 'freefire.jpg', price: 10752 },
            { id: 39, name: '70 Diamonds', img: 'freefire.jpg', price: 12634 },
            { id: 40, name: '100 Diamonds', img: 'freefire.jpg', price: 17504 },
            { id: 41, name: '140 Diamonds', img: 'freefire.jpg', price: 21269 },
            { id: 42, name: '210 Diamonds', img: 'freefire.jpg', price: 30664 },
            { id: 43, name: '280 Diamonds', img: 'freefire.jpg', price: 38538 },
            { id: 44, name: '355 Diamonds', img: 'freefire.jpg', price: 47173 },
            { id: 45, name: '500 Diamonds', img: 'freefire.jpg', price: 65279 },
            { id: 46, name: '720 Diamonds', img: 'freefire.jpg', price: 89476 },
            { id: 47, name: '1075 Diamonds', img: 'freefire.jpg', price: 132650 },
            { id: 48, name: '1440 Diamonds', img: 'freefire.jpg', price: 174953 },
            { id: 49, name: '2000 Diamonds', img: 'freefire.jpg', price: 244031 },
            { id: 50, name: '2160 Diamonds', img: 'freefire.jpg', price: 260429 },
            { id: 51, name: '3640 Diamonds', img: 'freefire.jpg', price: 441330 },

            // Membership & Lainnya
            { id: 52, name: 'Level Up Pass', img: 'freefire.jpg', price: 16342 },
            { id: 53, name: 'Member Mingguan', img: 'freefire.jpg', price: 29300 },
            { id: 54, name: 'Member Mingguan x2', img: 'freefire.jpg', price: 56600 },
            { id: 55, name: 'Member Mingguan x3', img: 'freefire.jpg', price: 83900 },
            { id: 56, name: 'Member Bulanan', img: 'freefire.jpg', price: 83900 },
            { id: 57, name: 'BP Card', img: 'freefire.jpg', price: 45424 },

            // Honor of Kings
            { id: 54, name: '16+1 Token', img: 'hok.jpg', price: 4246 },
            { id: 55, name: '88+8 Token', img: 'hok.jpg', price: 13615 },
            { id: 56, name: '240+17 Token', img: 'hok.jpg', price: 37148 },
            { id: 57, name: '400+32 Token', img: 'hok.jpg', price: 60580 },
            { id: 58, name: '568+45 Token', img: 'hok.jpg', price: 84012 },
            { id: 59, name: '800+95 Token', img: 'hok.jpg', price: 120643 },
            { id: 60, name: '1200+153 Token', img: 'hok.jpg', price: 187455 },
            { id: 61, name: '2400+324 Token', img: 'hok.jpg', price: 372969 },
            { id: 62, name: '4000+580 Token', img: 'hok.jpg', price: 646224 },
            { id: 63, name: '8000+1160 Token', img: 'hok.jpg', price: 1323808 },
            { id: 64, name: 'Weekly Card', img: 'hok.jpg', price: 15727 },
            { id: 65, name: 'Weekly Card Plus', img: 'hok.jpg', price: 42011 },

            // PUBG
            { id: 75, name: '60 UC', img: 'pubg.jpg', price: 13951 },
            { id: 76, name: '325 UC', img: 'pubg.jpg', price: 70262 },
            { id: 77, name: '660 UC', img: 'pubg.jpg', price: 140694 },
            { id: 78, name: '1800 UC', img: 'pubg.jpg', price: 352839 },
            { id: 79, name: '3850 UC', img: 'pubg.jpg', price: 705847 },
            { id: 80, name: '8100 UC', img: 'pubg.jpg', price: 1411861 },

            // valorant
            { id: 81, name: '475 VP', img: 'valorantkedua.jpg', price: 54156 },   // 52.156 + 2.000
            { id: 82, name: '1000 VP', img: 'valorantkedua.jpg', price: 106289 }, // 104.289 + 2.000
            { id: 83, name: '1475 VP', img: 'valorantkedua.jpg', price: 158521 }, // 156.521 + 2.000
            { id: 84, name: '2050 VP', img: 'valorantkedua.jpg', price: 210551 }, // 208.551 + 2.000
            { id: 85, name: '2525 VP', img: 'valorantkedua.jpg', price: 262852 }, // 260.852 + 2.000
            { id: 86, name: '3050 VP', img: 'valorantkedua.jpg', price: 315017 }, // 313.017 + 2.000
            { id: 87, name: '3650 VP', img: 'valorantkedua.jpg', price: 364153 }, // 362.153 + 2.000
            { id: 88, name: '4125 VP', img: 'valorantkedua.jpg', price: 416553 }, // 414.553 + 2.000
            { id: 89, name: '4650 VP', img: 'valorantkedua.jpg', price: 468718 }, // 466.718 + 2.000
            { id: 90, name: '5350 VP', img: 'valorantkedua.jpg', price: 522409 }, // 520.409 + 2.000
            { id: 91, name: '7400 VP', img: 'valorantkedua.jpg', price: 731408 },  // 729.408 + 2.000

            // E-Wallet
            // Dana
            { id: 66, name: 'Dana 5.000', img: 'dana.png', price: 7330 },
            { id: 67, name: 'Dana 10.000', img: 'dana.png', price: 12330 },
            { id: 68, name: 'Dana 15.000', img: 'dana.png', price: 19500 }, // asumsikan dari tren
            { id: 69, name: 'Dana 20.000', img: 'dana.png', price: 22335 },
            { id: 70, name: 'Dana 25.000', img: 'dana.png', price: 29500 }, // asumsi
            { id: 71, name: 'Dana 30.000', img: 'dana.png', price: 32350 },
            { id: 72, name: 'Dana 35.000', img: 'dana.png', price: 39500 }, // asumsi
            { id: 73, name: 'Dana 40.000', img: 'dana.png', price: 42350 },
            { id: 74, name: 'Dana 45.000', img: 'dana.png', price: 49500 }, // asumsi
            { id: 75, name: 'Dana 50.000', img: 'dana.png', price: 52350 },
            { id: 76, name: 'Dana 55.000', img: 'dana.png', price: 59500 }, // asumsi
            { id: 77, name: 'Dana 60.000', img: 'dana.png', price: 62550 },
            { id: 78, name: 'Dana 65.000', img: 'dana.png', price: 69500 }, // asumsi
            { id: 79, name: 'Dana 70.000', img: 'dana.png', price: 72350 },
            { id: 80, name: 'Dana 75.000', img: 'dana.png', price: 79500 }, // asumsi
            { id: 81, name: 'Dana 100.000', img: 'dana.png', price: 102550 },
            { id: 82, name: 'Dana 105.000', img: 'dana.png', price: 109500 },

            // Gopay
            { id: 83, name: 'Gopay 10.000', img: 'gopay.jpg', price: 12330 },
            { id: 84, name: 'Gopay 20.000', img: 'gopay.jpg', price: 22330 },
            { id: 85, name: 'Gopay 30.000', img: 'gopay.jpg', price: 32330 },
            { id: 86, name: 'Gopay 40.000', img: 'gopay.jpg', price: 42330 },
            { id: 87, name: 'Gopay 50.000', img: 'gopay.jpg', price: 52330 },
            { id: 88, name: 'Gopay 60.000', img: 'gopay.jpg', price: 62330 },
            { id: 89, name: 'Gopay 70.000', img: 'gopay.jpg', price: 72330 },
            { id: 90, name: 'Gopay 80.000', img: 'gopay.jpg', price: 82330 },
            { id: 91, name: 'Gopay 90.000', img: 'gopay.jpg', price: 92330 },
            { id: 92, name: 'Gopay 100.000', img: 'gopay.jpg', price: 102330 },

            //token PLN
            { id: 83, name: 'Token PLN 20.000', img: '1.png', price: 22747 },
            { id: 64, name: 'Token PLN 50.000', img: '1.png', price: 52783 },
            { id: 85, name: 'Token PLN 100.000', img: '1.png', price: 102783 },
            { id: 86, name: 'Token PLN 200.000', img: '1.png', price: 202783 },
            { id: 87, name: 'Token PLN 500.000', img: '1.png', price: 502805 },
            { id: 80, name: 'Token PLN 1.000.000', img: '1.png', price: 1000783 },
            // // Paket data
            // tri
            { id: 89, name: 'Tri Data Happy 3 GB / 30 Hari', img: 'download (5).jpg', price: 17384 },
            { id: 90, name: 'Tri Data Happy 7 GB / 30 Hari', img: 'download (5).jpg', price: 31775 },
            { id: 91, name: 'Tri Data Happy 11 GB / 30 Hari', img: 'download (5).jpg', price: 46975 },
            { id: 92, name: 'Tri Data Happy 14 GB / 30 Hari', img: 'download (5).jpg', price: 61175 },
            { id: 93, name: 'Tri Data Happy 18 GB / 30 Hari', img: 'download (5).jpg', price: 64720 },
            { id: 94, name: 'Tri Data Happy 30 GB / 30 Hari', img: 'download (5).jpg', price: 74920 },
            { id: 95, name: 'Tri Data Happy 42 GB / 30 Hari', img: 'download (5).jpg', price: 93045 },
            { id: 96, name: 'Tri Data Happy 55 GB / 30 Hari', img: 'download (5).jpg', price: 120495 },
            { id: 97, name: 'Tri Data Happy 100 GB / 30 Hari', img: 'download (5).jpg', price: 197920 },
            { id: 98, name: 'AlwaysOn 2.5 GB', img: 'download (5).jpg', price: 18025 },
            { id: 99, name: 'AlwaysOn 3.5 GB', img: 'download (5).jpg', price: 21445 },
            { id: 100, name: 'AlwaysOn 6 GB', img: 'download (5).jpg', price: 30275 },
            { id: 101, name: 'AlwaysOn 9 GB', img: 'download (5).jpg', price: 43995 },
            { id: 102, name: 'AlwaysOn 12 GB', img: 'download (5).jpg', price: 56725 },
            { id: 103, name: 'AlwaysOn 6GB + Unlimited 20 GB', img: 'download (5).jpg', price: 77325 },
            { id: 104, name: 'AlwaysOn 40 GB', img: 'download (5).jpg', price: 106225 }
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
