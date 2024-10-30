import React, { useEffect, useState } from 'react';

function App() {
    const [firstReviewDate, setFirstReviewDate] = useState('');
    const [lastReviewDate, setLastReviewDate] = useState('');
    const [totalReviews, setTotalReviews] = useState('');

    useEffect(() => {
        async function fetchReviewData() {
            try {
                const response = await fetch('http://127.0.0.1:5000/reviews');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setFirstReviewDate(data.first_review_created_at);
                setLastReviewDate(data.last_review_created_at);
                setTotalReviews(data.total_reviews);
            } catch (error) {
                console.error('Error fetching review data:', error);
            }
        }

        fetchReviewData();
    }, []);

    return (
        <div className="App">
            <h1>Review Data</h1>
            <div id="review-data">
                <p>First Review Date: <span id="first-review-date">{firstReviewDate}</span></p>
                <p>Last Review Date: <span id="last-review-date">{lastReviewDate}</span></p>
                <p>Total Reviews: <span id="total-reviews">{totalReviews}</span></p>
            </div>
        </div>
    );
}

export default App;