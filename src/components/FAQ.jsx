import FAQItem from './FaqItem';
import LastPitch from './LastPitch';

const FAQ = (props) => {
  const faqs = [
    {
      id: 1,
      question: 'Why use Degreement instead of a Title company?',
      answer:
        'If saving days and weeks worth of time in closing a sale matters to you, use Degreement. We also make \
        the seller financing process simple and intuitive, allowing you and your client to focus on only the most \
        important details. Title companies have not innovated significantly in decades and still use manual systems for \
        all of their services, even if they are digital.',
    },
    {
      id: 2,
      question: 'Which blockchain do you use?',
      answer:
        'Bitcoin. We chose Bitcoin to build on top of because it is the most decentralized protocol \
        in the world and operates on proof-of-work, which means there is no centralized issuer. \
        It is the most resilient decentralized network when compared to any other blockchain in existence,\
        which ensures secure transactions, immutability of records, and endurance against centralized actors.',
    },
    {
      id: 3,
      question:
        'Do you have your own cryptocurrency for investors or operations?',
      answer:
        'No. There is no sense for a company to create a cryptocurrency or blockchain for itself. \
      Blockchains derive their utility from decentralization - if we were to create our own blockchain, it would be centralized. \
      It is much more efficient to use a simple database for any operational data instead. As for investors, \
      if we ever seek investment, it would be through traditional stocks - we prefer to stick to regulated securities :)',
    },
    {
      id: 4,
      question: 'Is all of this legal?',
      answer:
        'Yes. Our services fit within the current legal framework for property transactions. We follow the same \
         requirements to conduct transactions, just through a more efficient process. See our "How it works" \
        page to get a better understanding.',
    },
  ];

  return (
    <div id='faqs'>
      <div id='faqs-holder'>
        <h1>FAQs</h1>
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            content={{ question: faq.question, answer: faq.answer }}
          />
        ))}
      </div>
      <LastPitch onRequest={props.onRequest} />
    </div>
  );
};

export default FAQ;
