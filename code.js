// Функция ввода чисел
function insert(num) {
  document.form.field.value = document.form.field.value + num;
}
// Функция очистки содержимого
function clean() {
  document.form.field.value = "";
}
// Функция квадратного корня
function squareRoot() {
  document.form.field.value = Math.sqrt(eval(document.form.field.value));
}
// Функция возведения в квадрат
function squaring() {
  document.form.field.value = Math.pow(eval(document.form.field.value), 2);
}
// Функция подсчета суммы
function equally() {
  let exp = document.form.field.value;
  if (exp) {
    document.form.field.value = eval(exp);
  }
}
