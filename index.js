const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

const superbowlWin = array => {
    const winningSeason = array.find((season) => season.result === 'W');
    if (winningSeason !== undefined) {
      return winningSeason.year;
    }
}

superbowlWin(record);