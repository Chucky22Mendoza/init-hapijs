import { Server } from "@hapi/hapi";
import { routes } from "./routes";

export const init = async () => {
    const server: Server = new Server({
        port: 4000,
        host: "localhost"
    });

    routes(server);

    await server.start();
    console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
    console.log(err);
    process.exit(0);
});