import React from 'react'
import Container from '../../../components/Container'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Text from '@/components/Text'

const FaqAccordian = () => {

  const faqss = [
    {
      "question": "How does your strategy differ from simple index investing?",
      "answer": "While index investing is passive, our strategy actively manages risk and leverages momentum for superior returns."
    },
    {
      "question": "Is this strategy suitable for beginners?",
      "answer": "Absolutely! Our algorithmic approach takes the emotion out of trading, making it ideal for investors of all experience levels."
    },
    {
      "question": "How often does the strategy trade?",
      "answer": "Our system operates on weekly charts, resulting in lower trading frequency and reduced costs compared to daily strategies."
    },
    {
      "question": "Can I use this strategy with a small capital?",
      "answer": "Yes! Our strategy is scalable and can be implemented with various investment amounts."
    },
    {
      "question": "What's the minimum investment period you recommend?",
      "answer": "For optimal results, we suggest a minimum investment horizon of 3-5 years."
    },
    {
      "question": "How do you handle taxes in your backtesting?",
      "answer": "Our backtesting includes a conservative estimate for taxes and transaction costs to provide realistic performance figures."
    },
    {
      "question": "Can I implement this strategy myself?",
      "answer": "Yes, definitely! You can implement this strategy on your own."
    },
    {
      "question": "What happens if there's a sudden market crash?",
      "answer": "Our strategy is designed to quickly move to cash during significant downtrends, minimizing losses during market crashes."
    },
    {
      "question": "How do I get started?",
      "answer": "Simply click the 'Start Investing' button below, make the payment, and email us the receipt. We'll have you up and running within 24 hours!"
    }
  ]
  
  return (
    <Container>
      <Text variant="h2" className="text-[25px] font-semibold text-center text-black/90 mb-8">
      Got Questions? We've Got Answers!
      </Text> 
         <Accordion type="single" collapsible defaultValue="quest-0" className="w-full border border-1 rounded-sm">
        {faqss.map((item, index) => (
      <AccordionItem value={`quest-${index}`} key={`quest-${index}`}  className="border-b-2">
        <AccordionTrigger className="data-[state=open]:bg-zinc-100 text-[18px] font-semibold px-3 text-black/90 py-3">{item.question}</AccordionTrigger>
        <AccordionContent className="px-3 py-5 text-[16px] font-semibold text-black/80">
         {item.answer}
        </AccordionContent>
      </AccordionItem>
      ))}
    </Accordion>
    </Container>
  )
}

export default FaqAccordian