'use client';
import axios from 'axios';

const key = process.env.NEXT_PUBLIC_API_KEY || '';

const client = axios.create({
  headers: {
    'x-api-key': key,
  },
  baseURL: '/api',
});

export default function fetch({ ...params }) {
  return client(params)
    .then((data) => data)
    .catch((error) => error);
}
