import supertest from 'supertest';

import app from '../index';
import resize from '../utilities/resize';

const request = supertest(app);

describe('test the endpoint response', () => {
  it('gets the end point', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('gets an error when data required in the endpoint not exist', async () => {
    const response = await request.get('/api/image');
    expect(response.status).toBe(500);
  });
});

describe('test image processing', () => {
  it('prosecc the image', async () => {
    const result = await resize('got.jpg', 800, 200);
    expect(result.width).toEqual(800);
    expect(result.height).toEqual(200);
  });
});
