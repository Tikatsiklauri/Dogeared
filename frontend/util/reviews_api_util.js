export const fetchReviews = book_id => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${book_id}/reviews`,
    })
);

export const fetchReview = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews/${id}`
    })
);

export const createReview = (review) => (
    $.ajax({
        method: 'POST',
        url: `/api/reviews`,
        data: { review }
    })
);

export const updateReview = review => (
    $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
);

export const deleteReview = id => (
    $.ajax({
        url: `/api/reviews/${id}`,
        method: 'DELETE'
    })
);