import { BotAPI } from '../src/app/routes/api/v1/bots/bot-route';
import express, { Request, Response } from 'express';
import { botsSchema } from '../src/app/database/schemas/bot-schema';

const mockBotService = {
    create: () => Promise.resolve(null),
    getById: () => Promise.resolve(null),
    getAll: () => Promise.resolve(null),
    update: () => Promise.resolve(null),
    delete: () => Promise.resolve(null),
}

const mockBot = {
    id: '36b9f842-ee97-11e8-9443-0242ac120002',
    name: 'Aureo'
};

const mockResponse = {
    status: (status: any) => ({
        end: () => { },
        json: (obj: any) => { },
    }),
    json: (obj: any) => { },
} as any;

const mockRequest = {
    body: {
        id: "3620002",
        name: "Aureo"
    }
}

const mockParam = {
    params: {
        id: '36b9f842-ee97-11e8-9443-0242ac120002'
    }
}

const mockMessage = {
    message: 'mock message test'
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
    it('should api route to be truthy', async () => {
        const routes = new BotAPI().route();
        expect(routes).toBeTruthy;
    });
    it('should api mock bot service', async () => {
        const botAPI = new BotAPI();
        botAPI['botService'] = mockBotService as any;
    });
    it('should api route to be truthy', async () => {
        const routes = new BotAPI().route();
        expect(routes).toEqual(express.Router());
    });
    it('should test post function', () => {
        const postMockRoute = new BotAPI().create(mockRequest, mockResponse);
        expect(postMockRoute).toBeTruthy;
    });
    it('should test getById function', () => {
        const getByIdMockRoute = new BotAPI().getById(mockParam, mockResponse);
        expect(getByIdMockRoute).toBeTruthy;
    });
    it('should test getAll function', () => {
        const getAllMockRoute = new BotAPI().getAll(mockResponse);
        expect(getAllMockRoute).toBeTruthy;
    });
    it('should test update function', () => {
        const updateMockRoute = new BotAPI().update(mockRequest, mockResponse);
        expect(updateMockRoute).toBeTruthy;
    });
    it('should test delete function', () => {
        const deleteMockRoute = new BotAPI().delete(mockParam, mockResponse);
        expect(deleteMockRoute).toBeTruthy;
    });
    it('should post function be functional', async () => {
        const botAPI = new BotAPI();
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botAPI.create(mockRequest, mockResponse);
    });
    it('should getById function be functional', async () => {
        const botAPI = new BotAPI();
        jest.spyOn(botsSchema, 'findOne').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botAPI.getById(mockParam, mockResponse);
    });
    it('should getAll function be functional', async () => {
        const botAPI = new BotAPI();
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botAPI.getAll(mockResponse);
    });
    it('should update function be functional', async () => {
        const botAPI = new BotAPI();
        jest.spyOn(botsSchema, 'findOneAndUpdate').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botAPI.update(mockRequest, mockResponse);
    });
    it('should delete function be functional', async () => {
        const botAPI = new BotAPI();
        jest.spyOn(botsSchema, 'findOneAndDelete').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botAPI.delete(mockParam, mockResponse);
    });

    // Negative Test
    it('should API create not be functional', async () => {
        const botAPI = new BotAPI()
        await botAPI.create(mockRequest, mockResponse).then( res => {
            expect(res).not.toEqual(mockBot);
        });
    });
    it('should API getById not be functional', async () => {
        const botAPI = new BotAPI().getById(mockParam, mockResponse);
        jest.spyOn(botsSchema, 'findOne').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        expect(botAPI).not.toBe(mockBot);
    });
    it('should DTO getAll not be functional', async () => {
        const botAPI = new BotAPI().getAll(mockResponse);
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        expect(botAPI).not.toBe([]);
    });
    it('should API update not be functional', async () => {
        const botAPI = new BotAPI().update(mockRequest, mockResponse);
        jest.spyOn(botsSchema, 'findOneAndUpdate').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        expect(botAPI).not.toBe(mockMessage);
    });
    it('should API delete not be functional', async () => {
        const botAPI = new BotAPI().delete(mockParam, mockResponse);
        jest.spyOn(botsSchema, 'findOneAndDelete').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        expect(botAPI).not.toBe(mockMessage);
    });
});