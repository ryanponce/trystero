import data from "./data.json";

const { weeks } = data;

const archiveListContainer = document.getElementById("archive-list");

weeks.forEach((week) => {
  const weekDetails = document.createElement("details");
  const summary = document.createElement("summary");
  const coffeeListContainer = document.createElement("ul");

  week.coffees.forEach((coffee) => {
    const coffeeListItem = document.createElement("li");
    coffeeListItem.innerText = coffee.name;

    coffeeListContainer.append(coffeeListItem);
  });

  summary.innerText = formatWeekText(week.startDate);
  weekDetails.append(summary);
  weekDetails.append(coffeeListContainer);
  archiveListContainer.append(weekDetails);
});

function formatWeekText(week: string) {
  const weekDate = new Date(week);

  return weekDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
