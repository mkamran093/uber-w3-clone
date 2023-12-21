export const ridesSchema = {
    name: 'rides',
    type: 'document',
    title: 'Rides',
    fields:[
        {
            name: 'orderById',
            type: 'number',
            title: 'Order By ID'
        },
        {
            name: 'title',
            type: 'String',
            title: 'Title'
        }
        ,{
            name: 'priceMultiplier',
            type: 'number',
            title: 'Price Multiplier'
        },
        {
            name: 'icon',
            type: 'image',
            title: 'Icon'
        }
    ]
}