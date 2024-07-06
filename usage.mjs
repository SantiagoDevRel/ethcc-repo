import { PluginTest } from "./index.mjs";
import { Web3 } from "web3";

//initiailize plugin and rpc
const web3 = new Web3("https://arbitrum.llamarpc.com");
web3.registerPlugin(new PluginTest());

//use plugin
web3.ethcc2.arbitrum();
web3.ethcc2.starknet();
web3.ethcc2.zkSync();
web3.ethcc2.zkevm("13989657");
