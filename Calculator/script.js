function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}
function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        try {
            document.form.textview.value = eval(exp);
            swal({
                title: "Calculation Done!",
                text: `The Calculated value is: ${eval(exp)}`,
                icon: "success",
              });
        } catch (error) {
            swal({
                title: "Calculation Not Done!",
                text: `${error}`,
                icon: "error",
              });
        }
    }
}
function clean() {
    document.form.textview.value = "";
}
function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}