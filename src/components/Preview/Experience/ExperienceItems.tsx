export type ExperienceItem = {
  employerName: string;
  jobTitle: string;
  workCity: string;
  workState: string;
  startDate: string;
  endDate: string;
};

type Props = {
  experienceItem: ExperienceItem;
};

export default function Experiences({ experienceItem }: Props) {
  const { employerName, jobTitle, workCity, workState, startDate, endDate } =
    experienceItem;
  return (
    <>
      <div className="section-top">
        <p className="section-top-title">{employerName}</p>
        <p className="section-top-date">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="section-bottom">
        <p className="section-bottom-title">{jobTitle}</p>
        <p className="section-bottom-location">
          {workCity}, {workState}
        </p>
      </div>
    </>
  );
}
