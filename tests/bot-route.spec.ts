import { BotAPI } from '../src/app/routes/api/v1/bots/bot-route';
import * as request from 'supertest';
import express, { Request, Response } from 'express';

const app = express;

const mockBotService = {
    create: () => Promise.resolve(null),
    getById: () => Promise.resolve(null),
    getAll: () => Promise.resolve(null),
    update: () => Promise.resolve(null),
    delete: () => Promise.resolve(null),
}

describe('Bot Route Test', () => {
    it('should api exists', () => {
        const botAPI = new BotAPI();
        expect(botAPI).toBeTruthy;
    });
    it('should api not exists', () => {
        const botAPI = new BotAPI();
        expect(botAPI).toBeFalsy;
    });
    it('should api route exists', async () => {
        const botAPI = new BotAPI();
        await botAPI.route();
    });
    it('should api route exists', async () => {
        const routes = new BotAPI().route();
        expect(routes).toBeTruthy;
    });
    it('should api route exists', async () => {
        const botAPI = new BotAPI();
        botAPI['botService'] = mockBotService as any;
    });
});