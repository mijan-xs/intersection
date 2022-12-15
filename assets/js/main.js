const unlucky = document.querySelector(".unlucky");
const observer = new IntersectionObserver(entries => {
	entries.forEach((entry, index) => {
		if(entry.isIntersecting){
			entry.target.insertAdjacentHTML("beforeend",`<span class="badge">Lucky</span>`);
			console.log("🚀 ~ file: main.js:7 ~ entries.forEach ~ entry", entry)
		}else{
			unlucky.querySelector(".badge").remove();
		}
	})
})

observer.observe(unlucky);