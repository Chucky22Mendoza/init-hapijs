import {Server, Request, ResponseToolkit} from '@hapi/hapi'

export const routes = (server: Server) => {

    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, h: ResponseToolkit) => {
            return 'hello world';
        }
    });

}