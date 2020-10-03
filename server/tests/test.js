import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the book endpoints:', () => {
  it('Valid create a book', (done) => {
    const book = {
      title: 'First book',
      price: '$9.99',
      description: 'This is the first book'
    };
    chai.request(app)
      .post('/resfulApi/books')
      .set('Accept', 'application/json')
      .send(book)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.include({
          id: 1,
          title: book.title,
          price: book.price,
          description: book.description
        });
        done();
      });
  });

  it('Invalid incomplete parameters', (done) => {
    const book = {
      price: '$10',
      description: 'Cook book'
    };
    chai.request(app)
      .post('/resfulApi/books')
      .set('Accept', 'application/json')
      .send(book)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('Valid get all books', (done) => {
    chai.request(app)
      .get('/resfulApi/books')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('title');
        res.body.data[0].should.have.property('price');
        res.body.data[0].should.have.property('description');
        done();
      });
  });

  it('Valid, get a particular book', (done) => {
    const bookId = 1;
    chai.request(app)
      .get(`/resfulApi/books/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('title');
        res.body.data.should.have.property('price');
        res.body.data.should.have.property('description');
        done();
      });
  });

  it('Invalid id, should not get any book', (done) => {
    const bookId = 8888;
    chai.request(app)
      .get(`/resfulApi/books/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find book with the id ${bookId}`);
        done();
      });
  });

  it('INVALID： should not get a particular book with non-numeric id', (done) => {
    const bookId = 'aaa';
    chai.request(app)
      .get(`/resfulApi/books/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });

  it('Valid update a book', (done) => {
    const bookId = 1;
    const updatedBook = {
      id: bookId,
      title: 'Updated Awesome book',
      price: '$10.99',
      description: 'We have updated the price'
    };
    chai.request(app)
      .put(`/resfulApi/books/${bookId}`)
      .set('Accept', 'application/json')
      .send(updatedBook)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.id).equal(updatedBook.id);
        expect(res.body.data.title).equal(updatedBook.title);
        expect(res.body.data.price).equal(updatedBook.price);
        expect(res.body.data.description).equal(updatedBook.description);
        done();
      });
  });

  it('Invalid id, no update', (done) => {
    const bookId = '9999';
    const updatedBook = {
      id: bookId,
      title: 'Updated Awesome book again',
      price: '$11.99',
      description: 'We have updated the price'
    };
    chai.request(app)
      .put(`/resfulApi/books/${bookId}`)
      .set('Accept', 'application/json')
      .send(updatedBook)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find book with the id: ${bookId}`);
        done();
      });
  });

  it('Invalid: should not update a book with non-numeric id value', (done) => {
    const bookId = 'ggg';
    const updatedBook = {
      id: bookId,
      title: 'Updated Awesome book again',
      price: '$11.99',
      description: 'We have updated the price'
    };
    chai.request(app)
      .put(`/resfulApi/books/${bookId}`)
      .set('Accept', 'application/json')
      .send(updatedBook)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });


  it('Valid: should delete a book', (done) => {
    const bookId = 1;
    chai.request(app)
      .delete(`/resfulApi/books/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('Invalid: should not delete a book with invalid id', (done) => {
    const bookId = 777;
    chai.request(app)
      .delete(`/resfulApi/books/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Book with the id ${bookId} cannot be found`);
        done();
      });
  });

  it('Invalid It should not delete a book with non-numeric id', (done) => {
    const bookId = 'bbb';
    chai.request(app)
      .delete(`/resfulApi/books/${bookId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message').eql('Please provide a numeric value');
        done();
      });
  });
});