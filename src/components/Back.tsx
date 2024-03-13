import React from 'react';

const BackButton: React.FC = () => {
  const goBack = () => {
    window.history.back(); // This function navigates back using the browser's history
  };

  return (
    <button onClick={goBack} type="button" className="w-full ml-[230px] flex items-center justify-center duration-200 text-white   gap-x-2 sm:w-auto     hover:text-yellow-500  font-another-font font-semibold text-[17px] ">
<svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>
<span>Back</span>
</button>

  );
};

export default BackButton;

