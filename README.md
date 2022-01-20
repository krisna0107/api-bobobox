# Dokumentasi API BOBOBOX
 Berikut ini adalah API untuk pencarian Room dan penggunaan Promo berupa voucher, promo ini terdapat 2 tipe yaitu persentase dan potongan rupiah<br/>

 List API : https://documenter.getpostman.com/view/7166693/UVXnHa16
 
 <br />
Terdapat 2 Fungsi utama yaitu pencarian Room dan penukaran promo <br />
## Pencarian Room
[getRoomAvailability](https://github.com/krisna0107/api-bobobox/blob/0f3c0f6e4c6e72444a132c18f359651f334c7dd0/controllers/room.controller.js#L7) Fungsi ini akan melakukan query pada table Room, RoomType dan Price dan akan menghasilkan sebuah JSON Room yang bersatatus avaible <br />

```json
{
    "room_qty": "1",
    "room_type_id": "1",
    "checkin_date": "2022-01-19",
    "checkout_date": "2022-01-20",
    "total_price": 250000,
    "available_room": [
        {
            "room_id": 1,
            "room_number": "301",
            "price": [
                {
                    "date": "2022-01-19",
                    "price": 250000
                },
                {
                    "date": "2022-01-20",
                    "price": 250000
                }
            ]
        },
        {
            "room_id": 12,
            "room_number": "302",
            "price": [
                {
                    "date": "2022-01-19",
                    "price": 250000
                },
                {
                    "date": "2022-01-20",
                    "price": 250000
                }
            ]
        },
    ]
}
```
<br />

## Reservation 
[createReservation](https://github.com/krisna0107/api-bobobox/blob/0f3c0f6e4c6e72444a132c18f359651f334c7dd0/controllers/reservation.controller.js#L29) Fungsi ini akan menambahkan data reservasi user ke table Reservation dengan status pending <br />
[addPromoReservation](https://github.com/krisna0107/api-bobobox/blob/0f3c0f6e4c6e72444a132c18f359651f334c7dd0/controllers/reservation.controller.js#L39) Fungsi ini akan mengkalkulasi total price jika user memasukan kode promo yang tersedia dan berlaku <br />

## Promo
[getPromoList](https://github.com/krisna0107/api-bobobox/blob/0f3c0f6e4c6e72444a132c18f359651f334c7dd0/controllers/promo.controller.js#L6) Fungsi ini akan melakukan query promo yang tersedia dan menghasilak JSON pada table Promo
```json
{
    "data": [
        {
            "id": 1,
            "title": "Januari Staycation",
            "description": "Discount 20%",
            "voucher": "JANSTAY",
            "date_start": "2022-01-18T09:17:17.000Z",
            "date_end": "2022-01-21T15:17:18.000Z",
            "limit_day": 10,
            "quota": 20,
            "room_type_id": 1,
            "type": "percentage",
            "reward": 20,
            "minimum_room": 1,
            "minimum_night": null
        },
        {
            "id": 2,
            "title": "Januari Staycation 15K",
            "description": "Potongan 15K",
            "voucher": "JANSTAY15K",
            "date_start": "2022-01-18T09:17:17.000Z",
            "date_end": "2022-01-21T15:17:18.000Z",
            "limit_day": 10,
            "quota": 20,
            "room_type_id": 1,
            "type": "currency",
            "reward": 15000,
            "minimum_room": 1,
            "minimum_night": null
        }
    ],
    "totalPages": 1
}
```
