import React from "react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  const backToHome = async () => {
    navigate("/");
  };

  return (
    <div className="mt-7 flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
      <p className="text-left">
        Welcome to our Forum! By accessing our website and using our services,
        you agree to be bound by the following terms and conditions. If you do
        not agree with any part of these terms, please do not use our website.
      </p>
      <ul className="text-xl font-bold mt-8 mb-4">Acceptance of Terms</ul>
      <p className="text-left">
        By accessing or using our Forum, you agree to be bound by these Terms
        and Conditions, as well as all applicable laws and regulations. You are
        responsible for compliance with any applicable local laws.
      </p>
      <ul className="text-xl font-bold mt-8 mb-4">User-Generated Content</ul>
      <p className="text-left">
        Users are responsible for the content they post. Content that is
        illegal, obscene, threatening, defamatory, invasive of privacy,
        infringing on intellectual property rights, or otherwise injurious to
        third parties or objectionable is prohibited.
      </p>
      <ul className="text-xl font-bold mt-8 mb-4">Copyright</ul>
      <p className="text-left">
        By posting content on our Forum, you grant us a non-exclusive,
        royalty-free license to use, reproduce, modify, adapt, publish,
        translate, create derivative works from, distribute, and display such
        content throughout the world in any media.
      </p>
      <ul className="text-xl font-bold mt-8 mb-4">Privacy</ul>
      <p className="text-left">
        Your privacy is important to us. Our Privacy Policy explains how we
        collect, use, and protect your personal information. By using our Forum,
        you agree to the collection and use of information in accordance with
        our Privacy Policy.
      </p>
      <ul className="text-xl font-bold mt-8 mb-4">Disclaimer of Warranties</ul>
      <p className="text-left">
        Our Forum is provided on an "as is" and "as available" basis. We do not
        warrant that the site or any of its content will be uninterrupted or
        error-free.
      </p>
      {/* <button
        onClick={backToHome}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </button> */}
    </div>
  );
};

export default Terms;
