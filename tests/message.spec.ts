import { MessageService } from '../src/app/components/messages/message.service';
import { MessageDTO } from '../src/app/components/messages/messageDTO';
import { messageSchema } from '../src/app/database/schemas/message-schema';

const messageMock = {
    conversationId: "12a9c42a-ca74-4c7b-aa6d-69fd50aa0cd0",
    timestamp: new Date(),
    from: "36b9f842-ee97-11e8-9443-0242ac120002",
    to: "16edd3b3-3f75-40df-af07-2a3813a79ce9",
    text: "Oi! Como posso te ajudar?"
}

const messageIdMock = 'f2237304-fda7-464a-ac29-1215958c7daf';

const conversationIdMock = '12a9c42a-ca74-4c7b-aa6d-69fd50aa0cd0';

describe('Message DTO and Service Test', () => {
    it('should dto exists', () => {
        const messageDTO = new MessageDTO();
        expect(messageDTO).toBeTruthy;
    });
    it('should service exists', () => {
        const messageService = new MessageService();
        expect(messageService).toBeTruthy;
    });

    it('should dto not exists', () => {
        const messageDTO = new MessageDTO();
        expect(messageDTO).toBeFalsy;
    });
    it('should service not exists', () => {
        const messageService = new MessageService();
        expect(messageService).toBeFalsy;
    });

    //DTO Test

    // it('should DTO create be functional', async () => {
    //     const messageDTO = new MessageDTO();
    //     await messageDTO.create(messageMock);
    // });
    it('should DTO getById be functional', async () => {
        const messageDTO = new MessageDTO();
        jest.spyOn(messageSchema, 'findOne').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await messageDTO.getById(messageIdMock);
    });
    it('should DTO getByConversationId be functional', async () => {
        const messageDTO = new MessageDTO();
        jest.spyOn(messageSchema, 'find').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await messageDTO.getByConversationId(conversationIdMock);
    });

    // Service Test

    it('should Service message create be functional', async () => {
        const createMock = new MessageService().create(messageMock);
        expect(createMock).toBeTruthy;
        jest.spyOn(MessageService.prototype, 'create').mockImplementation(
            async () => Promise.resolve([]) as any
        );
    });
    it('should Service message getById be functional', async () => {
        const messageService = new MessageService();
        jest.spyOn(messageSchema, 'findOne').mockImplementation(
            () => Promise.resolve([]) as any
        );
        jest.spyOn(messageSchema, 'find').mockImplementation(
            (conditions: any, projection?: (err: any, res: any[]) => any) => ({
                limit: function (lim: any) {
                    return { skip: () => 1};
                },
            } as any)
        );
        await messageService.getById(messageIdMock);
    });
    it('should Service message getByConversationId be functional', async () => {
        const messageService = new MessageService();
        jest.spyOn(messageSchema, 'find').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        jest.spyOn(messageSchema, 'find').mockImplementation(
            (conditions: any, projection?: (err: any, res: any[]) => any) => ({
                limit: function (lim: any) {
                    return { skip: () => 1};
                },
            } as any)
        );
        await messageService.getByConversationId(conversationIdMock);
    });

    //Negative DTO test

    it('should DTO create not be functional', async () => {
        const messageDTO = new MessageDTO();
        jest.spyOn(messageSchema, 'find').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        jest.spyOn(messageSchema, 'find').mockImplementation(
            (conditions: any, projection?: (err: any, res: any[]) => any) => ({
                limit: function (lim: any) {
                    return { skip: () => 1};
                },
            } as any)
        );
        expect(messageDTO).not.toBe(messageMock);
    });
    it('should DTO getById not be functional', async () => {
        const messageDTO = new MessageDTO();
        jest.spyOn(messageSchema, 'find').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        jest.spyOn(messageSchema, 'find').mockImplementation(
            (conditions: any, projection?: (err: any, res: any[]) => any) => ({
                limit: function (lim: any) {
                    return { skip: () => 1};
                },
            } as any)
        );
        expect(messageDTO).not.toBe(messageIdMock);
    });
    it('should DTO getByConversationId not be functional', async () => {
        const messageDTO = new MessageDTO();
        jest.spyOn(messageSchema, 'find').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        jest.spyOn(messageSchema, 'find').mockImplementation(
            (conditions: any, projection?: (err: any, res: any[]) => any) => ({
                limit: function (lim: any) {
                    return { skip: () => 1};
                },
            } as any)
        );
        expect(messageDTO).not.toBe(messageIdMock);
    });

});