export async function getQueryResult({ query, option, filters = {} }) {
  return data[option.toLowerCase()];
}

const data = {
  jobs: [
    { name: "Frontend Developer", link: "https://example.com/jobs/frontend" },
    { name: "Backend Engineer", link: "https://example.com/jobs/backend" },
    { name: "Data Analyst", link: "https://example.com/jobs/data-analyst" },
  ],
  resources: [
    { name: "JavaScript Guide", link: "https://example.com/resources/js" },
    {
      name: "React Docs",
      link: "https://reactjs.org/docs/getting-started.html",
    },
    { name: "CSS Tricks", link: "https://css-tricks.com/" },
  ],
  forums: [
    { name: "Stack Overflow", link: "https://stackoverflow.com" },
    { name: "Reddit r/webdev", link: "https://reddit.com/r/webdev" },
    { name: "Dev.to", link: "https://dev.to" },
  ],
};
