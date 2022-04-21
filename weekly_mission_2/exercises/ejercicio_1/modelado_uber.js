const profile = {
    name: "Jose Fujarte",
    reputation: 4.5,
    payments_methods: [
        {
            type: "Visa",
            card_number: "4321000000000000",
            expiration: new Date(6/15/2022)
        },
        {
            type: "Cash",
            card_number: "N/A",
            expiration: "N/A"
        },
        {
            type: "Uber Cash",
            card_number: "N/A",
            expiration: "N/A",
            amount: 0.00
        },
    ],
    travels: [travel, travel, travel]
}

const travel = {
    date: new Date(12/17/19),
    cost: 48.52,
    payment_method: "Cash",
    stars: 5.0,
    departure:"Calle LaunchX 19-1, Colonia 39600, San Pedro Tlaquepaque, Jalisco, México",
    destination: "Calle NodeJS 101, Centro 99999, Acámbaro, Guanajuato, México",
    driver: {
        name: "Jorge Rafael",
        start: 5.0
    }
}