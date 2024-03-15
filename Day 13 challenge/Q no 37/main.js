function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "Always be Positive"; }
    console.log("Makin a T-shirt of ".concat(size, " size and message written on it is ").concat(message));
}
make_shirt();
make_shirt("small", "Good things take time");
make_shirt("medium");
