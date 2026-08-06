import { ClerkLoaded, SignInButton as ClerkSignInButton } from "@clerk/nextjs";
import Link from "next/link";

const SignInButton = () => {
  return (
    <ClerkLoaded>
      <>
        <Link href="/sign-in" className="capitalize cursor-pointer hover:underline underline-offset-4 rounded-sm px-4 ">
          sign in
        </Link>
      </>
    </ClerkLoaded>
  );
};

export default SignInButton;
