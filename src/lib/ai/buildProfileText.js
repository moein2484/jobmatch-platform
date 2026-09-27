export function buildProfileText(profile) {
  return `
Job title:
${profile.jobTitle || ""}

Skills:
${profile.skills?.join(", ") || ""}

Experience:
${profile.experience || ""}

Education:
${profile.education || ""}

Location:
${profile.location || ""}

Job type:
${profile.jobType || ""}

Salary:
${profile.salary || ""}
`.trim();
}