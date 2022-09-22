<script>
 
  import Wave from './components/Wave.svelte';
  import { ethers } from 'ethers';
  
  async function connectWallet() {
    if(window.ethereum) {
      window.web3 = new Web3(ethereum);
      await window.ethereum.enable();
      metamaskConnected = window.ethereum.isConnected();
    }

  }
  function onClickConnectWallet() {
    promise = connectWallet();
  }

  $: promise = connectWallet();

  $: metamaskConnected = window.ethereum ? window.ethereum.isConnected() : false;
  
 
</script>

<main>

{#if window.ethereum}
<p> Connected to metamask! {metamaskConnected} Change to goerli</p>
{/if}
{#if  window.ethereum && !metamaskConnected}
 <button on:click={onClickConnectWallet}> Connect Wallet</button>
 {:else} 
 <p> Wallet connected! </p>
  <Wave/>
{/if}
</main>

<style>
</style>