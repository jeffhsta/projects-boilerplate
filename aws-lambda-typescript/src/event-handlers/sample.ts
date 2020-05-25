import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export default async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => ({
  statusCode: 200,
  body: JSON.stringify({}),
});
