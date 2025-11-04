import { MacbookScroll } from "../components/ui/macbook-scroll"
import { Timeline } from "../components/ui/timeline"

const About = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started my journey in web development
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Learning React and modern web technologies
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-full w-full overflow-x-hidden pt-24">
      <MacbookScroll  />
      <Timeline data={timelineData} />
    </div>
  )
}

export default About