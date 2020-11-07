import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import {app} from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the todo endpoints:', () => {
  it('Valid create a todo', (done) => {
    const todo = {
      title: 'First todo',
      description: 'This is the first todo'
    };
    chai.request(app)
      .post('/resfulApi/todo')
      .set('Accept', 'application/json')
      .send(todo)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.include({
          id: 1,
          title: todo.title,
          description: todo.description,
          isCompleted: false
        });
        done();
      });
  });

  it('Invalid incomplete parameters', (done) => {
    const todo = {
      description: 'Cook book'
    };
    chai.request(app)
      .post('/resfulApi/todo')
      .set('Accept', 'application/json')
      .send(todo)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('Valid get all todo', (done) => {
    chai.request(app)
      .get('/resfulApi/todo')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('title');
        res.body.data[0].should.have.property('description');
        res.body.data[0].should.have.property("isCompleted");
        done();
      });
  });

  it('Valid, get a particular todo', (done) => {
    const todoId = 1;
    chai.request(app)
      .get(`/resfulApi/todo/${todoId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('title');
        res.body.data.should.have.property('description');
        res.body.data.should.have.property("isCompleted");
        done();
      });
  });

  it('Invalid id, should not get any todo', (done) => {
    const todoId = 8888;
    chai.request(app)
      .get(`/resfulApi/todo/${todoId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find todo with the id ${todoId}`);
        done();
      });
  });

  it('INVALID： should not get a particular todo with non-numeric id', (done) => {
    const todoId = 'aaa';
    chai.request(app)
      .get(`/resfulApi/todo/${todoId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });

  it('Valid update a todo', (done) => {
    const todoId = 1;
    const updatedtodo = {
      id: todoId,
      title: 'Updated Awesome todo',
      description: 'We have updated name',
      isCompeleted: true
    };
    chai.request(app)
      .put(`/resfulApi/todo/${todoId}`)
      .set('Accept', 'application/json')
      .send(updatedtodo)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.id).equal(updatedtodo.id);
        expect(res.body.data.title).equal(updatedtodo.title);
        expect(res.body.data.description).equal(updatedtodo.description);
        expect(res.body.data.isCompeleted).equal(true);
        done();
      });
  });

  it('Invalid id, no update', (done) => {
    const todoId = '9999';
    const updatedtodo = {
      id: todoId,
      title: 'Updated Awesome todo again',
      description: 'We have updated the title'
    };
    chai.request(app)
      .put(`/resfulApi/todo/${todoId}`)
      .set('Accept', 'application/json')
      .send(updatedtodo)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find todo with the id: ${todoId}`);
        done();
      });
  });

  it('Invalid: should not update a todo with non-numeric id value', (done) => {
    const todoId = 'ggg';
    const updatedtodo = {
      id: todoId,
      title: 'Updated Awesome todo again',
      description: 'We have updated the description'
    };
    chai.request(app)
      .put(`/resfulApi/todo/${todoId}`)
      .set('Accept', 'application/json')
      .send(updatedtodo)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });


  it('Valid: should delete a todo', (done) => {
    const todoId = 1;
    chai.request(app)
      .delete(`/resfulApi/todo/${todoId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('Invalid: should not delete a todo with invalid id', (done) => {
    const todoId = 777;
    chai.request(app)
      .delete(`/resfulApi/todo/${todoId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Todo with the id ${todoId} cannot be found`);
        done();
      });
  });

  it('Invalid It should not delete a todo with non-numeric id', (done) => {
    const todoId = 'bbb';
    chai.request(app)
      .delete(`/resfulApi/todo/${todoId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message').eql('Please provide a numeric value');
        done();
      });
  });
});