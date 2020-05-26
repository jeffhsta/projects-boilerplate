import express, { Request, Response } from "express";
import sampleController, { CustomParams } from "@src/controllers/sample";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  const params: CustomParams = { something: "bah tche", ...req.query };
  const result = await sampleController(params);
  res.json(result);
});

app.listen(port, () => {
  console.log(`App started at port ${port}`);
});
