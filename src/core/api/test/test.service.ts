import { autoInjectable, singleton } from "tsyringe";
import { verifyChallenge } from "pkce-challenge";


@singleton()
@autoInjectable()
export default class TestService {
  constructor(
  ) { }

  public async test(): Promise<any> {
    const a = await verifyChallenge("codeVerifier", "codeChallenge");
    return { status: 200, a };
  }

}
