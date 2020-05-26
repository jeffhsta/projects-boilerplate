import { expect } from "chai";
import { stub, restore, SinonStub } from "sinon";
import sampleRepo from "@src/ports/repos/sample";
import sampleController from "@src/controllers/sample";

let sampleRepoGetById: SinonStub;

describe("Sample test suite", () => {
  beforeEach(() => {
    sampleRepoGetById = stub(sampleRepo, "getById");
  });

  afterEach(() => restore());

  it("a sample test", async () => {
    sampleRepoGetById.resolves({ foo: "bar" });

    await sampleController({ something: "" });

    expect(true).to.be.equal(true);
    expect(sampleRepoGetById).to.have.been.calledOnce;
  });
});
