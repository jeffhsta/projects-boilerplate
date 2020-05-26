import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import sampleController from "@src/controllers/sample";

export default async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  await sampleController({ something: "" });

  return {
    statusCode: 200,
    body: JSON.stringify({}),
  };
};
