import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQContent() {
    return(
        <>
        <div className="w-full border text-white border-white p-2 rounded-lg ">
            <Accordion defaultValue={["item-1"]}>
                <AccordionItem  value="item-1">
                    <AccordionTrigger className="cursor-pointer text-[#F3BF93]">Open to work?</AccordionTrigger>
                    <AccordionContent>
                    Yes. Internships, freelance, or full time
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="cursor-pointer text-[#F3BF93]">What roles you looking for?</AccordionTrigger>
                    <AccordionContent>
                    Junior web dev or full-stack roles. with React and Node.js
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="cursor-pointer text-[#F3BF93]">Remote or onsite?</AccordionTrigger>
                    <AccordionContent>
                    Both is fine. I'm in the Philippines, happy to overlap hours with your team.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className="cursor-pointer text-[#F3BF93]">How fast you reply?</AccordionTrigger>
                    <AccordionContent>
                    Usually within 24 hours. but on weekends I reply a little slow, I rest on Sat and Sun.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger className="cursor-pointer text-[#F3BF93]">What stack you use?</AccordionTrigger>
                    <AccordionContent>  
                    React, Tailwind, Node.js, Express, PostgreSql, Prisma ORM
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
        
        </>
    );
}