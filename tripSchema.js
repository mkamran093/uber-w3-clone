export const tripSchema = {
    name: 'trips',
    type: 'document',
    title: 'Trips',
    fields: [
        {
            name: 'dropOff',
            type: 'string',
            title: 'Drop Off'
        },
        {
            name: 'pickUp',
            type: 'string',
            title: 'Pick Up'
        },
        {
            name: 'rideCategory',
            type: 'string',
            title: 'Trip Type'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Trip Price'
        },
        {
            name: 'rideTimeStamp',
            type: 'datetime',
            title: 'Trip Time'
        },
        {
            name: 'passenger',
            type: 'reference',
            title: 'Passenger'
        }
    ]
}