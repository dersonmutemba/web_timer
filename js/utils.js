function valueintwodigits(value) {
    if (value.length == 1) {
        value = '0' + value;
    }
    if (value.length == 0) {
        value = '00';
    }
    return value;
}