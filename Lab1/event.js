const f1 = () => {
    log('F1');

}
const f2 = () => {
    log("F2");
}
const f3 = () => {
    log("F3")
}
const main = () => {
    log("main");
    f1();
    f2();
    f3();
    log("end");
}