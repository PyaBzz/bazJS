class bazMath {
    constructor() {
        throw "Don't instantiate static class bazMath."
    }
    static sigmoid(x) { return x / (1 + Math.abs(x)) };
}
