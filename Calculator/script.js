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
                text: ` ${exp} = ${eval(exp)} `,
                icon: "success",
              });
        } catch (error) {
            console.error(error + " for expression : " + exp);
            swal({
                title: "Calculation Not Done!",
                text: `${error} in ${exp}`,
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