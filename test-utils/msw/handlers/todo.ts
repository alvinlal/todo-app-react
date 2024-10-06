import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';
import { GetTodosResponseDto } from '../../../src/services/api/todo/dto/response/GetTodosResponse.dto';

const todos: GetTodosResponseDto = faker.helpers.multiple(
  () => ({
    id: faker.string.uuid(),
    title: faker.lorem.lines(1),
    isCompleted: true,
  }),
  { count: 10 }
);

export const todoHandlers = [
  http.get<never, never, GetTodosResponseDto, '/todos'>('/todos', () => HttpResponse.json(todos)),
];
