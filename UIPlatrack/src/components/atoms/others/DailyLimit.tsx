import "./styles/DailyLimit.scss";

type DailyLimitProps = {
  limitNumber: number;
};

export function DailyLimit({ limitNumber }: DailyLimitProps) {
  return (
    <>
      <p className="daily-limit-counter">Search limit: {limitNumber}</p>
    </>
  );
}
