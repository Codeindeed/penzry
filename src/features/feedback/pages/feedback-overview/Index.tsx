import FeedbackTable from "../../components/feedback-table/Index";

const FeedbackOverview = () => {
  return (
    <div className="px-5 py-4">
      <h3 className="text-primary text-headline-sm mb-5">All Feedbacks</h3>
      <FeedbackTable />
    </div>
  );
};

export default FeedbackOverview;
