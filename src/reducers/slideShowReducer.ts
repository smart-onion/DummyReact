type Direction = "left" | "right";

export default function changeSlideReducer(state: number, action: {type: Direction, payload: string[]}): number {
    if (action.type === "left") {
        state--;
        if (state < 0) state = action.payload.length - 1;
    } else {
        state++;
        if (state > action.payload.length - 1) state = 0;
    }
    return state;
}