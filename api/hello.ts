import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'https://deno.land/x/lambda/mod.ts';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    return {
        body: `Welcome ${event.resource} to deno ${Deno.version.deno} 🦕`,
        headers: {
            'content-type': 'text/html; charset=utf-8',
        },
        statusCode: 200,
    };
}
