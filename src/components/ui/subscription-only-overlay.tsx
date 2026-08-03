import { Lock } from "@mui/icons-material";

const SubscriptionOnlyOverlay = () => {
  return (
    <div className="z-10 h-full absolute inset-0 overflow-hidden border border-outline-variant backdrop-blur-3xl p-8 text-center flex flex-col justify-center items-center gap-4">
      <div className="absolute inset-0 article-gradient -z-10 h-32 -top-32"></div>
      <Lock
        suppressHydrationWarning
        className="fill-primary-fixed stroke-on-primary"
      />
      <p className="mb-2 text-2xl text-on-primary-container hover:text-none">
        Read the full story with a subscription
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center"></div>
    </div>
  );
};

export default SubscriptionOnlyOverlay;
