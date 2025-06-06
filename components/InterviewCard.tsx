import { getRandomInterviewCover } from "@/lib/utils";
import dayjs from "dayjs"
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";


const InterviewCard = ({ interviewId, role, type, techstack, createdAt }: InterviewCardProps) => {
    const feedback = null as Feedback || null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');
    return (
        <div className="card-border w-[360px] max-sm:w-full min-h-96">
            <div className="card-interview">
                <div>
                    <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
                        <p className="badge-text">{normalizedType}</p>
                    </div>
                    <Image src={getRandomInterviewCover()} alt="Interview Cover" width={90} height={90} />
                    <h3 className="capitalize mt-5">
                        {role} Interview
                    </h3>

                    <div className="flex flex-row mt-3 gap-5">
                        <div className="flex flex-row gap-2">
                            <Image src="/calendar.svg" alt="Calendario" width={22} height={22} />
                        </div>
                        <p>{formattedDate}</p>

                        <div className="flex flex-row gap-2 items-center">
                            <Image src="/star.svg" alt="star" width={22} height={22} />
                            <p>{feedback?.totalScore || "---"}/100 </p>
                        </div>
                    </div>

                    <p className="line-clamp-2 mt-5">{feedback?.finalAssessment || "Aún no has tomado esta entrevista"}</p>
                </div>

                <div className="flex flex-row justify-between">
                    <DisplayTechIcons techStack={techstack} />

                    <Button className="btn-primary">
                        <Link href={feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`}>{feedback ? 'Leer retroalimentación' : 'Tomar entrevista'}</Link>
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default InterviewCard
