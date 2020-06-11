import React from 'react';


class ShelfIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchShelves(this.props.shelfId);
    }
    render () {
        let bookshelves = Object.values(this.props.shelves).map(shelf => {
            return shelf.name
        })
        return (
            <div>
                {bookshelves}
            </div>
        )
    }
}

export default ShelfIndex;