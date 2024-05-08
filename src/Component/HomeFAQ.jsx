import React, { useState } from 'react';

const HomeFAQ = () => {
    const AccordionItem = ({ title, content }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className='mt-10'>
                <button
                    className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border  border-[#1D70DF] rounded-t-xl  hover:bg-gray-100 gap-3"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen ? 'true' : 'false'}
                >
                    <span>{title}</span>
                    <svg
                        className={`w-3 h-3 rotate-${isOpen ? '0' : '180'} shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
                {isOpen && (
                    <div className="p-5 border  border-[#1D70DF]">
                        {content}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className='my-10 max-w-[950px]'>
            <p className="mt-10 text-gradient font-montserrat font-bold text-4xl md:text-3xl lg:text-4xl ">
                FAQ
            </p>
            <div id="accordion-collapse "  data-accordion="collapse">
                <AccordionItem
                    title="Can education flashcards be used for all age groups?"
                    content={
                        <>
                            <p className="mb-2 text-gray-500">Yes, education flashcards can be tailored to suit the learning needs of all age groups, from children to adults, by adjusting content complexity and presentation style.</p>
                           
                        </>
                    }
                />
                <AccordionItem
                    title="How do education flashcards work?"
                    content={
                        <>
                            <p className="mb-2 text-gray-500">Education flashcards work by presenting information on one side and its corresponding answer on the other, facilitating active recall and memorization. Users review the flashcards repeatedly, reinforcing their understanding and retention of key concepts. This method leverages spaced repetition to optimize learning efficiency and aid in test preparation..</p>
                           
                        </>
                    }
                />
                <AccordionItem
                    title="Can education flashcards be used for test preparation?"
                    content={
                        <>
                            <p className="mb-2 text-gray-500">Yes, education flashcards can be highly effective for test preparation. They provide a convenient way to review key concepts and information. By using flashcards, learners can actively engage with the material, aiding in memory retention. Additionally, the repetitive nature of flashcard use helps reinforce learning and improves recall during exams.</p>
                            
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default HomeFAQ;
