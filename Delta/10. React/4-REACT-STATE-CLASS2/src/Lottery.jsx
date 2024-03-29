import { useState } from "react";
// import "./Lottery.css";
import {genTicket, sum} from "./LotetryHelper"
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n=3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinnning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game</h1>
            {/* <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div> */}
            <Ticket ticket={ticket} />
            <br />
            <Button action={buyTicket} />
            <h3>{isWinnning && "congratulation you won !"}</h3>
        </div>
    );
}