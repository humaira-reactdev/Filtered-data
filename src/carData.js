const cars =[
    {
        "product_id": 1,
        "car_name": "Toyota Camry",
        "car_price": "$24,970",
        "discount_price": "$22,470",
        "car_image_link": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/10926/1708690549497/front-left-side-47.jpg",
        "category": "Sedan"
      },
      {
        "product_id": 2,
        "car_name": "Honda Accord",
        "car_price": "$26,120",
        "discount_price": "$23,620",
        "car_image_link": "https://www.usnews.com/object/image/0000018c-40eb-df39-a7fd-6bff9fe10001/01-2024-honda-accord-hybrid-angular-front-jmv.JPG?update-time=1701896347582&size=responsive640",
        "category": "Sedan"
      },
      {
        "product_id": 3,
        "car_name": "Ford Mustang",
        "car_price": "$27,155",
        "discount_price": null,
        "car_image_link": "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.596xw:1.00xh;0.199xw,0&resize=768:*",
        "category": "Coupe"
      },
      {
        "product_id": 4,
        "car_name": "Chevrolet Camaro",
        "car_price": "$25,000",
        "discount_price": "$22,500",
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-dWYkZn0B9Pnztb0p36QqYOZtCmBscX32g&s",
        "category": "Coupe"
      },
      {
        "product_id": 5,
        "car_name": "BMW X5",
        "car_price": "$59,400",
        "discount_price": "$54,900",
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtM6GjGabcgt-WIbhXMuLK6Ic_1g2LTtDfQ&s",
        "category": "SUV"
      },
      {
        "product_id": 6,
        "car_name": "Audi Q5",
        "car_price": "$43,300",
        "discount_price": null,
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhm5i9G4rKt4Flch6rK6TehjlXRjgdljHyZQ&s",
        "category": "SUV"
      },
      {
        "product_id": 7,
        "car_name": "Mercedes-Benz GLE",
        "car_price": "$54,750",
        "discount_price": "$51,750",
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUyeiCsHRt_PyOPI0reJFp-_e7U47bvoKwQ&s",
        "category": "SUV"
      },
      {
        "product_id": 8,
        "car_name": "Tesla Model 3",
        "car_price": "$39,990",
        "discount_price": "$37,990",
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUE83r3dGczsZf17c8ruUQZUvT3XzqpHQcjg&s",
        "category": "Sedan"
      },
      {
        "product_id": 9,
        "car_name": "Honda CR-V",
        "car_price": "$25,350",
        "discount_price": "$23,350",
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMizdePlUgNHAkcRop096XQsQ8aUpH_3wiA&s",
        "category": "SUV"
      },
      {
        "product_id": 10,
        "car_name": "Ford Explorer",
        "car_price": "$32,675",
        "discount_price": null,
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfb44yBN7Rih2tsR2vPIcIq5WZdcfE6hJlEA&s",
        "category": "SUV"
      },
      {
        "product_id": 11,
        "car_name": "Chevrolet Tahoe",
        "car_price": "$49,600",
        "discount_price": "$46,600",
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fsG79Qo5YqA69dnHvz2L3W38006bU_pzng&s",
        "category": "SUV"
      },
      {
        "product_id": 12,
        "car_name": "Hyundai Sonata",
        "car_price": "$23,700",
        "discount_price": "$21,700",
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAf9UyPd8uLCr3WizHbUNLwdDN40tZRqBKJA&s",
        "category": "Sedan"
      },
      {
        "product_id": 13,
        "car_name": "Nissan Altima",
        "car_price": "$24,300",
        "discount_price": null,
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkGTd_pzDCMRExU_KA_8vu24FTGaxOaUaNgQ&s",
        "category": "Sedan"
      },
      {
        "product_id": 14,
        "car_name": "Mazda MX-5 Miata",
        "car_price": "$26,830",
        "discount_price": "$24,830",
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofch14tKF9PWx2apwFDKo9Yo8cATpbW1Mng&s",
        "category": "Convertible"
      },
      {
        "product_id": 15,
        "car_name": "Porsche 911",
        "car_price": "$99,200",
        "discount_price": "$94,200",
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKUG13fsZiTHKtWlHLP8rIjeJLaAnyF9Ykg&s",
        "category": "Convertible"
      },
      {
        "product_id": 16,
        "car_name": "Jeep Wrangler",
        "car_price": "$28,295",
        "discount_price": null,
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjXLGSWzjRr3qh32NLEgk3OpFFrYUmCjhfQ&s",
        "category": "SUV"
      },
      {
        "product_id": 17,
        "car_name": "Chevrolet Corvette",
        "car_price": "$59,995",
        "discount_price": "$56,995",
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDaQWn5-QRLEEHKDeW4W_jKNx1HbuhzyvPLQ&s",
        "category": "Convertible"
      },
      {
        "product_id": 18,
        "car_name": "Toyota Supra",
        "car_price": "$43,090",
        "discount_price": "$40,090",
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7Gg0RfepQa6vnd_VFqtf4QLj8NVI3DDFAQ&s",
        "category": "Coupe"
      },
      {
        "product_id": 19,
        "car_name": "Mazda CX-5",
        "car_price": "$25,370",
        "discount_price": "$23,370",
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIpIBzsbD3I7fRybdH1WhYreQo9Q-pPxi8g&s",
        "category": "SUV"
      },
      {
        "product_id": 20,
        "car_name": "Subaru Outback",
        "car_price": "$26,795",
        "discount_price": null,
        "car_image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9waDigpE-JSZu9uyidMaw0pwjbD9uicFNtg&s",
        "category": "SUV"
      }
    ]

    export default cars