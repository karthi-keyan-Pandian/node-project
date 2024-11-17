"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("./prisma"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/users', (req, res) => {
    res.write("Hello World");
    res.end();
});
app.get('/blogs', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield prisma_1.default.blogs.findMany();
    res.write(JSON.stringify(blogs));
    res.end();
}));
app.post('/blogs/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = req.body;
    const response = yield prisma_1.default.blogs.create({ data: Object.assign({}, blogs) });
    res.write(JSON.stringify(response));
    res.send();
}));
app.listen('4000', () => {
    console.log("express start listen the server");
});
