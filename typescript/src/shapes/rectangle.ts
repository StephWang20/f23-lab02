// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }

function Rectangle(width: number, height: number): Shape {
    return {
        width,
        height,
        sideLen : 0,
        radius : 0,
        computeArea: function (): number {
            return width * height
        }
    }
}

export { Rectangle }
