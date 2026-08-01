import { ClerkLoaded, SignInButton as ClerkSignInButton } from "@clerk/nextjs";

const SignInButton = () => {
  return (
    <ClerkLoaded>
      <ClerkSignInButton>
        <button className="capitalize cursor-pointer hover:underline underline-offset-4 rounded-sm px-4 ">
          sign in
        </button>
      </ClerkSignInButton>
    </ClerkLoaded>
  );
};

export default SignInButton;
