var myDate = function(day, month, year){

    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function() {
        return this.day;
    }

    this.getMonth = function() {
        return this.month;
    }

    this.getYear = function() {
        return this.year;
    }

    this.setDay = function(day) {
        this.day = day;
    }

    this.setMonth = function(month) {
        this.month = month;
    }

    this.setYear = function(year) {
        this.year = year;
    }
}