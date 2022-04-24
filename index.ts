import { createClient } from 'redis';
import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
    const client = createClient();    
    await client.connect();
    await client.flushAll();

    await client.quit();
})();

const app = express()

app.get('/audit', async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    await prisma.audit.create({
        data: {
            description: 'AUDIT',
            dateCreated: Date.now() 
        }
    })

    res.json({
        status: 'Complete'
    })
});

app.disable('x-powered-by');

process.on("uncaughtException", error => {
  console.error(`Uncaught exception: ${error.message}`);
});

process.on("unhandledRejection", (reason) => {
  console.error(`Unhandled rejection: ${reason}`);
});


const port = 8080;
app.listen(port, () => {
  console.log(`Application running at http://localhost:${port}`)
})
