<script>
  let count = 0

  const handlerIncrease = () => count++
  const handlerDecrease = () => count--
</script>

<div>
  <h2>Counter</h2>
  <p>
    Counter:
    <b class:green={count > 0} class:red={count < 0}> {count}</b>
  </p>
  <button on:click={handlerIncrease}>-</button>
  <button on:click={handlerDecrease}>+</button>
</div>

<style>
  div {
    width: 120px;
  }
  .red {
    color: red;
  }
  .green {
    color: green;
  }
  button {
    width: 50px;
  }
</style>
