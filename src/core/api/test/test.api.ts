import { autoInjectable, singleton } from "tsyringe";
import { Request, Response } from "express";
import { verifyChallenge } from "pkce-challenge";
import TestService from "./test.service";

@singleton()
@autoInjectable()
export default class TestApi {
  constructor(private testService: TestService) { }

  test = async (req: Request, res: Response) => {
    const result = await this.testService.test();
    return res.status(200).json(JSON.stringify(result));
  };
}
