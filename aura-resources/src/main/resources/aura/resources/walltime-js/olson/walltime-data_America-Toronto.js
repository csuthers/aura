(function() {
    window.WallTime || (window.WallTime = {});
    window.WallTime.data = {
        rules: {"Canada":[{"name":"Canada","_from":"1918","_to":"only","type":"-","in":"Apr","on":"14","at":"2:00","_save":"1:00","letter":"D"},{"name":"Canada","_from":"1918","_to":"only","type":"-","in":"Oct","on":"27","at":"2:00","_save":"0","letter":"S"},{"name":"Canada","_from":"1942","_to":"only","type":"-","in":"Feb","on":"9","at":"2:00","_save":"1:00","letter":"W"},{"name":"Canada","_from":"1945","_to":"only","type":"-","in":"Aug","on":"14","at":"23:00u","_save":"1:00","letter":"P"},{"name":"Canada","_from":"1945","_to":"only","type":"-","in":"Sep","on":"30","at":"2:00","_save":"0","letter":"S"},{"name":"Canada","_from":"1974","_to":"1986","type":"-","in":"Apr","on":"lastSun","at":"2:00","_save":"1:00","letter":"D"},{"name":"Canada","_from":"1974","_to":"2006","type":"-","in":"Oct","on":"lastSun","at":"2:00","_save":"0","letter":"S"},{"name":"Canada","_from":"1987","_to":"2006","type":"-","in":"Apr","on":"Sun>=1","at":"2:00","_save":"1:00","letter":"D"},{"name":"Canada","_from":"2007","_to":"max","type":"-","in":"Mar","on":"Sun>=8","at":"2:00","_save":"1:00","letter":"D"},{"name":"Canada","_from":"2007","_to":"max","type":"-","in":"Nov","on":"Sun>=1","at":"2:00","_save":"0","letter":"S"}],"Toronto":[{"name":"Toronto","_from":"1919","_to":"only","type":"-","in":"Mar","on":"30","at":"23:30","_save":"1:00","letter":"D"},{"name":"Toronto","_from":"1919","_to":"only","type":"-","in":"Oct","on":"26","at":"0:00","_save":"0","letter":"S"},{"name":"Toronto","_from":"1920","_to":"only","type":"-","in":"May","on":"2","at":"2:00","_save":"1:00","letter":"D"},{"name":"Toronto","_from":"1920","_to":"only","type":"-","in":"Sep","on":"26","at":"0:00","_save":"0","letter":"S"},{"name":"Toronto","_from":"1921","_to":"only","type":"-","in":"May","on":"15","at":"2:00","_save":"1:00","letter":"D"},{"name":"Toronto","_from":"1921","_to":"only","type":"-","in":"Sep","on":"15","at":"2:00","_save":"0","letter":"S"},{"name":"Toronto","_from":"1922","_to":"1923","type":"-","in":"May","on":"Sun>=8","at":"2:00","_save":"1:00","letter":"D"},{"name":"Toronto","_from":"1922","_to":"1926","type":"-","in":"Sep","on":"Sun>=15","at":"2:00","_save":"0","letter":"S"},{"name":"Toronto","_from":"1924","_to":"1927","type":"-","in":"May","on":"Sun>=1","at":"2:00","_save":"1:00","letter":"D"},{"name":"Toronto","_from":"1927","_to":"1932","type":"-","in":"Sep","on":"lastSun","at":"2:00","_save":"0","letter":"S"},{"name":"Toronto","_from":"1928","_to":"1931","type":"-","in":"Apr","on":"lastSun","at":"2:00","_save":"1:00","letter":"D"},{"name":"Toronto","_from":"1932","_to":"only","type":"-","in":"May","on":"1","at":"2:00","_save":"1:00","letter":"D"},{"name":"Toronto","_from":"1933","_to":"1940","type":"-","in":"Apr","on":"lastSun","at":"2:00","_save":"1:00","letter":"D"},{"name":"Toronto","_from":"1933","_to":"only","type":"-","in":"Oct","on":"1","at":"2:00","_save":"0","letter":"S"},{"name":"Toronto","_from":"1934","_to":"1939","type":"-","in":"Sep","on":"lastSun","at":"2:00","_save":"0","letter":"S"},{"name":"Toronto","_from":"1945","_to":"1946","type":"-","in":"Sep","on":"lastSun","at":"2:00","_save":"0","letter":"S"},{"name":"Toronto","_from":"1946","_to":"only","type":"-","in":"Apr","on":"lastSun","at":"2:00","_save":"1:00","letter":"D"},{"name":"Toronto","_from":"1947","_to":"1949","type":"-","in":"Apr","on":"lastSun","at":"0:00","_save":"1:00","letter":"D"},{"name":"Toronto","_from":"1947","_to":"1948","type":"-","in":"Sep","on":"lastSun","at":"0:00","_save":"0","letter":"S"},{"name":"Toronto","_from":"1949","_to":"only","type":"-","in":"Nov","on":"lastSun","at":"0:00","_save":"0","letter":"S"},{"name":"Toronto","_from":"1950","_to":"1973","type":"-","in":"Apr","on":"lastSun","at":"2:00","_save":"1:00","letter":"D"},{"name":"Toronto","_from":"1950","_to":"only","type":"-","in":"Nov","on":"lastSun","at":"2:00","_save":"0","letter":"S"},{"name":"Toronto","_from":"1951","_to":"1956","type":"-","in":"Sep","on":"lastSun","at":"2:00","_save":"0","letter":"S"},{"name":"Toronto","_from":"1957","_to":"1973","type":"-","in":"Oct","on":"lastSun","at":"2:00","_save":"0","letter":"S"}]},
        zones: {"America/Toronto":[{"name":"America/Toronto","_offset":"-5:17:32","_rule":"-","format":"LMT","_until":"1895"},{"name":"America/Toronto","_offset":"-5:00","_rule":"Canada","format":"E%sT","_until":"1919"},{"name":"America/Toronto","_offset":"-5:00","_rule":"Toronto","format":"E%sT","_until":"1942 Feb 9 2:00s"},{"name":"America/Toronto","_offset":"-5:00","_rule":"Canada","format":"E%sT","_until":"1946"},{"name":"America/Toronto","_offset":"-5:00","_rule":"Toronto","format":"E%sT","_until":"1974"},{"name":"America/Toronto","_offset":"-5:00","_rule":"Canada","format":"E%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);
