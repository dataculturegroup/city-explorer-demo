<script>
	import cityInfo from "./cityinfo.json";
	import CityPicker from "./CityPicker.svelte";
	import CityDetails from "./CityDetails.svelte";

	const cityNames = cityInfo.map(c => c.name);
	let currentCityName = $state("Boston");

	const currentCityDetails = $derived.by(() => {
		if (cityNames.includes(currentCityName)) {
			return cityInfo.find(city => city.name == currentCityName);
		} else {
			return {};
		}
	});
																				 
	function onCityChange(newCityName) {
		currentCityName = newCityName;
	}
</script>

<div id="explorer">
	<CityPicker {currentCityName} {onCityChange} {cityNames} />
	<CityDetails {currentCityName} {currentCityDetails} />
</div>

<style>
#explorer {
	max-width: 600px;
	overflow: clip;
}
</style>