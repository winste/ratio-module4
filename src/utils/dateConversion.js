class DateConversion {
  options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }

  constructor(timestamp, seconds) {
    this.date = new Date(timestamp * 1000)
    this.seconds = seconds
  }

  getReadingTime() {
    return Math.round(this.seconds / 60)
  }

  render() {
    return this.date.toLocaleDateString('en-US', this.options)
  }
}

export default DateConversion
