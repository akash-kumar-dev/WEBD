import { useState } from "react"

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    let [arr, setArrr] = useState(["no moves"]);

    /*
    let updateBlue = () => {
        moves.blue += 1;
        console.log(`moves.blue = ${moves.blue}`);
        setMoves(moves);
    }   // Recat can't check for any change in Object so DOM will not update
    // because in JS array and objects do not change there Address after updation
    // so we use here spread Method this will create copy of object and thus generate new Address of obj.
    */

    let updateBlue = () => {
        setMoves((prevMoves) => {
            return ({ ...prevMoves, blue: moves.blue + 1 });
        });

        // setArrr([...arr, "blue-moves"]);
        // setArrr((prevArr) => {
        //     return [ ...prevArr, "blue-moves"]
        // })

    };

    let updateYellow = () => {
        setMoves((prevMoves) => {
            return ({ ...prevMoves, yellow: moves.yellow + 1 });
        });
    };

    let updateGreen = () => {
        setMoves((prevMoves) => {
            return ({ ...prevMoves, green: moves.green + 1 });
        });
    };

    let updateRed = () => {
        setMoves((prevMoves) => {
            return ({ ...prevMoves, red: moves.red + 1 });
        });
    };

    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>

                <p>Yellow moves = {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>

                <p>Green moves = {moves.green}</p>
                <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>

                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}