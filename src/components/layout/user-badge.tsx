import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export const UserTierBadge = async () => {
  const { has } = await auth();
  const isProMember = has({ plan: "pro_tier" });

  return (
    <div
      className={`${isProMember ? "bg-surface-container text-on-surface" : "bg-primary-container text-on-primary-container"}  px-4 py-2 rounded-full text-xs font-medium  flex items-center gap-4`}
    >
      {isProMember ? "Pro Member" : "Free Member"}
      <UserButton />
    </div>
  );
};
