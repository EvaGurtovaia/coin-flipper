import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helpers";

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {
                side: "heads",
                imgSrc: "https://i.ucoin.net/coin/43/992/43992121-2/russia-1-ruble-1998.jpg",
            },
            {
                side: "tails",
                imgSrc: "https://en.numista.com/catalogue/photos/russie/33-original.jpg",
            },
        ],
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoinPos: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState((st) => {
            let newState = {
                ...st,
                currCoinPos: newCoin,
                numFlips: st.numFlips + 1,
            };
            if (newCoin.side === "heads") {
                newState.numHeads += 1;
            } else {
                newState.numTails += 1;
            }
            return newState;
        });
    }
    handleClick(e) {
        this.flipCoin();
    }
    render() {
        return (
            <div className="CoinContainer">
                <h2>Let's flip a coin</h2>
                {this.state.currCoinPos && (
                    <Coin data={this.state.currCoinPos} />
                )}

                <p>
                    Out of {this.state.numFlips} flips, there have been
                    {this.state.numHeads} heads and {this.state.numTails} tails
                </p>
                <button onClick={this.handleClick}>Flip Me!</button>
            </div>
        );
    }
}
export default CoinContainer;
