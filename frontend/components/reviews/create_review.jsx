import React from 'react';


class CreateReview extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.review;
        this.defineAction = this.defineAction.bind(this)

    }
    defineAction() {
        // debugger
        if (this.props.type === 'save') {
            return this.props.createReview
        } else {
            return this.props.updateReview
        }
    }
    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }
    handleSubmit(e) {
        // debugger
        e.preventDefault();
        let action = this.defineAction()
        action(this.state).then(() => this.props.history.push(`/books/${this.state.book_id}`));
    }

    render() {
       
        return (
            <div id="reviewForm">
                <form id="formBox" onSubmit={this.handleSubmit}>
                    <div id="ratingDiv">
                        <label id="myRating">{`${this.props.userName}, `}<span id="secondHalf">start your review of {this.props.bookTitle}</span></label>
                        {/* <div className="rating">
                            <input type="radio" id="star5" name="rate" value="1" onChange={this.update('rating')} />
                            <label htmlFor="star5" title="text"></label>
                            <input type="radio" id="star4" name="rate" value="2" onChange={this.update('rating')} />
                            <label htmlFor="star4" title="text"></label>
                            <input type="radio" id="star3" name="rate" value="3" onChange={this.update('rating')} />
                            <label htmlFor="star3" title="text"></label>
                            <input type="radio" id="star2" name="rate" value="4" onChange={this.update('rating')} />
                            <label htmlFor="star2" title="text"></label>
                            <input type="radio" id="star1" name="rate" value="5" onChange={this.update('rating')} />
                            <label htmlFor="star1" title="text"></label>
                        </div> */}
                        <div class="rate">
                            <input type="radio" id="star5" name="rate" value="5" onChange={this.update('rating')} />
                            <label for="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" onChange={this.update('rating')}/>
                            <label for="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" onChange={this.update('rating')}/>
                            <label for="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" onChange={this.update('rating')}/>
                            <label for="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" onChange={this.update('rating')}/>
                            <label for="star1" title="text">1 star</label>
                        </div>
                    </div>
                    <br />
                    <div id='reviewQuestion'>
                        <label>What did you think?
                    </label>
                    </div>
                    <div>
                        <textarea
                            className="reviewText"
                            placeholder="Enter your review"
                            value={this.state.body}
                            rows="12"
                            onChange={this.update('body')}
                        />
                    </div>

                    <input className="submit" type="submit" value={this.props.type} />
                </form>
            </div>
        );
    }
   
}

export default CreateReview;

