const should = require('chai').should();
const expect = require('chai').expect();
const supertest = require('supertest');

const api = supertest('http://localhost:8000');

describe('Book', function(done) {
	it('should return all books with a response of 200', function() {
		api.get('/books')
		.expect(200, done);
	});

	it('should be objects with keys and values', function() {
		api.get('/books')
		.expect(200, done)
		.end(function(err ,res) {
			expect(res.body).to.have.property('isbn');
		});
	});
});