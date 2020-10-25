import database from '../models';

class TodoService {
  static async getAllTodos() {
    try {
      return await database.Todo.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addTodo(newTodo) {
    console.log(newTodo);
    try {
      return await database.Todo.create(newTodo);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async updateTodo(id, updateTodo) {
    console.log(updateTodo);
    try {
      const todoToUpdate = await database.Todo.findOne({
        where: { id: Number(id) }
      });

      if (todoToUpdate) {
        await database.Todo.update(updateTodo, { where: { id: Number(id) } });

        return updateTodo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getATodo(id) {
    try {
      const todo = await database.Todo.findOne({
        where: { id: Number(id) }
      });

      return todo;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTodo(id) {
    try {
      const todoToDelete = await database.Todo.findOne({ where: { id: Number(id) } });

      if (todoToDelete) {
        const deletedTodo = await database.Todo.destroy({
          where: { id: Number(id) }
        });
        return deletedTodo;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default TodoService;
