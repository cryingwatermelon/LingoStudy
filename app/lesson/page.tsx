import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "./quiz";

type Props = {};

const LessonPage = async ({}: Props) => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();
  const [userProgress, lesson] = await Promise.all([
    userProgressData,
    lessonData,
  ]);
  if (!userProgress || !lesson) {
    redirect("/learn");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;
  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={undefined} //TODO: Add user subscription
    />
  );
};

export default LessonPage;
