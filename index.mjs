import { Web3PluginBase, utils, eth } from "web3";

export class PluginTest extends Web3PluginBase {
  pluginNamespace = "ethcc2";

  async arbitrum() {
    const response = await this.requestManager.send({
      method: "eth_call",
      params: [
        {
          to: utils.padLeft("0xc8", 40),
          data: eth.abi.encodeFunctionSignature("nitroGenesisBlock()"),
        },
      ],
    });
    console.log(utils.toBigInt(response));
  }

  async starknet() {
    this.setProvider("https://docs-demo.strk-mainnet.quiknode.pro");
    const response = await this.requestManager.send({
      method: "starknet_chainId",
      params: [],
    });
    console.log(utils.toBigInt(response));
  }

  async zkSync() {
    this.setProvider("https://mainnet.era.zksync.io");
    const response = await this.requestManager.send({
      method: "zks_getFeeParams",
      params: [],
    });
    console.log(response.V2.l1_gas_price);
  }

  async zkevm(blockNumber) {
    this.setProvider("https://zkevm-rpc.com");
    const response = await this.requestManager.send({
      method: "zkevm_isBlockConsolidated",
      params: [blockNumber],
    });

    console.log(`block is already verified: ${response}`);
  }
}
