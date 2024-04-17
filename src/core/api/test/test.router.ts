import { Application } from "express";
import { autoInjectable, singleton } from "tsyringe";
import { BaseRouter } from "../../../shared/interfaces/api.interface.js";
import ApiUtils from "../../../shared/utils/api.utils.js";
import TestApi from "./test.api.js";

@singleton()
@autoInjectable()
export default class HealthRouter extends BaseRouter {
  constructor(private apiUtils: ApiUtils, private TestApi: TestApi) {
    super(apiUtils, "");
  }

  loadRoutes(app: Application): void {
    this.router.route("/test").get(this.executeHandler(this.TestApi.test));
    app.use(this.path, this.router);

  }


}
