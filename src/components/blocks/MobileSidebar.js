import React from "react"
import Drawer from "@material-ui/core/Drawer"
import { NavLink } from "react-router-dom"
import InboxIcon from "@material-ui/icons/Inbox"
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks"
import LibraryAddIcon from "@material-ui/icons/LibraryAdd"
import SchoolIcon from "@material-ui/icons/School"
import Close from "@material-ui/icons/Close"

export default class MobileSidebar extends React.Component {
    render() {
        const cardsToReview = this.props.decks
            .map(deck => deck.cardsToReview().length)
            .reduce((a, b) => a + b, 0)

        const cardsToLearn = this.props.decks
            .map(deck => deck.cardsToLearn().length)
            .reduce((a, b) => a + b, 0)

        return (
            <Drawer open={this.props.open} onClose={this.props.onClose}>
                <div className="drawer sidebar">
                    <div id="flipcardHeader">
                        <Close id="logoutButton" onClick={this.props.onClose} />
                    </div>
                    <NavLink to="/review" activeClassName="active">
                        <InboxIcon /> Review ( {cardsToReview} )
                    </NavLink>
                    <NavLink to="/learn" activeClassName="active">
                        <SchoolIcon /> Learn ( {cardsToLearn} )
                    </NavLink>
                    {/* <NavLink to="/settings" activeClassName="active">
                        <SettingsIcon /> Settings
                    </NavLink> */}
                    <br />
                    <p className="title">DECKS</p>
                    {this.props.decks.map(deck => (
                        <NavLink
                            to={"/deck/" + deck.id}
                            activeClassName="active"
                            key={deck.id}
                            className="deck"
                        >
                            <LibraryBooksIcon /> {deck.name}
                        </NavLink>
                    ))}
                    <a onClick={this.props.createNewDeck}>
                        <LibraryAddIcon /> New Deck
                    </a>
                </div>
            </Drawer>
        )
    }
}