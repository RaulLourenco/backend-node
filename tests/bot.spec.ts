import { BotService } from '../src/app/components/bots/bot.service';
import { BotDTO }  from '../src/app/components/bots/botDTO';
import { botsSchema } from '../src/app/database/schemas/bot-schema';

const mockBot = {
    id: '36b9f842-ee97-11e8-9443-0242ac120002',
    name: 'Aureo'
};

const mockBotId = '36b9f842-ee97-11e8-9443-0242ac120002';

describe('Bot DTO and Service Test', () => {
    it('should dto exists', () => {
        const botDTO = new BotDTO();
        expect(botDTO).toBeTruthy;
    });

    it('should dto exists', () => {
        const botDTO = new BotDTO();
        expect(botDTO).toBeFalsy;
    });

    it('should service not exists', () => {
        const botService = new BotService();
        expect(botService).toBeTruthy;
    });

    it('should service create mock exists', () => {
        const createMock = new BotService().create(mockBot);
        expect(createMock).toBeTruthy;
    });

    it('should service getById mock exists', () => {
        const getByIdMock = new BotService().getById(mockBotId);
        expect(getByIdMock).toBeTruthy;
    });

    it('should service getAll mock exists', () => {
        const getAllMock = new BotService().getAll();
        expect(getAllMock).toBeTruthy;
        jest.spyOn(BotService.prototype, 'getAll').mockImplementation(
            async () => Promise.resolve([]) as any
        );
    });

    it('should service update mock exists', () => {
        const updateMock = new BotService().update(mockBotId, mockBot);
        expect(updateMock).toBeTruthy;
    });

    it('should service delete mock exists', () => {
        const deleteMock = new BotService().delete(mockBotId);
        expect(deleteMock).toBeTruthy;
    });

    it('should service not exists', () => {
        const botService = new BotService();
        expect(botService).not.toBeFalsy;
    });

    it('should DTO create be functional', async () => {
        const botDTO = new BotDTO();
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botDTO.create(mockBot);
    });
    it('should DTO getById be functional', async () => {
        const botDTO = new BotDTO();
        jest.spyOn(botsSchema, 'findOne').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botDTO.getById(mockBotId);
    });
    it('should DTO getAll be functional', async () => {
        const botDTO = new BotDTO();
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botDTO.getAll();
    });
    it('should DTO update be functional', async () => {
        const botDTO = new BotDTO();
        jest.spyOn(botsSchema, 'findOneAndUpdate').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botDTO.update(mockBotId, mockBot);
    });
    it('should DTO delete be functional', async () => {
        const botDTO = new BotDTO();
        jest.spyOn(botsSchema, 'findOneAndDelete').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botDTO.delete(mockBotId);
    });
    
    //False DTO Test

    it('should DTO create not be functional', async () => {
        const botDTO = new BotDTO().create(mockBot);
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        expect(botDTO).not.toBe(mockBot);
    });
    it('should DTO getById not be functional', async () => {
        const botDTO = new BotDTO().getById(mockBotId);
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        expect(botDTO).not.toBe(mockBotId);
    });
    it('should DTO getAll not be functional', async () => {
        const botDTO = new BotDTO().getAll();
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        expect(botDTO).not.toBe([]);
    });
    it('should DTO update not be functional', async () => {
        const botDTO = new BotDTO().update(mockBotId, mockBot);
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        expect(botDTO).not.toBe(mockBot);
    });
    it('should DTO delete not be functional', async () => {
        const botDTO = new BotDTO().delete(mockBotId);
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        expect(botDTO).not.toBe(mockBotId);
    });

    // Service Test

    it('should Service create be functional', async () => {
        const botService = new BotService();
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botService.create(mockBot);
    });
    it('should Service getById be functional', async () => {
        const botService = new BotService();
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botService.getById(mockBotId);
    });
    it('should Service getAll be functional', async () => {
        const botService = new BotService();
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botService.getAll();
    });
    it('should Service update be functional', async () => {
        const botService = new BotService();
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botService.update(mockBotId, mockBot);
    });
    it('should Service delete be functional', async () => {
        const botService = new BotService();
        jest.spyOn(botsSchema, 'find').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await botService.delete(mockBotId);
    });

    //Negative Service Test

    it('should Service create not be functional', async () => {
        const botService = new BotService();
        expect(botService.create({id: '', name: ''})).not.toBe(mockBot);
    });
    it('should Service getById not be functional', async () => {
        const botService = new BotService();
        expect(botService.getById('321')).not.toBe(mockBotId);
    });
    it('should Service getAll not be functional', async () => {
        const botService = new BotService();
        expect(botService.getAll()).not.toBe('');
    });
    it('should Service update not be functional', async () => {
        const botService = new BotService();
        expect(botService.update('123', {id: '', name: ''})).not.toBe(mockBot);
    });
    it('should Service delete not be functional', async () => {
        const botService = new BotService();
        expect(botService.delete('123')).not.toBe('');
    });

});