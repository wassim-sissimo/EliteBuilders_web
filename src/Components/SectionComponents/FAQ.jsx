import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


const questions = [
  { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a.?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et urna eu mauris dapibus bibendum non ac nisl. Ut iaculis arcu eu posuere cursus. Nulla tincidunt pulvinar nisl, sit amet." },
  { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a. ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et urna eu mauris dapibus bibendum non ac nisl. Ut iaculis arcu eu posuere cursus. Nulla tincidunt pulvinar nisl, sit amet." },
  { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a. ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et urna eu mauris dapibus bibendum non ac nisl. Ut iaculis arcu eu posuere cursus. Nulla tincidunt pulvinar nisl, sit amet." },
  { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a. ?", answer: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et urna eu mauris dapibus bibendum non ac nisl. Ut iaculis arcu eu posuere cursus. Nulla tincidunt pulvinar nisl, sit amet." },
  { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a. ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et urna eu mauris dapibus bibendum non ac nisl. Ut iaculis arcu eu posuere cursus. Nulla tincidunt pulvinar nisl, sit amet." },
  { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a. ?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et urna eu mauris dapibus bibendum non ac nisl. Ut iaculis arcu eu posuere cursus. Nulla tincidunt pulvinar nisl, sit amet." },
];

export function FAQ() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="mt-20 bg-[#073a68]">
      <div className="w-full ">
        <div className="flex flex-wrap py-10 px-10">
          <h1 className="w-full md:w-1/2 p-8 text-6xl text-[#F4E9B5] text-center">
            Questions Fréquentes (FAQ)
          </h1>
          <div className="w-full md:w-1/2 p-8 text-center">
            <p className="text-[#F4E9B5]">
              Explorez nos réponses aux questions fréquemment posées et découvrez comment nous contacter pour une assistance personnalisée. Votre aventure commence ici.
            </p>
            <button className="py-3 px-4 bg-[#4796A8] font-bold rounded-[25px] uppercase text-[#F4E9B5] mt-3">
              Contact
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center p-8 gap-3">
          {questions.map((q, index) => (
            <div key={index} className="w-full max-w-md px-8">
              <Accordion open={open === index + 1} className="mb-4">
                <AccordionHeader onClick={() => handleOpen(index + 1)} className="text-[#F4E9B5] hover:text-[#f4eab5a6]">
                  {q.question}
                </AccordionHeader>
                <AccordionBody className="text-[#F4E9B5]">
                  {q.answer}
                </AccordionBody>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
