function square(sideLen: number): Shape {
    return {
        sideLen,
        width: 0,
        height: 0,
        radius : 0,
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { square }