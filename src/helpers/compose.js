export default (...funcs) => {
    return wrapped => funcs.reduceRight((prevFunc, currentFunc) => currentFunc(prevFunc), wrapped);
}
