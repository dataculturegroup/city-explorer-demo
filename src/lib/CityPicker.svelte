<script>
	let { currentCityName, onCityChange, cityNames} = $props();
</script>

<nav class="menu">
  <ul>
		{#each cityNames as name}
			<li class={name == currentCityName ? "active" : ""}>
				<a href="#{name}" onclick={() => onCityChange(name)}>{name}</a>
			</li>
		{/each}
  </ul>
</nav>

<style>
	ul {
		margin: 0;
		padding: 0px;
	}
	li {
		display: inline-block;
		padding: 0.5rem 1rem;
		background-color: #ccc;
		margin: 1px 1px 0px 1px;
		border-radius: 10px 10px 0px 0px;
	}
	li.active {
		background-color: darkblue;
		a {
			color: white;
		}
	}
</style>