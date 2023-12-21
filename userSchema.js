export const userSchema = {
    name: 'users',
    type: 'document',
    title: 'Users',
    fields: [
        {
            name: 'name',
            type: 'String',
            title: 'Name'
        },
        {
            name: 'walletAddress',
            type: 'String',
            title: 'Wallet Address'
        },
        {
            name: 'profileImage',
            type: 'image',
            title: 'Profile Image'
        }
    ]
}