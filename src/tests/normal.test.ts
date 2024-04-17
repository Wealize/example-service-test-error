import {container } from "tsyringe";
import {describe, test} from '@jest/globals';
import TestService from "../core/api/test/test.service";

describe("Mi prueba", () => { 

  test("Básica", async () => {

    //TODO: una vez funcione falta poder sustituir un servicio por un mock

    const testService = container.resolve(TestService);
    const configuration = await testService.test()
    console.log(configuration);

    console.log("fin")

  });
});
