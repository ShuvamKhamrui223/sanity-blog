import { ClerkLoaded, SignUpButton as ClerkSignUpButton } from "@clerk/nextjs";

const SignUpButton = () => {
  return (
    <ClerkLoaded>
      <ClerkSignUpButton>
        <button className="bg-primary hover:bg-primary/90 text-white rounded-sm text-sm sm:text-base capitalize px-4 sm:px-5 py-2 cursor-pointer">
          Sign Up
        </button>
      </ClerkSignUpButton>
    </ClerkLoaded>
  );
};

export default SignUpButton;
