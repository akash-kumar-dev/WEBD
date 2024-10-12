const mongoose = require('mongoose');

mongoose.connect('DATABASE_URL/test')

const User = mongoose.model('User', { name: String, email: String, password: String });

const user = new User({
    name: 'offsec off',
    email: 'offsec@gmail.com',
    password: '12345'
});

user.save();