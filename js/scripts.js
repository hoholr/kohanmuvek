$(".modal.show").modal('show');

function villanyShow(){
	$(".toggle.klima").hide();
	$(".toggle.villany").show();
	$(".tgl-btn-villany").addClass("d-none").removeClass("d-flex");
	$(".tgl-btn-klima").addClass("d-flex").removeClass("d-none");
}

function klimaShow(){
	$(".toggle.villany").hide();
	$(".toggle.klima").show();
	$(".tgl-btn-klima").addClass("d-none").removeClass("d-flex");
	$(".tgl-btn-villany").addClass("d-flex").removeClass("d-none");
}

console.log("Csá OP");