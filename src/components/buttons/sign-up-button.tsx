import { ClerkLoaded } from "@clerk/nextjs";
import Link from "next/link";

const SignUpButton = () => {
  return (
    <ClerkLoaded>
      <>
        <Link href="/sign-up" className="bg-primary hover:bg-primary/90 text-white rounded-sm text-sm sm:text-base capitalize px-4 sm:px-5 py-2 cursor-pointer">
          Sign Up
        </Link>
      </>
    </ClerkLoaded>
  );
};

export default SignUpButton;
