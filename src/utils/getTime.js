class DateConversion {
  constructor(timestamp, seconds) {
    this.date = new Date(timestamp * 1000);
    this.seconds = seconds;
    this.options = {
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  }

  getReadingTime() {
    return this.seconds / 60;
  }

  render() {
    return this.date.toLocaleDateString("en-US", this.options);
  }
}


export default DateConversion;