import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import React Icons
import { useNavigate } from 'react-router-dom';
import start from '../../assets/Images/Star'
import Star from '../../assets/Images/Star';
const CustomerReviewsSlider = () => {
  const navigate = useNavigate()
  const { t } = useTranslation();
  const reviews = [
    { name: "Ahmed Hassan", review: "Amazing service! I couldn't be happier with the results.", rating: 5 },
    { name: "Fatima Ali", review: "Fantastic experience! Highly recommend their services.", rating: 5 },
    { name: "Mohamed Saeed", review: "Top-notch service, they really care about their customers!", rating: 5 },
    { name: "Amina Youssef", review: "Wonderful experience. The team was very professional!", rating: 5 },
    { name: "Hassan Khalil", review: "Great product, would definitely buy again.", rating: 5 },
    { name: "Mona Ibrahim", review: "Very satisfied with my purchase. Highly recommend!", rating: 5 },
    { name: "Omar Reda", review: "Service was good but could improve on response time.", rating: 5 },
    { name: "Salma Nabil", review: "Excellent quality, and fast shipping!", rating: 5 },
    { name: "Khaled Mahmoud", review: "Overall a positive experience. Would recommend.", rating: 5 },
    { name: "Laila Tarek", review: "Great customer support and very helpful team.", rating: 5 }
  ];

  const handleNavigate =()=>{
    navigate('/signUp')

   }
  return (
    <section className="px-10 py-16 mt-10 bg-mainColor">
      {/* Section Title */}
      <h2 className="mb-4 text-3xl font-bold text-center text-secoundColor">{t("What Our Customers Say About Us")}</h2>
      <p className="mb-8 text-lg text-center text-gray-300">{t("Don't take our word, hear from them.")}</p>

      {/* Scrollable Row */}
      <div className="flex items-start pb-6 space-x-6 overflow-x-auto text-start scrollbar-hide">
        {/* Loop through the reviews to create 10 cards */}
        {reviews.map((review, index) => (
          <div
            key={index}
            className="items-start flex-shrink-0 p-6 rounded-lg shadow-lg w-76 bg-secoundColor"
          >
            <h3 className="mb-4 text-xl font-semibold text-start text-mainColor">{t(`${review.name}`)}</h3>
            <p className="mb-4 text-gray-700 text-start">{t(`${review.review}`)}</p>
            {/* Star Rating */}
            <div className="flex justify-start mb-4">
              {[...Array(5)].map((_, index) => (
                <span key={index}  
            >
                  {index < review.rating ? (
                    <Star className="w-6 h-6 text-mainColor" />
                  ) : (
                    <FaRegStar className="w-6 h-6 text-mainColor" />
                  )}
                </span>
              ))}
            </div>
            {/* <button
            onClick={handleNavigate}
            className="w-full px-4 py-2 text-center rounded-full bg-mainColor text-secoundColor">{t("See More")}</button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviewsSlider;
