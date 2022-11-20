const HelloSolidity = artifacts.require("HelloSolidity");
contract("HelloSolidity", (accounts) => {
    it("should return the correct greeting", async () => {
        const helloSolidity = await HelloSolidity.deployed();
        const greeting = await helloSolidity.greet();
        assert.equal(greeting, "Hello! Solidity");
    });
});
