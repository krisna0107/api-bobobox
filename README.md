# Dokumentasi API BOBOBOX
 Berikut ini adalah API untuk pencarian Room dan penggunaan Promo berupa voucher, promo ini terdapat 2 tipe yaitu persentase dan potongan rupiah<br/>

 List API : https://documenter.getpostman.com/view/7166693/UVXnHa16
 
 <br />
Terdapat 2 Fungsi utama yaitu pencarian Room dan penukaran promo
## Pencarian Room
[https://github.com/krisna0107/api-bobobox/blob/0f3c0f6e4c6e72444a132c18f359651f334c7dd0/controllers/room.controller.js#L7]getRoomAvailability Fungsi ini akan melakukan query pada table Room, RoomType dan Price dan akan menghasilkan sebuah JSON Room yang bersatatus avaible <br />
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
