import AboutContent from "@/components/windows/AboutContent"
import ContactContent from "@/components/windows/ContactContent"
import FAQContent from "@/components/windows/FAQContent"
import LinksContent from "@/components/windows/LinksContent"
import ProjectsContent from "@/components/windows/ProjectsContent"

import about from "@/options/about.svg"
import links from "@/options/links.svg"
import works from "@/options/works.svg" 
import faq from "@/options/faq.svg"
import contact from "@/options/contact.svg"

export const windowRegistry = [
  { id: "about",    title: "About",   icon: about,    label: "About",   component: AboutContent },
  { id: "projects", title: "Works",   icon: works,    label: "Works",   component: ProjectsContent },
  { id: "faq",      title: "FAQ",     icon: faq,      label: "FAQ",     component: FAQContent },
  { id: "links",    title: "Links",   icon: links,    label: "Links",   component: LinksContent },
]


