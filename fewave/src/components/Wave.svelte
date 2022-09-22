<script>
import {Web3} from 'svelte-web3';
import WavePortal from '/home/cryptopragmatic/fewaveportal/output/WavePortal/WavePortal_abi.json';

async function waver () {
  const web3 = new Web3(window.ethereum);
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = WavePortal.networks[networkId];
  const contract = new web3.eth.Contract (
    WavePortal.abi, 
    deployedNetwork && deployedNetwork.address

  );

  const response = await contract.methods.wave().call();
  return response;

  $: promise = waver();
  
  
}
</script>

<main></main>

<style></style>