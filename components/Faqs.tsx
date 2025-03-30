const FAQ = () => {
    const faqs = [
      {
        question: "What features does Thodi Baat offer?",
        answer:
          "Thodi Baat provides a platform where users can chat, manage tasks, and create content. It's designed to help you stay connected, organized, and creative all in one place.",
      },
      {
        question: "Can I use Thodi Baat for team collaboration?",
        answer:
          "Yes, Thodi Baat is perfect for team collaboration. You can create group chats, assign tasks, and work together on content creation seamlessly.",
      },
      {
        question: "Is Thodi Baat suitable for personal use?",
        answer:
          "Absolutely! Whether you want to organize your personal tasks, chat with friends, or work on personal content projects, Thodi Baat is versatile enough for both personal and professional use.",
      },
      {
        question: "Does Thodi Baat offer integrations with other tools?",
        answer:
          "Currently, Thodi Baat is focused on providing an all-in-one solution within the app itself. However, we are working on adding integrations with popular tools in future updates.",
      },
    ];
  
    return (
      <div className="max-w-4xl mx-auto py-12 px-6 mb-12">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FAQ;
  