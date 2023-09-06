function circle(radius: number): Shape {
    return {
        radius,
        width: 0,
        height: 0,
        sideLen: 0,
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { circle }
