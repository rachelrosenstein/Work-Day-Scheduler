$(".saveBtn").click(function () {
    var scheduleInputs = $(this).siblings(".event").val();
    var inputsLocation = $(this).siblings(".event").attr("id");
    localStorage.setItem(inputsLocation, scheduleInputs);
});

$(".event").each(function () {
    var renderInputs = $(this).attr("id")
    $(this).val(localStorage.getItem(renderInputs));
    if (renderInputs === null) {
        return;
    };
});

function renderStoredInputs() {
    $(".event").each(function () {
        var inputId = $(this).attr("id")
        $(this).val(localStorage.getItem(inputId));
    });
};
renderStoredInputs();

