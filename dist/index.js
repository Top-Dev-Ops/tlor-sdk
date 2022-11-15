"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChapters = exports.getQuotes = exports.getMovies = exports.getBook = exports.getBooks = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://the-one-api.dev/v2';
const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer 23c_ilvbpYW_Hb7ldPUx'
};
function getUrl(baseUrl, { limit, page, offset, sort }) {
    let url = baseUrl;
    if (limit)
        url += `limit=${limit}`;
    if (page)
        url += `&page=${page}`;
    if (offset)
        url += `&offset=${offset}`;
    if (sort)
        url += `&sort=${sort}`;
    return url;
}
function getBooks(props) {
    return new Promise((resolve, reject) => {
        const url = getUrl(`${API_URL}/book?`, props !== null && props !== void 0 ? props : {});
        axios_1.default.get(url, { headers })
            .then(res => resolve(res.data))
            .catch(reject);
    });
}
exports.getBooks = getBooks;
function getBook(id) {
    return new Promise((resolve, reject) => {
        axios_1.default.get(`${API_URL}/book/${id}`, { headers })
            .then(res => resolve(res.data))
            .catch(reject);
    });
}
exports.getBook = getBook;
function getMovies(props) {
    return new Promise((resolve, reject) => {
        const url = getUrl(`${API_URL}/movie?`, props !== null && props !== void 0 ? props : {});
        axios_1.default.get(url, { headers })
            .then(res => resolve(res.data))
            .catch(reject);
    });
}
exports.getMovies = getMovies;
function getQuotes(props) {
    return new Promise((resolve, reject) => {
        const url = getUrl(`${API_URL}/quote?`, props !== null && props !== void 0 ? props : {});
        axios_1.default.get(url, { headers })
            .then(res => resolve(res.data))
            .catch(reject);
    });
}
exports.getQuotes = getQuotes;
function getChapters(props) {
    return new Promise((resolve, reject) => {
        const url = getUrl(`${API_URL}/chapter?`, props !== null && props !== void 0 ? props : {});
        axios_1.default.get(url, { headers })
            .then(res => resolve(res.data))
            .catch(reject);
    });
}
exports.getChapters = getChapters;
