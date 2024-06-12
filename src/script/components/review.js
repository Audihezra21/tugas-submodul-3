const cardReview = (reviewList) => `
   <div class="review-content">
            <i class="fa-solid fa-circle-user"></i>
          <div class="review-inner" tabindex="0">
            <h3>${reviewList.name}</h3>
            <p>${reviewList.date}</p>
            <p>"${reviewList.review}"</p>
          </div>  
        </div>
`;

export default cardReview;
