import '@testing-library/jest-dom/extend-expect';
import { server } from './testUtils/server';
import fetch from 'node-fetch';
import { TextEncoder, TextDecoder } from 'util';

globalThis.fetch = fetch;
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
