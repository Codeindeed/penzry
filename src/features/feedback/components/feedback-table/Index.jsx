import TableCard from "../../../dashboard/components/table-card/Index";
import { Fragment, useEffect, useState } from "react";
import filterfeedbacks from "../../../../Services/publishfeedback";
import ButtonSpinner from "../../../../Components/ui/ButtonSpinner";

import { CiShare1 } from "react-icons/ci";
const FeedbackTable = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getFeedback = async () => {
      setLoading(true);
      const response = await filterfeedbacks({ profile: "alex" });
      console.log(response);
      setFeedback(response);
      setLoading(false);
    };
    console.log(process.env.REACT_APP_supabaseKey);
    getFeedback();
  }, []);
  return (
    <div>
      {loading === true && <ButtonSpinner />}
      {loading === false && feedback.length === 0 && (
        <>
          <CiShare1></CiShare1>
        </>
      )}
      {feedback.map((cur, Index) => {
        return (
          <Fragment key={Index}>
            <TableCard
              feedback={cur.feedback}
              userEmail={cur.userEmail}
              numberReponses={cur.numberResponses}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default FeedbackTable;
