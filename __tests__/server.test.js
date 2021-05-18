'use strict';

const {server} = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server);

describe('api server',() => {
  let id;
  
  it('should get a 404 status', async() => {
    const res = await request.get('/aaa');
    expect(res.status).toEqual(404);
  });

  it('should get a 404 status', async() => {
    const res = await request.patch('/api/v1/food');
    expect(res.status).toBe(404);
  });

  it('should create a new food using post method and get a 201 status', async() => {
    let food = {
      name:'rice',
      size:'xl',
    };
    const res = await request.post('/api/v1/food').send(food);
    expect(res.status).toBe(201);
    expect(res.body.data.name).toEqual('rice');
    expect(res.body.data.size).toEqual('xl');
    expect(res.body.id.length).toBeGreaterThan(0);
    id = res.body.id;
  });

  it('should get all food and get a 200 status', async() => {
    const res = await request.get('/api/v1/food');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should get a specific food and get a 200 status', async() => {
    const res = await request.get(`/api/v1/food/${id}`);
    expect(res.status).toBe(200);
    expect(res.body.data.name).toEqual('rice');
    expect(res.body.data.size).toEqual('xl');
  });

  it('should update food using put method and get a 200 status', async() => {
    let editFood = {
      name:'rice',
      size:'l',
    };
    const res = await request.put(`/api/v1/food/${id}`).send(editFood);
    expect(res.status).toBe(200);
    expect(res.body.data.size).toBe('l');
  });

  it('should delete food using delete method and get 200 status', async() => {
    const res = await request.delete(`/api/v1/food/${id}`);
    expect(res.status).toBe(200);
  });
  
});

describe( 'clothes api', () => {
  let id ;
  // Test create method
  it( 'should create clothes using POST', async () => {
    // arrange
    let clothes = {
      key: 'training',
      type:'sport',
    };
      //act
    const res = await request.post( '/api/v1/clothes' ).send( clothes );
    //assert
    expect( res.status ).toEqual( 201 );
    expect( res.body.data.key ).toEqual( 'training' );
    expect( res.body.data.type ).toEqual( 'sport' );
    id = res.body.id;
  } );
  // Test get method
  it( 'should return clothes using GET', async () => {
    const res = await request.get( '/api/v1/clothes' );
    expect( res.status ).toEqual( 200 );
    expect( Array.isArray( res.body ) ).toBeTruthy();
  } );
  // Test get method with id
  it( 'should return specific clothes data using GET', async () => {
    const res = await request.get( `/api/v1/clothes/${id}` );
    expect( res.body.data.key ).toEqual( 'training' );
    expect( res.body.data.type ).toEqual( 'sport' );
    expect( res.status ).toEqual( 200 );
  } );
  // Test update method
  it( 'should update specific clothes data using PUT', async () => {
    // arrange
    let clothes = {
      key: 'jacket',
      type:'formal',
    };
    const res = await request.put( `/api/v1/clothes/${id}` ).send ( clothes );
    expect( res.body.data.key ).toEqual( 'jacket' );
    expect( res.body.data.type ).toEqual( 'formal' );
    expect( res.status ).toEqual( 200 );
  } );
  // Test delete method
  it( 'should update specific food data using PUT', async () => {
    const res = await request.delete( `/api/v1/clothes/${id}` );
    expect( res.status ).toEqual( 200 );
  } );
} );

  



