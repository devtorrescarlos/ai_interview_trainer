import { Button } from "@/components/ui/button"
import { dummyInterviews } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import InterviewCard from "@/components/InterviewCard"


const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <div className="space-y-5">
            <h2>¡Practica para tu entrevista laboral con nuestro asistente virtual!</h2>
            <p className="text-lg">Obtén una entrevista en tiempo real y recibe retroalimentación instantánea</p>
            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/interview">Comienza una entrevista</Link>
            </Button>
          </div>
        </div>
        <Image className="max-sm:hidden" src="/robot.png" alt="robot-image" width={400} height={400} />
      </section>

      <section className="flex flex-col gap-6 mt-8">

        <h2>Tus Entrevistas</h2>

        <div className="interviews-section">
          {dummyInterviews.map(interview => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">

        <h2>Toma una entrevista</h2>

        <div className="interviews-section">
        {dummyInterviews.map(interview => (
            <InterviewCard key={interview.id} {...interview}/>
          ))}
        </div>
      </section>
    </>
  )
}

export default Page
