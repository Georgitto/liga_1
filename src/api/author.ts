import { Instance, AxiosResponse } from '../utils/command';
import AuthorModel from '../models/author';

async function getAll(): Promise<AuthorModel.Author[]> {
  const { data } = await Instance.get('/authors');
  return data;
}

async function getById(id: string): Promise<AuthorModel.Author> {
  const { data } = await Instance.get(`/authors/${id}`);
  return data;
}

async function createAuthor(user: AuthorModel.Author) {
  const { status } = await Instance.post('/authors', user);
  return status;
}

async function updateAuthor(id: string, changes: AuthorModel.Author): Promise<AuthorModel.Author> {
  const { data } = await Instance.patch(`/authors/${id}`, changes);
  return data;
}

async function deleteAuthor(id: string) {
  const { status } = await Instance.delete(`/authors/${id}`);
  return status;
}

export {
  getAll,
  getById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
