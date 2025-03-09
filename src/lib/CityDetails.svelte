<script>
	let { currentCityName, currentCityDetails } = $props();
</script>

<div class="detail-card">
	<h2>Visit {currentCityName}</h2>
	<img src={currentCityDetails.photoUrl} alt="{currentCityName} skyline"/>
</div>

<style>
	h2 {
		margin: 0px;
	}
	.detail-card {
		border: 1px solid darkblue;
		margin: 0px 1px 1px 1px;
		padding: 1rem;
	}
</style>