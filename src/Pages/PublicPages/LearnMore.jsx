import { useState } from 'react';
import { useTranslation } from 'react-i18next';


const LearnMoreSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const {t} = useTranslation();

  const toggleAnswer = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const questionsAndAnswers = [
    {
      question: "How do I create an online store?",
      answer: "To create your online store, start by choosing a platform, designing your website, adding products, setting up payment methods, and launching your store.",
    },
    {
      question: "How long does it take to set up my online store?",
      answer: "The setup time varies depending on your product range and customization. Typically, it takes anywhere from a few days to a couple of weeks to fully set up.",
    },
    {
      question: "How much does it cost to run an online store on Wegostores?",
      answer: "The cost depends on the plan you choose. We offer different pricing tiers based on your business needs, from basic to advanced plans with additional features.",
    },
    {
      question: "What products should I sell on my online store?",
      answer: "Focus on products you're passionate about and that have demand in the market. Consider niche products that cater to specific customer needs or problems.",
    },
    {
      question: "Will my online store be optimized for mobile customers?",
      answer: "Yes, all our templates are mobile-friendly, and your store will be automatically optimized for mobile customers without additional effort on your part.",
    },
  ];

  return (
    <section className="px-4 py-16 text-mainColor bg-secoundColor">
      {/* Section Title */}
      <h2 className="mb-2 text-3xl font-bold text-center ">{t("Learn more about starting an online store")}</h2>
      <p className="mb-8 text-lg text-center text-gray-600 ">
       {t("Need help creating your online store? We're ready to assist you. We'll answer your common questions in detail.")}
      </p>

      {/* Rows */}
      <div className="w-full space-y-6 p-7">
        {questionsAndAnswers.map((item, index) => (
          <div
          data-aos="flip-up" 
          data-aos-delay="300"
            key={index}
            className="p-6 transition-transform duration-200 border-b rounded-lg shadow-lg border-mainColor "
          >
            {/* Question and Icon */}
            <div className="flex items-center justify-between w-full cursor-pointer" onClick={() => toggleAnswer(index)}>
              {/* Text on Left */}
              <div className="flex items-center w-10/12 space-x-4">
                <p className="text-xl font-semibold text-mainColor">{t(`${item.question}`)}</p>
              </div>
              {/* Icon on Right with hover effect */}
              <div className="flex items-center justify-end w-2/12 space-x-4">
                <span className="text-2xl transition-colors duration-300 text-mainColor hover:text-blue-200">+</span>
              </div>
            </div>

            {/* Answer text */}
            {selectedQuestion === index && (
              <p className="mt-4 text-xl text-mainColor"           data-aos="flip-down" 
>{t(`${item.answer}`)}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnMoreSection;
