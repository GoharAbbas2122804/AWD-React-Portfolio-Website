import Experience from "../components/Experience"
import { MacbookScroll } from "../components/ui/macbook-scroll"
import { TimelineDemo } from "../components/ui/timeline2"

const About = () => {
  return (
    <div className="h-full w-full overflow-x-hidden pt-24">
      <Experience />
      <MacbookScroll  />
      {/* <Timeline  data={null}/> */}
      <TimelineDemo />
      
    </div>
  )
}

export default About