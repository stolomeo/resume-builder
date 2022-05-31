import { PersonalItems } from "../../../types/";

type Props = {
  personalItems: PersonalItems;
};
export default function Personal({ personalItems }: Props) {
  const { firstName, lastName, email, phone, homeCity, homeState } =
    personalItems;
  return (
    <section className="resume-header">
      <h1 className="header-name">
        {firstName} {lastName}
      </h1>
      <div className="header-contact-info">
        <p className="header-email">{email}</p>
        <p className="divider">❖</p>
        <p className="header-phone-number">{phone}</p>
        <p className="divider">❖</p>
        <p className="header-city-state">
          {homeCity}, {homeState}
        </p>
      </div>
      <hr />
    </section>
  );
}
