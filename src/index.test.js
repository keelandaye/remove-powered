const express = require('express');
const request = require('supertest');
const rp = require('./index');

describe('removePowered', () => {
	let app;
	beforeEach(() => {
		app = express();
	})

	it('should return response with X-Powered-By header when not enabled', () => {
		app.get('/', (req, res) => {
			res.send('Hello world!');
		});

		return request(app)
			.get('/')
			.expect((res) => {
				expect(res.headers['x-powered-by']).toBeDefined();
			});
	});

	it('should return response without X-Powered-By header when enabled', () => {
		app.use(rp.removePowered);

		app.get('/', (req, res) => {
			res.send('Hello world!');
		});

		return request(app)
			.get('/')
			.expect((res) => {
				expect(res.headers['x-powered-by']).toBeUndefined();
			})
	});
})
