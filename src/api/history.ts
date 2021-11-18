import { Instance, AxiosResponse } from '../utils/command';
import HistoryModel from '../models/history';

async function getById(id: string): Promise<HistoryModel.History> {
  const { data } = await Instance.get(`/history/${id}`);
  return data;
}

async function createHistory(history: HistoryModel.History): Promise<number | void> {
  const { status } = await Instance.post('/history', history);
  return status;
}

async function updateHistory(id: string, changes: HistoryModel.Change): Promise<number | void> {
  const currentHistory = await getById(id);
  const newHistoryLength = currentHistory.changes.unshift(changes);
  const { data } = await Instance.patch(`/history/${id}`, currentHistory);
  return data;
}

async function deleteHistory(id: string): Promise<number | void> {
  const { status } = await Instance.delete(`/history/${id}`);
  return status;
}

export {
  getById,
  createHistory,
  updateHistory,
  deleteHistory,
};
