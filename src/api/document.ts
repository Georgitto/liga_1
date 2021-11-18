import { Instance, AxiosResponse } from '../utils/command';
import DocumentModel from '../models/document';

async function getAll(): Promise<DocumentModel.Document[]> {
  const { data } = await Instance.get('/documents');
  return data;
}

async function getById(id: string): Promise<DocumentModel.Document> {
  const { data } = await Instance.get(`/documents/${id}`);
  return data;
}

async function createDocument(doc: DocumentModel.Document): Promise<DocumentModel.Document> {
  const { data } = await Instance.post('/documents', doc);
  return data;
}

async function updateDocument(id:string,
  changes:DocumentModel.Document):Promise<DocumentModel.Document> {
  const { data } = await Instance.patch(`/documents/${id}`, changes);
  return data;
}

async function deleteDocument(id: string) {
  const { status } = await Instance.delete(`/documents/${id}`);
  return status;
}

export {
  getAll,
  getById,
  createDocument,
  updateDocument,
  deleteDocument,
};
