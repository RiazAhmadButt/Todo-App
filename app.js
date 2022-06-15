function deleteItem(addBtn) {
    $(addBtn.currentTarget).parent().remove();
}
function count() {
    var checklist = $('input:checkbox').not(':checked').length;
    $('#pending').text(`You have ${checklist} pending task`)
}
$(document).ready(function () {
    $("#Addbtn").click(function () {
        var input = $("#inp").val();
        $("ul").append(`<li><input type="checkbox" name="DeleteBtn" id="del">${input} <button class="Dbtn" ><i class="fas fa-trash-alt text-danger fa-2x"></i></button></li>`)
        $("#inp").val("");
        $('.Dbtn').click(function (e) {
            deleteItem(e);
        });
        count();
    });
    $("#clearAll").click(function () {
        $("ul").empty();
        count();
    });
    $('.Dbtn').click(function (e) {
        deleteItem(e);
        count();
    });
    $('input:checkbox').click(function () {
        count();
    });

})