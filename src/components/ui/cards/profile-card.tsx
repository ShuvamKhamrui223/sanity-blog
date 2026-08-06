import { urlFor } from "@/sanity/lib/image";
import { AUTHOR_DETAILS_QUERYResult } from "@/sanity/types";
import {
  AlternateEmail,
  ExpandMore,
  Link as MuiLink,
  ShareOutlined,
} from "@mui/icons-material";
import { PortableText } from "next-sanity";
import Image from "next/image";

const ProfileCard = ({
  profileDetails,
}: {
  profileDetails: NonNullable<AUTHOR_DETAILS_QUERYResult> | null;
}) => {
  return (
    <>
      <section className="max-w-content-max-width mx-auto px-page-margin relative z-10 ">
        <div className="profile-card-overlap glass-effect rounded-xl p-8 shadow-sm bg-secondary-container border border-outline-variant text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-6">
            <div className="relative -mt-20 md:-mt-24 w-32 h-32 md:w-40 md:h-40 border-4 border-surface-lowest shadow-lg rounded-full overflow-hidden">
              <Image
                alt="Elena Vance"
                className="object-cover"
                src={
                  profileDetails?.profilePicture
                    ? urlFor(profileDetails.profilePicture)
                        .width(160)
                        .height(160)
                        .url()
                    : "/profile-picture.jpeg"
                }
                loading="lazy"
                fill
              />
            </div>
            <div className="grow pb-2">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
                <div>
                  <h1>{profileDetails?.name}</h1>
                  <p className="font-label-ui text-label-ui text-primary uppercase tracking-widest mt-1">
                    {profileDetails?.tagline}{" "}
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex gap-4 items-center mr-2">
                    <a className="text-on-surface-variant hover:text-primary transition-colors">
                      <AlternateEmail />
                    </a>
                    <a
                      className="text-on-surface-variant hover:text-primary transition-colors"
                      href="#"
                    >
                      <MuiLink />
                    </a>
                    <a
                      className="text-on-surface-variant hover:text-primary transition-colors"
                      href="#"
                    >
                      <ShareOutlined />{" "}
                    </a>
                  </div>
                  <button className="bg-primary text-on-primary font-label-ui text-label-ui px-8 py-3 rounded-full hover:bg-primary/90 transition-all shadow-md">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 pt-6 border-t border-outline-variant">
            <div className="md:col-span-3 flex flex-col gap-6">
              <div className="flex justify-center md:justify-start gap-12 pb-6 border-b border-outline-variant">
                <div className="text-center">
                  <span className="block font-headline-section text-on-surface">
                    12.4k
                  </span>
                  <span className="font-label-ui text-label-ui text-secondary">
                    Followers
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-headline-section text-on-surface">
                    142
                  </span>
                  <span className="font-label-ui text-label-ui text-secondary">
                    Following
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-headline-section text-on-surface">
                    24
                  </span>
                  <span className="font-label-ui text-label-ui text-secondary">
                    Total Posts
                  </span>
                </div>
              </div>
              <details className="group">
                <summary className="flex items-center gap-2 font-label-ui text-label-ui text-primary cursor-pointer list-none uppercase tracking-widest">
                  Read Bio
                  <ExpandMore />
                </summary>
                <div className="mt-4 text-on-surface-variant max-w-[30ch] md:max-w-[90ch] text-left leading-relaxed text-body-main prose space-y-6 mx-auto">
                    {profileDetails?.bio
                      ? Array.isArray(profileDetails?.bio) && (
                          <PortableText value={profileDetails?.bio} />
                        )
                      : null}
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
