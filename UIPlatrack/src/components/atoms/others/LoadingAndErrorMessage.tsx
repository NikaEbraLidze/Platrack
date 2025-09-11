import "./styles/LoadingAndErrorMessage.scss";
import { ThreeDot } from "react-loading-indicators";
import { DailyLimit } from "../../../assets/assets";

interface BackendErrorProps {
  error: string;
  limitReached?: boolean;
}

export function LoadingIndicator() {
  return (
    <div className="loading">
      <ThreeDot color={["#a40707", "#d50909", "#f51c1c", "#f74d4d"]} />
    </div>
  );
}

export function BackendError({ error, limitReached }: BackendErrorProps) {
  return (
    <div className="backend-error-message">
      {limitReached ? (
        <>
          <img src={DailyLimit} alt="You have reached daily limit" />
          <p>{error}</p>
        </>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}
