import React from "react";
import { useGetTeamsQuery } from "../../../feature/team/teamSlice";
import TeamMember from "./TeamMember";
import Loading from "../../ui/Loading"
import Error from "../../ui/Error"

export default function TeamMembers() {
  const { isLoading, isError, data: teamMembers } = useGetTeamsQuery();
  let content = null;
  if (isLoading) {
    content = <Loading></Loading>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error occur"></Error>;
  }
  if (!isLoading && !isError && teamMembers.length === 0) {
    content = <Error message="members not found"></Error>;
  }
  if (!isLoading && !isError && teamMembers.length > 0) {
    content = teamMembers.map((member) => (
      <TeamMember key={member.id} member={member}></TeamMember>
    ));
  }
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">
        {content}
      </div>
    </div>
  );
}
