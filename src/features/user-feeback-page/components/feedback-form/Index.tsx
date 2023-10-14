import { useForm } from "react-hook-form";
import FormControl from "../../../../Components/form/FormControl";
import Button from "../../../../Components/ui/Button";
import { AudioRecorder } from "react-audio-voice-recorder";

interface formProps {
  firstname: string;
  lastname: string;
  email: string;
}

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
};

function FeedbackForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>({
    defaultValues: initialValues,
    mode: "onTouched",
  });

  const addAudioElement = (blob: Blob) => {
    const audioContainer = document.getElementById("audio");
    if (audioContainer) {
      const url = URL.createObjectURL(blob);
      const audio = document.createElement("audio");
      audio.src = url;
      audio.controls = true;
      audioContainer.appendChild(audio);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    // Handle form submission
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-0">
        <div>
          <FormControl
            formType="input"
            type="text"
            label="First Name"
            name="firstname"
            register={register}
            errors={errors}
            placeholder="Enter First Name"
          />
        </div>
        <div>
          <FormControl
            formType="input"
            type="text"
            label="Last Name"
            name="lastname"
            register={register}
            errors={errors}
            placeholder="Enter Last Name"
          />
        </div>
      </div>

      <FormControl
        formType="input"
        type="email"
        label="E-mail"
        name="email"
        register={register}
        errors={errors}
        placeholder="example@domain.com"
      />

      <div
        id="audio"
        className="bg-white py-6 px-5 w-full flex flex-col items-center justify-center"
      >
        <p className="text-body-md text-primary my-4">
          The audio feedback is required
        </p>
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
            // autoGainControl,
            // channelCount,
            // deviceId,
            // groupId,
            // sampleRate,
            // sampleSize,
          }}
          onNotAllowedOrFound={(err) => console.table(err)}
          downloadOnSavePress={false}
          downloadFileExtension="webm"
          mediaRecorderOptions={{
            audioBitsPerSecond: 128000,
          }}
          // showVisualizer={true}
        />
        <br />
      </div>

      <Button type="primary" className="w-full mt-4 md:mt-5">
        Submit Feedback
      </Button>
    </form>
  );
}

export default FeedbackForm;
