<script lang="ts">
  let currencyOne = 0
  let selectedOne = 'RUB'
  let selectedTwo = 'USD'
  let currencyTwo = 0
  let arrCurrency = ['RUB', 'USD', 'EUR', 'CAD']
  async function convertCurrency(inputField: string) {
    if (inputField === 'currencyOne') {
      currencyTwo = currencyOne * await getConvertCurrency(selectedOne, selectedTwo);
    } else if (inputField === 'currencyTwo') {
      currencyOne = currencyTwo / await getConvertCurrency(selectedOne, selectedTwo);
    }
  }
  async function getConvertCurrency(currencyFrom: string, currencyTo: string) {
    var response = await fetch('https://open.er-api.com/v6/latest/' + currencyFrom);
    let result = await response.json();
    return (result.rates[currencyTo]);
  }
</script>
<div class="two-currency">
  <div class="currency">
    <div class="currency-input">
      <input type="number" bind:value={currencyOne} on:input={() => convertCurrency('currencyOne')}>
    </div>
    <div class="currency-select">
      <select bind:value={selectedOne} on:change={() => convertCurrency('currencyOne')}>
        {#each arrCurrency as currency}
        <option>{currency}</option>
        {/each}
      </select>
    </div>
  </div>
  <div class="currency">
    <div class="currency-input">
      <input type="number" bind:value={currencyTwo} on:input={() => convertCurrency('currencyTwo')}>
    </div>
    <div class="currency-select">
      <select bind:value={selectedTwo} on:change={() => convertCurrency('currencyOne')}>
        {#each arrCurrency as currency}
        <option>{currency}</option>
        {/each}
      </select>
    </div>
  </div>
</div>
  
<style>
  .two-currency
  {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .currency 
  {
    height: 50px;
    display: flex;
    flex-direction: row;
    border: 1px solid #dcdcdc;
    padding: 5px;
    border-radius: 10px;
  }
  .currency-input input 
  {
    border: none;
    height: 100%;
  }
  .currency-select select
  {
    font-weight: bold;
    height: 100%;
    border-radius: 10px;
    border: none;
    background: #dcdcdc;
    cursor: pointer;
  }
  input, select
  {
    outline:none;
  }
</style>
