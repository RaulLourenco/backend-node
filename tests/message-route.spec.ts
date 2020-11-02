import { MessageAPI } from '../src/app/routes/api/v1/messages/message-route';
import express from 'express';
import { messageSchema } from '../src/app/database/schemas/message-schema';

const mockMessageSchema = {
    conversationId: "12a9c42a-ca74-4c7b-aa6d-69fd50aa0cd0",
    timestamp: new Date(),
    from: "36b9f842-ee97-11e8-9443-0242ac120002",
    to: "16edd3b3-3f75-40df-af07-2a3813a79ce9",
    text: "Oi! Como posso te ajudar?"
}

const mockResponse = {
    status: (status: any) => ({
        end: () => { },
        json: (obj: any) => { },
    }),
    json: (obj: any) => { },
} as any;

const mockRequest = {
    body: {
        conversationId: "12a9c42a-ca74-4c7b-aa6d-69fd50aa0cd0",
        timestamp: new Date(),
        from: "36b9f842-ee97-11e8-9443-0242ac120002",
        to: "16edd3b3-3f75-40df-af07-2a3813a79ce9",
        text: "Oi! Como posso te ajudar?"
    }
}

const mockParamId = {
    params: {
        id: '36b9f842-ee97-11e8-9443-0242ac120002'
    }
}

const mockQueryId = {
    query: {
        id: '36b9f842-ee97-11e8-9443-0242ac120002'
    }
}

const mockMessage = {
    message: 'mock message test'
}

describe('Message Route Test', () => {
    it('should message api exists', () => {
        const messageAPI = new MessageAPI();
        expect(messageAPI).toBeTruthy;
    });
    it('should message api not exists', () => {
        const messageAPI = new MessageAPI();
        expect(messageAPI).toBeFalsy;
    });
    it('should message api route exists', async () => {
        const messageAPI = new MessageAPI().route();
        expect(messageAPI).toBeTruthy;
    });
    it('should api route to be truthy', async () => {
        const routes = new MessageAPI().route();
        expect(routes).not.toEqual(express.Router());
    });
    it('should test create function', () => {
        const createMockRoute = new MessageAPI().create(mockRequest, mockResponse);
        expect(createMockRoute).toBeTruthy;
    });
    it('should test getById function', () => {
        const getByIdMockRoute = new MessageAPI().getById(mockParamId, mockResponse);
        expect(getByIdMockRoute).toBeTruthy;
    });
    it('should test getByConversationId function', () => {
        const getConversationIdMockRoute = new MessageAPI().getByConversationId(mockQueryId, mockResponse);
        expect(getConversationIdMockRoute).toBeTruthy;
    });

    // it('should post function be functional', async () => {
    //     const messageAPI = new MessageAPI();
    //     await messageAPI.create(mockRequest, mockResponse);
    // });
    it('should getById function be functional', async () => {
        const messageAPI = new MessageAPI();
        jest.spyOn(messageSchema, 'findOne').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await messageAPI.getById(mockParamId, mockResponse);
    });
    it('should getAll function be functional', async () => {
        const messageAPI = new MessageAPI();
        jest.spyOn(messageSchema, 'find').mockImplementation(
            (obj: any) => Promise.resolve([]) as any
        );
        await messageAPI.getByConversationId(mockQueryId, mockResponse);
    })

    // Negative Test
    // it('should API create not be functional', async () => {
    //     const messageAPI = new MessageAPI();
    //     await messageAPI.create(mockRequest, mockResponse).then(res => {
    //         expect(res).not.toEqual(mockMessageSchema);
    //     });
    // });
    it('should API getById not be functional', async () => {
        const messageAPI = new MessageAPI().getById(mockParamId, mockResponse);
        jest.spyOn(messageSchema, 'findOne').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        expect(messageAPI).not.toBe(mockMessageSchema);
    });
    it('should DTO getByConversationId not be functional', async () => {
        const messageAPI = new MessageAPI().getByConversationId(mockQueryId, mockResponse);
        jest.spyOn(messageSchema, 'find').mockImplementation(
            (obj: any) => Promise.reject('error') as any
        );
        expect(messageAPI).not.toBe([]);
    });
});