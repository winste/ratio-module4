class DateConversion {
  constructor(timestamp, seconds) {
    this.date = new Date(timestamp * 1000);
    this.mounthName = [
      "January","February","March",
      "April","May","June",
      "July","August","September",
      "October","November","December",
    ];
    this.minutes = seconds / 60;
  }

  getMonth() {
    return this.date.getMonth();
  }

  getDay() {
    return this.date.getDate();
  }

  getYear() {
    return this.date.getFullYear();
  }

  getReadingTime() {
    return this.minutes;
  }

  render() {
    return `${this.mounthName[this.getMonth()]} ${this.getDay()}, ${this.getYear()}`;
  }
}


export default DateConversion;