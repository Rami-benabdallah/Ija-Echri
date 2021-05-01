import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Basir',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products:[
        {
            
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock: 10,
            brand:'nike',
            rating:4.5,
            numReviews:10,
            description:'High quality product,'
        },
        {
           
            name:'Adidas Slim Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:100,
            countInStock: 0,
            brand:'Adidas',
            rating:4,
            numReviews:10,
            description:'High quality product,'
        },
        {
            
            name:'Lacoste Slim Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price:220,
            countInStock: 20,
            brand:'Lacoste',
            rating:4.8,
            numReviews:17,
            description:'High quality product,'
        },
        {
            
            name:'Nike Slim Pant',
            category:'Pants',
            image:'/images/p4.jpg',
            price:180,
            countInStock: 30,
            brand:'nike',
            rating:4.5,
            numReviews:10,
            description:'High quality product,'
        },
        {
            
            name:'Puma Slim Pant',
            category:'Pants',
            image:'/images/p5.jpg',
            price:65,
            countInStock: 0,
            brand:'Puma',
            rating:4.5,
            numReviews:10,
            description:'High quality product,'
        },
        {
            
            name:'Adidas Slim Pant',
            category:'Pants',
            image:'/images/p6.jpg',
            price:139,
            countInStock: 40,
            brand:'Adidas',
            rating:4.5,
            numReviews:15,
            description:'High quality product,'
        },
    ],
};
export default data;