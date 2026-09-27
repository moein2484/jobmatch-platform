export function buildJobText(job) {
  return `
Job title:
${job.title || ""}

Skills:
${job.skills?.join(", ") || ""}

Experience:
${job.experience || ""}

Education:
${job.education || ""}

Location:
${job.location || ""}

Job type:
${job.jobType || ""}

Salary:
${job.salary || ""}
`.trim();
}