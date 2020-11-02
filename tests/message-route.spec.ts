import { MessageAPI } from '../src/app/routes/api/v1/messages/message-route';

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
});