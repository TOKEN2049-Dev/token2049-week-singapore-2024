
const dateOptions = [
  { value: "all", label: "Date", disabled: true },
  { value: "All", label: "All Dates" },
  { value: "2024-09-16T00:00:00.000Z", label: "Mon, 16 Sep" },
  { value: "2024-09-17T00:00:00.000Z", label: "Tue, 17 Sep" },
  { value: "2024-09-18T00:00:00.000Z", label: "Wed, 18 Sep" },
  { value: "2024-09-19T00:00:00.000Z", label: "Thu, 19 Sep" },
  { value: "2024-09-20T00:00:00.000Z", label: "Fri, 20 Sep" },
  { value: "2024-09-21T00:00:00.000Z", label: "Sat, 21 Sep" },
  { value: "2024-09-22T00:00:00.000Z", label: "Sun, 22 Sep" },
];

const tagOptions = [
  { value: "all", label: "Event Type", disabled: true },
  { value: "All", label: "All Events" },
  { value: "Workshop / Hackathon", label: "Workshop / Hackathon" },
  { value: "Party / Dinner", label: "Party / Dinner" },
  { value: "Conference / Summit", label: "Conference / Summit" },
  { value: "Networking", label: "Networking" },
  { value: "Sport", label: "Sport" },
  { value: "Other", label: "Other" },
];

const priceOptions = [
  { value: "all", label: "Price", disabled: true },
  { value: "All", label: "All" },
  { value: "Free", label: "Free" },
  { value: "Paid", label: "Paid" },
];

export { dateOptions, tagOptions, priceOptions }