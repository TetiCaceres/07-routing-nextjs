import axios from 'axios';
import type { NewNote, Note } from '../types/note';

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export interface FetchNotesParams {
  search?: string;
  page: number;
  perPage: number;
  tag?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNoteResponse {
  note: Note;
}

export interface DeleteNoteResponse {
  note: Note;
}

export const fetchNotes = async ({
  search,
  page,
  perPage,
  tag,
}: FetchNotesParams): Promise<FetchNotesResponse> => {
  const response = await api.get<FetchNotesResponse>('/notes', {
    params: {
      search: search || undefined,
      page,
      perPage,
      tag: tag && tag !== 'all' ? tag : undefined,
    },
  });

  return response.data;
};

export const createNote = async (
  note: NewNote
): Promise<CreateNoteResponse> => {
  const response = await api.post<CreateNoteResponse>('/notes', note);

  return response.data;
};

export const deleteNote = async (id: string): Promise<DeleteNoteResponse> => {
  const response = await api.delete<DeleteNoteResponse>(`/notes/${id}`);

  return response.data;
};

// Нова функція для отримання однієї нотатки за її ID
export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await api.get<Note>(`/notes/${id}`);

  return response.data;
};
